"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Maatlijn zoals op een plattegrond: haarlijn met eindstreepjes en de maat in
 * het midden. Tekent zich één keer uit vanaf het midden zodra hij in beeld komt.
 * Zonder JS (geen .js op <html>) staat hij er gewoon.
 */
export default function Maatlijn({
  label,
  tone = "inkt",
  className = "",
  direct = false,
}: {
  label?: React.ReactNode;
  tone?: "inkt" | "licht" | "blauw";
  className?: string;
  direct?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [zichtbaar, setZichtbaar] = useState(direct);

  useEffect(() => {
    if (direct) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setZichtbaar(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [direct]);

  const kleur =
    tone === "licht" ? "text-calque-50/80" : tone === "blauw" ? "text-blauw" : "text-inkt-600";

  return (
    <div
      ref={ref}
      data-zichtbaar={zichtbaar ? "true" : "false"}
      className={`maatlijn relative flex items-center ${kleur} ${className}`}
      aria-hidden={label ? undefined : true}
    >
      <span className="maatlijn-tick block h-3 w-px shrink-0 bg-current" />
      <span className="maatlijn-lijn block h-px flex-1 bg-current" />
      {label ? (
        <>
          <span className="maatlijn-label plan-letter maat shrink-0 px-3 text-[11px] leading-none sm:text-xs">
            {label}
          </span>
          <span className="maatlijn-lijn block h-px flex-1 bg-current" />
        </>
      ) : null}
      <span className="maatlijn-tick block h-3 w-px shrink-0 bg-current" />
    </div>
  );
}
