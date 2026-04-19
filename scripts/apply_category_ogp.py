"""Rewrite per-article page.tsx OGP image references to category-specific URLs.

After shipping the dynamic OG route at /api/og/[categorySlug], every
articleList-backed page's metadata still pointed at the single
/ogp-default.png fallback. This script walks articleList, looks up the
corresponding src/app/<slug>/page.tsx, and rewrites:

  url: "/ogp-default.png"        ->  url: "/api/og/<categorySlug>"
  "/ogp-default.png"  (images:)  ->  "/api/og/<categorySlug>"
  images: ["/twitter-default.png"] -> images: ["/api/og/<categorySlug>"]

so openGraph + twitter cards both resolve through the new route. Pages
that have already been migrated, or that don't have the exact default
string, are skipped (no blind regex that would corrupt bespoke OG images).

Run: `python scripts/apply_category_ogp.py`
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_TS = ROOT / "src" / "data" / "articles.ts"
APP_DIR = ROOT / "src" / "app"

ENTRY_RE = re.compile(
    r'slug:\s*"([^"]+)"[^{}]*?categorySlug:\s*"([a-z-]+)"',
    re.DOTALL,
)


def load_article_index() -> dict[str, str]:
    """Return slug -> categorySlug. Only the canonical articleList entries."""
    text = ARTICLES_TS.read_text(encoding="utf-8")
    # Scope to the articleList so we don't accidentally pick up
    # articleCategories items (they don't have `categorySlug` anyway,
    # but this keeps it strict).
    index: dict[str, str] = {}
    for match in ENTRY_RE.finditer(text):
        slug, category = match.group(1), match.group(2)
        index.setdefault(slug, category)
    return index


OGP_DEFAULT = '/ogp-default.png'
TWITTER_DEFAULT = '/twitter-default.png'


def rewrite_page(path: Path, category_slug: str) -> bool:
    """Rewrite a page.tsx in place. Returns True if any change was made."""
    src = path.read_text(encoding="utf-8")
    target_url = f'/api/og/{category_slug}'

    if target_url in src:
        return False  # already migrated

    new = src.replace(f'"{OGP_DEFAULT}"', f'"{target_url}"')
    new = new.replace(f'"{TWITTER_DEFAULT}"', f'"{target_url}"')

    if new == src:
        return False

    path.write_text(new, encoding="utf-8")
    return True


def main() -> None:
    index = load_article_index()
    changed = 0
    missing_dir = 0
    already = 0
    no_default = 0

    for slug, category in index.items():
        page = APP_DIR / slug / "page.tsx"
        if not page.exists():
            missing_dir += 1
            continue
        before = page.read_text(encoding="utf-8")
        if f"/api/og/{category}" in before:
            already += 1
            continue
        if OGP_DEFAULT not in before and TWITTER_DEFAULT not in before:
            no_default += 1
            continue
        if rewrite_page(page, category):
            changed += 1

    print(f"rewrote: {changed}")
    print(f"already migrated: {already}")
    print(f"no default image reference (skipped): {no_default}")
    print(f"articleList slug with no page.tsx (skipped): {missing_dir}")


if __name__ == "__main__":
    main()
