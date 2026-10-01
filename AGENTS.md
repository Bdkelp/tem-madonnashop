# AGENTS.md

Read this before changing the repository.

## Default behavior
- Understand the existing implementation before editing it.
- Make the smallest correct change that solves the task.
- Preserve established architecture, naming, interfaces, and business rules unless the task requires changing them.
- Do not refactor unrelated code while fixing a localized issue.
- Reuse existing patterns and dependencies before adding new ones.
- Use targeted reads, searches, and tests to conserve time and compute.

## Safety
- Never commit secrets, credentials, tokens, `.env` files, or private keys.
- Do not weaken authentication or authorization to make something work.
- Do not run destructive database operations, delete production data, change production infrastructure, or perform irreversible actions without explicit authorization.
- Do not force-push shared branches or rewrite shared Git history.
- Check for unique commits before deleting or consolidating branches.

## Git and testing
- Keep diffs focused.
- Use the repository's existing branch/PR workflow when applicable.
- Run the cheapest relevant test, build, typecheck, or lint check that gives meaningful confidence.
- Do not repeatedly run broad test suites when a targeted check is sufficient.

## When to stop
Stop and ask before an action that is destructive, irreversible, security-sensitive, production-state-changing, or clearly outside the requested scope. Otherwise use reasonable engineering judgment and proceed.

## Completion
Report concisely: root cause or objective, files changed, what was done, tests/checks run, and anything still required.
