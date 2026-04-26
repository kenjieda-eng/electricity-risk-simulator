"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  /** Link target. Defaults to the simulator home. */
  href?: string;
  /** Visible label. Defaults to a 30-second risk-diagnosis CTA. */
  label?: string;
  /** Scroll threshold in pixels before the CTA appears. */
  scrollThreshold?: number;
};

const STORAGE_KEY = "floating-cta-dismissed";

export default function FloatingCta({
  href = "/",
  label = "30秒でリスク診断 →",
  scrollThreshold = 300,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage?.getItem(STORAGE_KEY) === "1") {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > scrollThreshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  if (dismissed || !visible) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      window.sessionStorage?.setItem(STORAGE_KEY, "1");
    }
  };

  return (
    <div
      role="region"
      aria-label="リスク診断への誘導"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:bottom-6"
    >
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-sky-300 bg-white/95 p-1 pl-4 shadow-lg shadow-sky-900/10 backdrop-blur">
        <Link
          href={href}
          className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 sm:px-5 sm:text-base"
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="フローティング CTA を閉じる"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  );
}
