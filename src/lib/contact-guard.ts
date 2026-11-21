const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 5;
const MAX_PER_EMAIL = 3;
const MAX_GLOBAL = 40;

type Bucket = {
  hits: number[];
};

const buckets = new Map<string, Bucket>();

function prune(now: number) {
  for (const [key, bucket] of buckets) {
    bucket.hits = bucket.hits.filter((stamp) => now - stamp < WINDOW_MS);
    if (bucket.hits.length === 0) buckets.delete(key);
  }
}

function allow(key: string, max: number, now: number) {
  const bucket = buckets.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((stamp) => now - stamp < WINDOW_MS);
  if (bucket.hits.length >= max) {
    buckets.set(key, bucket);
    return false;
  }
  bucket.hits.push(now);
  buckets.set(key, bucket);
  return true;
}

/** Best-effort limit for one server instance. Not a global lock across hosts. */
export function allowContactSubmission(ip: string, email: string) {
  const now = Date.now();
  if (buckets.size > 5000) prune(now);

  const ipKey = `ip:${ip || "unknown"}`;
  const emailKey = `email:${email.toLowerCase()}`;
  if (!allow("global", MAX_GLOBAL, now)) return false;
  if (!allow(ipKey, MAX_PER_IP, now)) return false;
  if (!allow(emailKey, MAX_PER_EMAIL, now)) return false;
  return true;
}

export function clientAddress(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 80);
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp ? realIp.slice(0, 80) : "unknown";
}
