import { useId } from "react";

/** Same centerline and artwork as the logo swoosh, cropped to the arrow so it can sit above the success message. */
const SWOOSH_PATH =
  "M 568 203.5 L 543 213 L 518 220 L 493 225.5 L 468 230.5 L 443 234.5 L 418 238 L 393 241 L 368 243.5 L 343 245.5 L 318 247 L 293 248.5 L 268 249.5 L 243 250.5 L 218 250.5 L 193 250.5 L 168 249.5 L 143 248.5 L 118 247 L 93 245";

export function SuccessSwoosh({ className }: { className?: string }) {
  const maskId = `success-swoosh-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="80 186 515 92" className={className} aria-hidden="true" focusable="false">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="620" height="280">
          <path className="swoosh-pen" d={SWOOSH_PATH} pathLength={100} />
        </mask>
      </defs>
      <image href="/brand/logo-swoosh.png" width="620" height="280" mask={`url(#${maskId})`} />
    </svg>
  );
}
