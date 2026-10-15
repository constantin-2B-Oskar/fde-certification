# The Claude Code survival kit

*How to prompt Claude Code well, and how to check that the code it writes is good. For after the week, and for anyone who will build with Claude Code on a real deployment. The one-pager "Working with Claude" (under "Start here") covers the week's sessions. This guide goes further.*

## 1. The mindset: you are the lead, Claude is a fast junior

Claude Code reads, writes and runs code on your machine much faster than you can. It does not know your client, your plant or your definitions. It does not know whether the result is right, so it will sometimes say "done" when it is not. Your job is to give it the context, set the goal, and check the result. You can hand over the typing. You stay responsible for the result.

## 2. Before the first prompt

- **Write a `CLAUDE.md`** at the root of the project, or run `/init` and then correct what it writes. Claude reads this file at the start of every session. Put in it:
  - what the project is for, in two lines;
  - how to install, run and test it (the exact commands);
  - the definitions that matter (what "OEE", "late" or "a changeover" mean here);
  - the rules (what not to touch, which data is confidential, the coding style);
  - what "done" means (tests pass, the check runs, the page loads).
- **Start from a clean save point.** Use `git status` to check, and commit before you start. That way you can always go back.
- **One task per session.** Use `/clear` between unrelated tasks. A long, mixed conversation makes Claude worse, not better.

## 3. Prompting: the patterns that work

**A prompt is a small spec.** It says what you want, what it must respect, and how you will check it.

```text
Goal: add a "late orders" count to the daily report.
Read first: CLAUDE.md, src/report.ts, data/DATA_DICTIONARY.md.
Definition: an order is late when shipped_at > promised_at (both UTC).
Constraints: do not change the existing columns; no new dependency.
Check: add a test with 3 orders (1 late, 1 on time, 1 not shipped) that expects 1.
Plan first and stop. Wait for my go.
```

| Pattern | When | Say |
|---|---|---|
| **Explore, plan, then build** | Any change bigger than a few lines | "Read the relevant files and explain how X works today. Then propose a plan and stop." Plan mode (Shift+Tab) does the same: Claude can read but not edit until you approve. |
| **Test first** | Logic that must be right: calculations, rules, filters | "Write the tests first from this definition. Run them and show me they fail. Then write the code until they pass. Do not change the tests." |
| **Small steps** | Always | "Do step 1 only, run the tests, show me the result, and stop." |
| **Show, don't tell** | Any number or claim | "Print the command you ran and its output." Do not accept "I checked, it works." |
| **Ask for the options** | Design choices | "Give me two ways to do this, the trade-offs of each, and your recommendation. Do not build yet." |
| **Explain it back** | Code you will have to defend | "Explain this file to me as if I were the plant manager. What can go wrong?" |
| **Interrupt early** | It is going the wrong way | Press Esc, say what is wrong, and steer. Use `/rewind` (or Esc twice) to go back to an earlier point. |

**What to avoid:** vague goals ("make it better"), five tasks in one prompt, pasting a whole error log without saying what you expected, and letting a wrong answer run for twenty minutes before you react.

## 4. Checking the quality of the code

Never judge code by how fluent the explanation sounds. Use checks a machine can run, then read the code like a sceptic. Here are the checks, from cheapest to most thorough:

1. **It runs.** Start the app or script yourself and use it like a user would. Try the normal case and one strange case: an empty file, a missing value, a date across midnight.
2. **The tests pass, and they test something.** Run them yourself (for example `npm test`). Then ask: "Which test would fail if I deleted line N?" A test that cannot fail checks nothing. Watch for tests that Claude changed so that they pass.
3. **The automatic checks are clean.** Run the linter, the formatter and the type checker the project already uses (for example `npm run lint`, `npx tsc --noEmit`). Ask Claude to fix the errors it finds, not to switch the checks off.
4. **Read the diff before you accept it.** Use `git diff`. Look for:
   - files changed that had nothing to do with the task;
   - deleted code, tests or checks;
   - numbers written directly in the code (hard-coded) when they should be calculated;
   - `try/catch` blocks that hide errors instead of reporting them;
   - new dependencies (packages) nobody asked for;
   - secrets: passwords, API keys, client data.
5. **Get a second review with a fresh context.** Run `/code-review` (bugs) or `/security-review` (security). You can also open a new session and say: "Review this diff as a senior engineer who must sign off on it. List what is wrong, most serious first." A fresh session has no attachment to the code it is reviewing.
6. **Check one number by hand.** Take one result, recompute it from the raw data in a spreadsheet, and compare. If they differ, find out why before anyone sees the result.
7. **Simplify.** Ask: "Can this be done with less code? What can be deleted?" Or run `/simplify`. Code that is simple is easier to check and cheaper to maintain.

**A quick test for any change:** could you explain to the client, in two sentences, what changed and how you know it works? If not, it is not done.

## 5. Working safely

- **Commit at each step that works.** Small commits are save points. If the next step goes wrong, you go back in one command.
- **Read before you approve.** Read every command Claude asks to run, especially ones that delete files, push code or touch a production system. Only allow the safe, routine ones permanently (`/permissions`).
- **Keep client data where the client allows it.** Use anonymised or sample data for building. Never paste credentials into a prompt.
- **Keep your role in production.** Claude can prepare a deployment. A person decides to ship it.

## 6. When it goes wrong

| Symptom | What to do |
|---|---|
| It keeps making the same mistake | Stop. `/clear`, then restart with a better prompt and the missing fact written in `CLAUDE.md`. |
| It "fixes" a test by changing the test | Say: "The test is right. Change the code, not the test." Add the rule to `CLAUDE.md`. |
| It invents a function, a file or a column | Ask it to show you where it is. If it cannot, it does not exist. |
| The conversation is long and it gets confused | `/compact` to summarise it, or `/clear` and start again from a short summary you write. |
| You no longer understand the code | Stop building. Ask for an explanation, file by file, until you do. |

## 7. Your checklist before you say "done"

- [ ] I ran it myself, on a normal case and a strange case.
- [ ] The tests pass, and I know what at least one of them really checks.
- [ ] Lint and type checks are clean.
- [ ] I read the whole diff; nothing unexpected changed.
- [ ] A second review (fresh session or `/code-review`) found nothing serious.
- [ ] I checked one number by hand against the raw data.
- [ ] It is committed, with a message that says what changed and why.

## To go further

- Claude Code documentation: <https://code.claude.com/docs>
- Claude Code best practices, by Anthropic: <https://www.anthropic.com/engineering/claude-code-best-practices>
- Prompt engineering overview, by Anthropic: <https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview>
