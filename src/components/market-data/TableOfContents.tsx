"use client";

import { useEffect, useState } from "react";

type Props = {
  selectors?: string[];
};

export default function TableOfContents({ selectors = ["main h2", "main h3"] }: Props) {
  const [items, setItems] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = document.querySelectorAll(selectors.join(","));
    const itemList: { id: string; text: string; level: number }[] = [];
    headings.forEach((h, idx) => {
      if (!h.id) h.id = `toc-${idx}`;
      itemList.push({
        id: h.id,
        text: h.textContent ?? "",
        level: h.tagName === "H2" ? 2 : 3,
      });
    });
    setItems(itemList);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-10% 0px -80% 0px" },
    );
    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [selectors]);

  if (items.length < 3) return null;

  return (
    <nav aria-label="目次" className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4">
      <p className="text-xs font-semibold text-slate-700">📖 このページの目次</p>
      <ul className="mt-2 space-y-1 text-sm">
        {items.map((it) => (
          <li key={it.id} className={it.level === 3 ? "pl-4" : ""}>
            <a href={`#${it.id}`} className={`block hover:text-sky-700 ${activeId === it.id ? "font-bold text-sky-800" : "text-slate-700"}`}>
              {it.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
