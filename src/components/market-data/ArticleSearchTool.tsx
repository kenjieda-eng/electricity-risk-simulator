"use client";

import { useState, useMemo } from "react";
import Fuse, { type IFuseOptions } from "fuse.js";

type ArticleEntry = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
};

type Props = {
  articles: ArticleEntry[];
};

const FUSE_OPTIONS: IFuseOptions<ArticleEntry> = {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "category", weight: 0.2 },
  ],
  threshold: 0.35,
  minMatchCharLength: 2,
  ignoreLocation: true,
};

export default function ArticleSearchTool({ articles }: Props) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Map<string, string>();
    articles.forEach((a) => set.set(a.categorySlug, a.category));
    return Array.from(set.entries()).map(([slug, name]) => ({ slug, name }));
  }, [articles]);

  const fuse = useMemo(() => new Fuse(articles, FUSE_OPTIONS), [articles]);

  const filtered = useMemo(() => {
    const scopedArticles =
      categoryFilter === "all"
        ? articles
        : articles.filter((a) => a.categorySlug === categoryFilter);

    const trimmed = query.trim();
    if (trimmed.length < 2) return scopedArticles;

    const hits = fuse.search(trimmed);
    const scoped = new Set(scopedArticles.map((a) => a.slug));
    return hits
      .filter((hit) => scoped.has(hit.item.slug))
      .map((hit) => hit.item);
  }, [articles, fuse, query, categoryFilter]);

  return (
    <section className="mt-6 rounded-xl border-2 border-sky-300 bg-sky-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">🔍 全記事横断検索</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        全{articles.length}本の解説記事を、キーワード・カテゴリで絞り込み検索できます。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-700">キーワード</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="例：蓄電池、デマンド、補助金..."
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">カテゴリ</label>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="all">すべて</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 max-h-96 overflow-y-auto rounded-lg border border-sky-200 bg-white">
        <p className="border-b border-sky-200 bg-sky-50 px-3 py-2 text-xs font-semibold text-slate-700">検索結果: {filtered.length}件</p>
        {filtered.length === 0 ? (
          <p className="px-3 py-4 text-sm text-slate-500">該当する記事が見つかりません。</p>
        ) : (
          <ul className="divide-y divide-sky-100">
            {filtered.slice(0, 50).map((a) => (
              <li key={a.slug} className="px-3 py-2 hover:bg-sky-50">
                <a href={`/${a.slug}`} className="block">
                  <p className="text-sm font-semibold text-sky-700 hover:underline">{a.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{a.description}</p>
                  <p className="mt-1 text-xs text-slate-400">{a.category}</p>
                </a>
              </li>
            ))}
            {filtered.length > 50 && (
              <li className="px-3 py-2 text-xs text-slate-500">他{filtered.length - 50}件...（絞り込みを追加してください）</li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
