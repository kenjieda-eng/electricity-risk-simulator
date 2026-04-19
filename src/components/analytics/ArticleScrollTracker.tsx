"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { articleList } from "../../data/articles";
import { trackEvent } from "../../lib/analytics/ga";

const SLUG_SET = new Set(articleList.map((a) => a.slug));
const DEPTH_TIERS = [25, 50, 75, 100] as const;

export default function ArticleScrollTracker() {
  const pathname = usePathname();
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    firedRef.current = new Set();
    if (!pathname) return;
    const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
    if (!SLUG_SET.has(slug)) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop;
        const winHeight = window.innerHeight;
        const docHeight = doc.scrollHeight;
        if (docHeight <= 0) {
          ticking = false;
          return;
        }
        const depth = Math.min(
          100,
          Math.round(((scrollTop + winHeight) / docHeight) * 100)
        );

        for (const tier of DEPTH_TIERS) {
          if (depth >= tier && !firedRef.current.has(tier)) {
            firedRef.current.add(tier);
            trackEvent("article_scroll_depth", {
              page_path: pathname,
              depth_percent: tier,
            });
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
