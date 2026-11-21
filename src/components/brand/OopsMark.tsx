"use client";

import { LogoMark } from "@/components/brand/LogoMark";

export function OopsMark() {
  return (
    <div className="oops-stage" aria-hidden="true">
      <LogoMark className="oops-logo" />
      <span className="oops-dot" />
    </div>
  );
}
