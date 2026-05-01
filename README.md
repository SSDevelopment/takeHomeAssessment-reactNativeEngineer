# SafeStreets — React Native Take-Home

Welcome, and thanks for your interest in the React Native role at SafeStreets. This exercise is designed to give us a focused look at how you build, structure, and reason about a small React Native app, and to give you a concrete piece of code we can talk through together in your follow-up technical interview.

The starter is a working Expo app that displays a single die and a "Roll" button. Your job is to grow it into a useful **Dice Roller** with roll history.

---

## Ground rules — please read before you start

1. **Time-box: 4 hours, hard cap.** Commit progressively (small, meaningful commits) so we can see how your work evolved. If you run out of time, stop where you are and write a short note in the PR about what you'd do next. We'd much rather see honest pacing than rushed/half-finished features.
2. **No AI assistance.** This means no Copilot, Cursor AI, Cody, Codeium, ChatGPT, Claude, Gemini, or any other AI code generation/autocompletion tool — turn them off in your editor before you begin. Standard tools (language servers, linters, search engines, official docs, Stack Overflow, your own past projects) are all fine.

   We trust you. We also have a follow-up technical interview where we'll walk through your code together and discuss the decisions you made. That conversation is the point of this exercise — AI-generated code is easy to spot in discussion, and it removes the signal we're actually looking for.
3. **You may use any libraries you would normally reach for.** Document anything non-obvious in the PR description.
4. **Ask questions.** If anything in this README is ambiguous, email back. Choosing reasonable defaults and noting your assumptions in the PR is also fine.

---

## Setup

Requires Node 20+ and one of: `npm`, `pnpm`, `yarn`, or `bun`.

```bash
# pick one — they all work
npm install
pnpm install
yarn
bun install
```

Then start Expo:

```bash
npm start          # or pnpm start / yarn start / bun start
```

From there, press `i` for iOS simulator, `a` for Android emulator, or `w` for web. You can also scan the QR code with Expo Go on a physical device.

---

## What to build

Grow the starter into a dice roller with roll history. Tasks are organized into tiers from easy to hard. **Which tiers are required depends on the level you're interviewing for:**

| Level   | Required           | To impress                |
| ------- | ------------------ | ------------------------- |
| Junior  | Tier 1             | Tier 2 + clean code       |
| Mid     | Tiers 1–2          | Tier 3                    |
| Senior  | Tiers 1–3          | Any of Tier 4             |

Going beyond your required tiers is great but not necessary. We'd rather see your required tiers done well than every tier done sloppily. **Quality matters more than coverage** — we evaluate code as code, not as a checklist.

### Tier 1 — Configurable rolls

- Let the user choose **how many dice** to roll (1 to at least 6).
- Let the user choose the **die type** from the standard set: d4, d6, d8, d10, d12, d20.
- Show the result of each die and the sum.

### Tier 2 — Roll history

- Keep a history of past rolls in the app, newest first. For each entry, show at minimum: the dice configuration (e.g. "3d6"), the individual results, the total, and a timestamp.
- Provide a way to **clear the history**.
- History only needs to live in memory for this tier — persistence is Tier 3.

### Tier 3 — Persistent history

- History should survive a full app restart. Pick whatever storage approach you'd choose on the job (AsyncStorage, MMKV, SQLite, a file, etc.) and be ready to explain why.
- Handle the empty / first-launch state gracefully.

### Tier 4 — Stretch (pick one or more, in any order)

These are open-ended on purpose. Pick something you'd enjoy showing off:

- **Animation** — a satisfying roll animation when the dice are rolled.
- **Accessibility** — VoiceOver/TalkBack labels, dynamic type support, sufficient color contrast, and reduced-motion handling.
- **Tests** — unit tests for the roll logic and/or component tests for key behavior. Your call on the framework.
- **Modifiers** — support for expressions like `3d6+2` or `2d20-1`, including in history.
- **Saved presets** — let the user save a configuration ("3d6+2: stat roll") and re-roll it later.
- **Anything else** that you think shows off your strengths — surprise us, but note it in the PR so we don't miss it.

---

## Submitting your work

1. **Fork** this repo to your own GitHub account at the start of the exercise.
2. Work on a branch in your fork. Commit progressively.
3. When you're done (or your 4 hours are up), open a **pull request inside your fork** (`your-fork/your-branch` → `your-fork/master`). Do not open a PR against the SafeStreets repo.
4. Email us the URL of your PR. In the PR description, include:
   - Which tiers you completed.
   - Anything you'd do differently or next if you had more time.
   - Any libraries or tools you added and why.
   - Confirmation that you completed this without AI assistance.

We aim to review within a few business days and follow up with next steps.

---

## What we're looking for

Things we pay attention to, roughly in order:

- **Correctness** — does it work, including edge cases (rolling 0 dice, very large rolls, rapid taps)?
- **Code structure** — how you break the app into components, hooks, and modules as it grows. What goes where, and why.
- **State and data modeling** — how you represent a roll, a history, the current configuration.
- **TypeScript usage** — types that help, not types for their own sake.
- **UX polish at a basic level** — readable, usable, doesn't crash, handles empty states.
- **Trade-offs** — when you chose option A over B, can you tell us why? You don't need to write a doc; the follow-up interview is where this comes up.

We are *not* judging visual design. A clean, plain UI is perfect.

Good luck — have fun with it.
