"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const cur = h.scrollTop || document.body.scrollTop;
      setPct(total > 0 ? (cur / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="reading-progress-bar" style={{ width: `${pct}%` }} aria-hidden />;
}
