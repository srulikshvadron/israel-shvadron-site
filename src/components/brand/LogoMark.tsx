import { cn } from "@/lib/utils";

const FLOW = "/brand/flow";

type LogoMode = "static" | "sending" | "success" | "error";
type LogoVariant = "lockup" | "gears" | "check";

/** Layers cut from the profile logo. The header stacks the full picture; the form uses the gear and check crops. */
export function LogoMark({
  className,
  mode = "static",
  variant = "lockup",
}: {
  className?: string;
  mode?: LogoMode;
  variant?: LogoVariant;
}) {
  if (variant === "gears") {
    return (
      <span
        className={cn(
          "flow-gears",
          mode === "sending" && "is-sending",
          mode === "error" && "is-error",
          className,
        )}
        aria-hidden="true"
      >
        <img src={`${FLOW}/gear-lg-mark.png`} alt="" className="flow-gear-mark" />
        <img src={`${FLOW}/gear-sm-mark.png`} alt="" className="flow-gear-mark flow-gear-mark-sm" />
        {mode === "error" ? <img src={`${FLOW}/dot-mark.png`} alt="" className="flow-dot-mark" /> : null}
      </span>
    );
  }

  if (variant === "check") {
    return (
      <img
        src={`${FLOW}/check-mark.png`}
        alt=""
        aria-hidden="true"
        className={cn("flow-check-mark", mode === "success" && "is-success", className)}
      />
    );
  }

  return (
    <span className={cn("logo-mark", className)} aria-hidden="true">
      <img src={`${FLOW}/word.png`} alt="" className="flow-layer flow-word" />
      <img src={`${FLOW}/line.png`} alt="" className="flow-layer flow-line" />
      <img src={`${FLOW}/pip-4.png`} alt="" className="flow-layer flow-pip flow-pip-4" />
      <img src={`${FLOW}/pip-3.png`} alt="" className="flow-layer flow-pip flow-pip-3" />
      <img src={`${FLOW}/pip-2.png`} alt="" className="flow-layer flow-pip flow-pip-2" />
      <img src={`${FLOW}/pip-1.png`} alt="" className="flow-layer flow-pip flow-pip-1" />
      <img src={`${FLOW}/gear-lg.png`} alt="" className="flow-layer flow-gear-lg" />
      <img src={`${FLOW}/gear-sm.png`} alt="" className="flow-layer flow-gear-sm" />
      <img src={`${FLOW}/check.png`} alt="" className="flow-layer flow-check" />
      <img src={`${FLOW}/dot.png`} alt="" className="flow-layer flow-dot" />
    </span>
  );
}
