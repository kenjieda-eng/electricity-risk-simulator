"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="ページトップへ戻る"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-lg transition hover:bg-slate-50 hover:text-slate-900"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.573a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-3.961V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
