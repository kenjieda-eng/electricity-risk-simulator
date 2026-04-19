# -*- coding: utf-8 -*-
"""
Add BreadcrumbJsonLd to all article pages that don't already have breadcrumb JSON-LD.

Logic:
  - Read src/data/articles.ts, extract articleCategories (slug -> name) and
    articleList (slug, categorySlug, title).
  - For each article slug, locate src/app/<slug>/page.tsx.
  - Skip the file if:
      (1) it already imports or renders BreadcrumbJsonLd
      (2) it renders <ArticleJsonLd ...> with a breadcrumbItems prop passed inline
      (3) it uses a shared article component that emits breadcrumb structured data
          (currently: ReviewArticlePage)
  - Otherwise, insert:
      - an import of BreadcrumbJsonLd (added to an existing ../../components/seo/JsonLd
        import if present, else a new import line)
      - a <BreadcrumbJsonLd ... /> element at the top of the JSX returned by the
        default-export page component (wrapped in a Fragment if the current
        return isn't already a Fragment)

All file edits preserve original encoding (UTF-8 without BOM, LF/CRLF as-is).
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARTICLES_TS = ROOT / "src" / "data" / "articles.ts"
APP_DIR = ROOT / "src" / "app"

# Shared components that already emit BreadcrumbList JSON-LD themselves.
SHARED_BREADCRUMB_COMPONENTS = ("ReviewArticlePage",)


def parse_articles_ts() -> tuple[dict[str, str], list[dict]]:
    """Return (categorySlug -> name map, list of {slug, categorySlug, title})."""
    text = ARTICLES_TS.read_text(encoding="utf-8")

    # ---- articleCategories: map slug -> name ----
    cat_match = re.search(
        r"export const articleCategories:\s*ArticleCategory\[\]\s*=\s*\[(.*?)\n\];\s*",
        text,
        flags=re.S,
    )
    if not cat_match:
        raise RuntimeError("articleCategories block not found")
    cat_body = cat_match.group(1)

    # top-level entries
    cat_entries = _split_top_level_entries(cat_body)
    cat_map: dict[str, str] = {}
    for entry in cat_entries:
        name_m = re.search(r'name:\s*"([^"]+)"', entry)
        slug_m = re.search(r'slug:\s*"([^"]+)"', entry)
        if name_m and slug_m:
            cat_map[slug_m.group(1)] = name_m.group(1)

    # ---- articleList: list of {slug, categorySlug, title} ----
    art_match = re.search(
        r"export const articleList:\s*ArticleMeta\[\]\s*=\s*\[(.*?)\n\];\s*",
        text,
        flags=re.S,
    )
    if not art_match:
        raise RuntimeError("articleList block not found")
    art_body = art_match.group(1)
    art_entries = _split_top_level_entries(art_body)
    articles = []
    for entry in art_entries:
        slug_m = re.search(r'slug:\s*"([^"]+)"', entry)
        cs_m = re.search(r'categorySlug:\s*"([^"]+)"', entry)
        title_m = re.search(r'title:\s*"([^"]+)"', entry)
        if slug_m and cs_m and title_m:
            articles.append(
                {
                    "slug": slug_m.group(1),
                    "categorySlug": cs_m.group(1),
                    "title": title_m.group(1),
                }
            )
    return cat_map, articles


def _split_top_level_entries(body: str) -> list[str]:
    """Split a TypeScript array body into top-level {...} entries (depth-aware)."""
    entries = []
    depth = 0
    buf = []
    in_entry = False
    in_string = None  # None or one of '"', "'", "`"
    escape = False
    for ch in body:
        if in_string is not None:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_string:
                in_string = None
            if in_entry:
                buf.append(ch)
            continue
        if ch in ('"', "'", "`"):
            in_string = ch
            if in_entry:
                buf.append(ch)
            continue
        if ch == "{":
            if depth == 0:
                in_entry = True
                buf = []
            depth += 1
            buf.append(ch)
        elif ch == "}":
            depth -= 1
            buf.append(ch)
            if depth == 0 and in_entry:
                entries.append("".join(buf))
                in_entry = False
                buf = []
        else:
            if in_entry:
                buf.append(ch)
    return entries


def should_skip(content: str) -> tuple[bool, str]:
    """Return (skip?, reason)."""
    # (1) Already has BreadcrumbJsonLd import or usage
    if "BreadcrumbJsonLd" in content:
        return True, "already has BreadcrumbJsonLd"

    # (2) ArticleJsonLd rendered with breadcrumbItems prop
    #    We only care if the JSX element is actually rendered, not just imported.
    #    Look for <ArticleJsonLd ... breadcrumbItems={...} .../>
    for m in re.finditer(r"<ArticleJsonLd\b([^>]*?)/?>", content, flags=re.S):
        attrs = m.group(1)
        if re.search(r"\bbreadcrumbItems\s*=", attrs):
            return True, "ArticleJsonLd with breadcrumbItems"
        # handle multi-line JSX block that isn't self-closed on one line
    # Also catch multi-line JSX blocks <ArticleJsonLd ... breadcrumbItems={ ... } ... />
    # by scanning for opening tag then the closing '/>' with nested braces.
    idx = 0
    while True:
        pos = content.find("<ArticleJsonLd", idx)
        if pos == -1:
            break
        # find matching end of the tag (either /> or just > for an open tag)
        end = _find_jsx_tag_end(content, pos)
        if end == -1:
            break
        tag_src = content[pos:end]
        if re.search(r"\bbreadcrumbItems\s*=", tag_src):
            return True, "ArticleJsonLd with breadcrumbItems"
        idx = end

    # (3) Uses a shared component that emits breadcrumb JSON-LD
    for comp in SHARED_BREADCRUMB_COMPONENTS:
        if re.search(rf"<{comp}\b", content):
            return True, f"uses shared component {comp}"

    return False, ""


def _find_jsx_tag_end(s: str, start: int) -> int:
    """Given position of '<' for a JSX opening tag, return index just past
    the matching '>' (works with braces inside attribute values)."""
    depth_brace = 0
    i = start
    in_string = None
    escape = False
    # move past '<'
    while i < len(s):
        ch = s[i]
        if in_string is not None:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_string:
                in_string = None
        else:
            if ch in ('"', "'", "`"):
                in_string = ch
            elif ch == "{":
                depth_brace += 1
            elif ch == "}":
                depth_brace -= 1
            elif ch == ">" and depth_brace == 0:
                return i + 1
        i += 1
    return -1


# ---- Transformation helpers ----


IMPORT_LINE = 'import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";\n'
IMPORT_LINE_CRLF = 'import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";\r\n'


def _detect_newline(content: str) -> str:
    return "\r\n" if "\r\n" in content else "\n"


def add_import(content: str) -> str:
    """Add BreadcrumbJsonLd to imports. Prefer merging with an existing
    import from "../../components/seo/JsonLd"."""
    nl = _detect_newline(content)
    # Merge with existing seo/JsonLd import if present
    m = re.search(
        r'import\s*\{([^}]*)\}\s*from\s*"(\.\./)+components/seo/JsonLd";',
        content,
    )
    if m:
        names = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if "BreadcrumbJsonLd" in names:
            return content
        names.append("BreadcrumbJsonLd")
        new_import = f'import {{ {", ".join(names)} }} from "{m.group(0).split(chr(34))[1]}";'
        return content[: m.start()] + new_import + content[m.end() :]

    # Otherwise add a fresh import after the last existing import line.
    lines = content.split(nl)
    last_import = -1
    for i, line in enumerate(lines):
        if line.startswith("import "):
            last_import = i
    if last_import == -1:
        # prepend
        return f'import {{ BreadcrumbJsonLd }} from "../../components/seo/JsonLd";{nl}' + content
    new_line = 'import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";'
    lines.insert(last_import + 1, new_line)
    return nl.join(lines)


def build_breadcrumb_jsx(article_title: str, category_name: str, category_slug: str, indent: str = "      ") -> str:
    """Build the BreadcrumbJsonLd JSX block."""
    # JSON-ish escape for double quotes in titles / category names.
    def esc(s: str) -> str:
        return s.replace("\\", "\\\\").replace('"', '\\"')

    cat_url = f"https://simulator.eic-jp.org/articles/{category_slug}"
    title = esc(article_title)
    cname = esc(category_name)
    return (
        f"{indent}<BreadcrumbJsonLd\n"
        f"{indent}  items={{[\n"
        f'{indent}    {{ name: "ホーム", url: "https://simulator.eic-jp.org/" }},\n'
        f'{indent}    {{ name: "{cname}", url: "{cat_url}" }},\n'
        f'{indent}    {{ name: "{title}" }},\n'
        f"{indent}  ]}}\n"
        f"{indent}/>\n"
    )


def inject_jsx(content: str, jsx_block: str) -> tuple[str, bool]:
    """Insert jsx_block at the top of the JSX returned by the default-export function.

    Returns (new_content, ok)."""
    nl = _detect_newline(content)

    # Find the default export function.
    fn_match = re.search(r"export default function\s+\w+\s*\([^)]*\)\s*\{", content)
    if not fn_match:
        return content, False

    # Find 'return (' within this function, and match its paren.
    fn_start = fn_match.end()
    ret_match = re.search(r"\breturn\s*\(", content[fn_start:])
    if not ret_match:
        return content, False
    ret_paren_open = fn_start + ret_match.end() - 1  # index of '('

    # The JSX inside the return(...) block begins at the first '<' after the '('.
    # Skip whitespace.
    i = ret_paren_open + 1
    while i < len(content) and content[i] in " \t\r\n":
        i += 1
    if i >= len(content) or content[i] != "<":
        return content, False

    tag_start = i
    # Determine if the first element is a Fragment (<> or <Fragment>).
    # Check what's directly at tag_start.
    if content[tag_start : tag_start + 2] == "<>":
        # Already a Fragment — insert after <> on its own line.
        insert_at = tag_start + 2
        block = nl + jsx_block
        # Avoid duplicate blank lines if the original already had a newline.
        if content[insert_at : insert_at + len(nl)] == nl:
            pass  # block already has leading newline; original's newline follows
        return content[:insert_at] + block + content[insert_at:], True

    # Check for <React.Fragment> or <Fragment> (rare)
    frag_m = re.match(r"<(?:React\.)?Fragment\b[^>]*>", content[tag_start:])
    if frag_m:
        insert_at = tag_start + frag_m.end()
        block = nl + jsx_block
        return content[:insert_at] + block + content[insert_at:], True

    # Otherwise, wrap the existing root JSX with a Fragment.
    # Need to find the matching end of the root element to wrap it.
    # Simpler: wrap with "<>\n  <BreadcrumbJsonLd .../>\n  <ROOT>...</ROOT>\n</>"
    # We locate the closing ')' that matches ret_paren_open.
    close_paren = _find_matching_paren(content, ret_paren_open)
    if close_paren == -1:
        return content, False

    # Everything between ret_paren_open+1 and close_paren is the JSX tree.
    inner_start = ret_paren_open + 1
    inner_end = close_paren
    inner = content[inner_start:inner_end]

    # Build wrapped replacement. Preserve leading whitespace/newline inside ().
    leading_ws_match = re.match(r"[ \t\r\n]*", inner)
    leading_ws = leading_ws_match.group(0) if leading_ws_match else ""
    trailing_ws_match = re.search(r"[ \t\r\n]*$", inner)
    trailing_ws = trailing_ws_match.group(0) if trailing_ws_match else ""
    core = inner[len(leading_ws) : len(inner) - len(trailing_ws)]

    # Base indent for the wrapper: use 4 spaces by default
    base_indent = "    "
    # Try to detect indent by scanning the first non-blank line inside inner.
    for line in inner.splitlines():
        if line.strip():
            lead = re.match(r"[ \t]*", line).group(0)
            if lead:
                base_indent = lead
            break

    # The injected BreadcrumbJsonLd should be at base_indent + two spaces.
    inner_indent = base_indent + "  "
    # Rebuild the block at that indent.
    # (Rebuild using the already-built block indent; we can regenerate)
    # We'll just shift the provided jsx_block to inner_indent.
    jsx_block_shifted = re.sub(r"^      ", inner_indent, jsx_block, flags=re.M)

    wrapped = (
        f"{leading_ws}<>{nl}"
        f"{jsx_block_shifted}"
        f"{inner_indent}{core}{nl}"
        f"{base_indent}</>{trailing_ws}"
    )
    return content[:inner_start] + wrapped + content[inner_end:], True


def _find_matching_paren(s: str, open_idx: int) -> int:
    depth = 0
    in_string = None
    escape = False
    in_line_comment = False
    in_block_comment = False
    i = open_idx
    while i < len(s):
        ch = s[i]
        nxt = s[i + 1] if i + 1 < len(s) else ""
        if in_line_comment:
            if ch == "\n":
                in_line_comment = False
        elif in_block_comment:
            if ch == "*" and nxt == "/":
                in_block_comment = False
                i += 1
        elif in_string is not None:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_string:
                in_string = None
        else:
            if ch == "/" and nxt == "/":
                in_line_comment = True
                i += 1
            elif ch == "/" and nxt == "*":
                in_block_comment = True
                i += 1
            elif ch in ('"', "'", "`"):
                in_string = ch
            elif ch == "(":
                depth += 1
            elif ch == ")":
                depth -= 1
                if depth == 0:
                    return i
        i += 1
    return -1


def process_page(path: Path, article: dict, cat_name: str) -> tuple[str, str]:
    """Return (status, reason). status in {"edited","skipped","missing","error"}."""
    if not path.exists():
        return "missing", "page.tsx not found"
    content = path.read_text(encoding="utf-8")
    skip, reason = should_skip(content)
    if skip:
        return "skipped", reason
    new_content = add_import(content)
    jsx_block = build_breadcrumb_jsx(article["title"], cat_name, article["categorySlug"])
    new_content, ok = inject_jsx(new_content, jsx_block)
    if not ok:
        return "error", "could not locate default-export JSX return"
    if new_content == content:
        return "skipped", "no changes (unexpected)"
    path.write_text(new_content, encoding="utf-8", newline="")
    return "edited", "ok"


def main() -> int:
    cat_map, articles = parse_articles_ts()
    print(f"Loaded {len(cat_map)} categories, {len(articles)} articles.")

    stats = {"edited": 0, "skipped": 0, "missing": 0, "error": 0}
    skip_reasons: dict[str, int] = {}
    error_list: list[tuple[str, str]] = []
    missing_list: list[str] = []

    for art in articles:
        slug = art["slug"]
        cat_name = cat_map.get(art["categorySlug"])
        if cat_name is None:
            stats["error"] += 1
            error_list.append((slug, f"unknown categorySlug {art['categorySlug']}"))
            continue
        page_path = APP_DIR / slug / "page.tsx"
        status, reason = process_page(page_path, art, cat_name)
        stats[status] += 1
        if status == "skipped":
            skip_reasons[reason] = skip_reasons.get(reason, 0) + 1
        elif status == "missing":
            missing_list.append(slug)
        elif status == "error":
            error_list.append((slug, reason))
        elif status == "edited":
            print(f"  EDIT  {slug}")

    print()
    print("=== Summary ===")
    print(f"Candidates (articleList): {len(articles)}")
    print(f"Edited : {stats['edited']}")
    print(f"Skipped: {stats['skipped']}")
    for r, n in sorted(skip_reasons.items(), key=lambda x: -x[1]):
        print(f"   - {r}: {n}")
    print(f"Missing: {stats['missing']}")
    for s in missing_list[:20]:
        print(f"   - {s}")
    print(f"Errors : {stats['error']}")
    for slug, reason in error_list[:20]:
        print(f"   - {slug}: {reason}")

    return 0 if stats["error"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
