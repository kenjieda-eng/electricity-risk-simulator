---
description: Branch off main, implement a task, run build+tests, commit, push, open a PR
argument-hint: "<branch-name>: <task description> (can be multi-line)"
---

# Ship a task end-to-end

You are shipping a scoped task from start to PR. The user has given you the task in `$ARGUMENTS`.

## Parse the input

Expect the format `<branch-name>: <task description>`.
- If the first line contains a colon, take the part before the first colon as the branch name and the rest as the task body.
- Branch name rules: kebab-case, must start with one of `feat/`, `fix/`, `perf/`, `content/`, `chore/`, `refactor/`, `docs/`, `test/`. If the user supplied a bare name without a prefix, infer the most appropriate prefix from the task body.
- If no branch name can be inferred, STOP and ask the user for one. Do not invent.

## Execute the workflow

Run these steps in order. If any step fails, stop, report what failed, and wait for user direction — do not improvise workarounds.

1. **Pre-flight**: `git status --short`. If the working tree has uncommitted changes on a non-main branch, stop and ask before clobbering. Untracked files from prior sessions are fine to leave alone.
2. **Branch**: `git checkout main && git pull --ff-only origin main && git checkout -b <branch-name>`. If the branch already exists locally or on remote, stop and ask.
3. **Implement the task**: do the actual work described in the task body. Use TodoWrite for anything non-trivial. Prefer Edit over Write. Do not invent scope beyond what was requested.
4. **Build**: `npx next build 2>&1 | tail -15`. Must complete with `✓ Compiled successfully`. If it fails, fix the root cause and re-run.
5. **Tests**: `npx vitest run 2>&1 | tail -10`. All existing tests must still pass.
6. **Stage the intended changes explicitly** — never `git add -A` / `git add .`. Stage only the files you touched for this task, so unrelated working-tree drift (untracked scripts, `.ai-team/*.md` changes from other sessions, `package-lock.json` churn) stays out of the commit.
7. **Commit**: use the project's commit style — a single-line subject `type(scope): summary` followed by a blank line and a body that explains *why* and lists the concrete changes in bullets. End with the `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>` trailer. Pass the message via HEREDOC, never `-m "..."` with escapes.
8. **Push**: `git push -u origin <branch-name>`. If push is rejected, surface the error to the user rather than force-pushing.
9. **Open a PR**:
   - Try `gh pr create --base main --head <branch-name> --title "<subject>" --body "<body>"`. The body should include a `## Summary` section (bullets), a `## Test plan` checklist, and the trailing `🤖 Generated with [Claude Code](https://claude.com/claude-code)` line.
   - If `gh` is not on PATH, try `"/c/Program Files/GitHub CLI/gh.exe"`.
   - If `gh` is unauthenticated (exit 4 with the "gh auth login" hint), do NOT try to work around it. Surface the branch's PR-create URL (`https://github.com/kenjieda-eng/electricity-risk-simulator/pull/new/<branch-name>`) and tell the user to either run `gh auth login` once or open the URL themselves.

## Guardrails

- Never push directly to main. Never merge locally. The merge is the user's call — this command stops at "PR open".
- Never use `--no-verify`, `--force`, `--force-with-lease`, `commit --amend`, `rebase -i`, or `git reset --hard` unless the user explicitly asks.
- If the task description is ambiguous about a choice that materially affects the commit (e.g. "rewrite copy" but doesn't say what tone), ask the user before committing rather than guessing.
- Do not create docs, READMEs, or planning files unless the task explicitly asks for them.

## Final output

End with a one-liner in this format so the user can scan a batch of /ship-task calls at a glance:

```
✓ <branch-name> — <subject> — PR: <url or "run gh auth login">
```
