# Playwright with Linting

This repository is a small Playwright and TypeScript project built to demonstrate how ESLint,
Prettier, Husky, and lint-staged can work together in a QA automation framework.

The Playwright test itself is intentionally simple. The main focus is the developer experience:
keeping test code readable, consistent, and easier to maintain as an automation project grows.

## Why This Repo Exists

QA engineers often work in codebases where test reliability is only one part of the challenge. As
the automation framework expands, teams also need consistent formatting, clear naming conventions,
safe commits, and early feedback when code quality starts to drift.

This project shows how to add those checks to a Playwright framework without making the setup feel
heavy.

## What Is Included

- **Playwright** for browser automation and test execution.
- **TypeScript** for typed test and page object code.
- **ESLint** for static analysis and project rules.
- **Prettier** for consistent code formatting.
- **Husky** for Git hook management.
- **lint-staged** for running fixes only against staged files before a commit.

## Project Structure

```text
.
├── src/
│   ├── data/
│   │   └── expected-values.ts
│   └── pages/
│       └── home-page.ts
├── tests/
│   └── homepage.test.ts
├── eslint.config.mjs
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Tooling Focus

### ESLint

The ESLint configuration uses the flat config format and combines:

- JavaScript recommended rules.
- TypeScript recommended rules.
- Playwright recommended rules.
- Prettier compatibility through `eslint-config-prettier`.
- File naming checks through `eslint-plugin-check-file`.

Some examples of the rules demonstrated in this repo:

- Classes must use `PascalCase`.
- Files in `src` and `tests` must use kebab-case names.
- Unused variables are reported, with `_` allowed for intentionally unused values.
- Playwright tests cannot use focused tests such as `test.only`.
- Playwright tests are encouraged to use web-first assertions.
- Hard waits with `page.waitForTimeout()` are warned against.

### Prettier

Prettier handles formatting so the team does not need to debate style in reviews. This repo uses:

- Single quotes.
- Semicolons.
- Trailing commas.
- A print width of 100 characters.

### Husky and lint-staged

Husky installs a Git `pre-commit` hook. The hook runs `lint-staged`, which applies ESLint and
Prettier only to files that are currently staged for commit.

This gives quick feedback before code enters the repository while keeping the commit workflow fast.

## Getting Started

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run the Playwright tests:

```bash
npm test
```

Run the tests in Playwright UI mode:

```bash
npm run test:ui
```

Open the latest Playwright HTML report:

```bash
npm run report
```

## Quality Commands

Run ESLint:

```bash
npm run lint
```

Format files with Prettier:

```bash
npm run format
```

Check formatting without changing files:

```bash
npm run format:check
```

Run linting and formatting checks together:

```bash
npm run check
```

## Pre-commit Workflow

After `npm install`, Husky is prepared automatically through the `prepare` script in
`package.json`.

When you commit changes, the pre-commit hook runs:

```bash
npx lint-staged
```

The current lint-staged setup:

- Runs `eslint --fix` and `prettier --write` on staged source and test files.
- Runs `prettier --write` on staged JSON, Markdown, and YAML files.

This helps catch issues before they reach the remote repository.

## Example Test

The sample test visits the configured base URL and compares the page title against expected test
data. It also uses `test.step()` to show how test actions can be grouped in a readable way inside
the Playwright report.

The test is not meant to be a complete automation framework. It is a lightweight example used to
show how linting, formatting, and commit hooks can support cleaner QA automation code.

## Why This Matters for QA Engineers

In an automation framework, code quality directly affects how quickly a team can debug failures,
review changes, and extend coverage. ESLint, Prettier, and Husky help by:

- Catching common mistakes early.
- Making tests easier to read.
- Reducing style-only review comments.
- Encouraging consistent naming and structure.
- Preventing avoidable issues from being committed.

The result is a cleaner foundation for Playwright automation work.
