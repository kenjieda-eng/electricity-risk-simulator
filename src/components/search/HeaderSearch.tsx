"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Fuse, { type IFuseOptions } from "fuse.js";
import { buildSearchIndex, type SearchEntry } from "../../lib/searchIndex";

const FUSE_OPTIONS: IFuseOptions<SearchEntry> = {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "category", weight: 0.2 },
  ],
  threshold: 0.35,
  includeMatches: true,
  minMatchCharLength: 2,
};

const MAX_RESULTS = 8;

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(() => {
    const index = buildSearchIndex();
    return new Fuse(index, FUSE_OPTIONS);
  }, []);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    return fuse.search(query.trim(), { limit: MAX_RESULTS });
  }, [fuse, query]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  }, []);

  const handleFocus = useCallback(() => {
    if (query.trim().length >= 2) setIsOpen(true);
  }, [query]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Escキーで閉じる
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        inputRef.current?.blur();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  // 外側クリックで閉じる
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [handleClose]);

  const showResults = isOpen && query.trim().length >= 2;

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500">
        <svg
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx={11} cy={11} r={8} />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="サイト内検索"
          className="w-28 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none sm:w-40 lg:w-52"
          aria-label="サイト内検索"
        />
      </div>

      {showResults && (
        <div className="absolute right-0 top-full z-50 mt-1.5 w-[min(400px,90vw)] rounded-xl border border-slate-200 bg-white shadow-lg">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-slate-500">
              「{query}」に一致する結果がありません
            </p>
          ) : (
            <ul className="max-h-[70vh] overflow-y-auto py-1.5">
              {results.map(({ item }) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleClose}
                    className="block px-4 py-2.5 transition hover:bg-sky-50"
                  >
                    <span className="mb-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                      {item.category}
                    </span>
                    <p className="text-sm font-medium leading-snug text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
