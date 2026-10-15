# Working with Claude: a one-pager

*How to prompt and use Claude for maximum efficiency, in every session of the week. Keep it open next to your terminal.*

## The five rules

1. **Brief it before you ask.** Every kit ships with a `CLAUDE.md`: the briefing you would give a new colleague (context, data, rules, definitions, what "done" means). Start every session with: "Read `CLAUDE.md` and `README.md` first, then tell me in five lines what you understood."
2. **A prompt is a small spec: goal, constraints, check.** "Build me a dashboard" is a wish. Say what you want, what it must respect, and how you will check it.
3. **Plan, then build.** Ask for the plan first and say "stop". Read it as a team, correct it, then say "go". Five minutes of plan saves thirty of rework.
4. **Make it cite and compute.** Every claim cites a file and a line. Every number comes from code you can read, never from Claude's head. "Print the code and the result."
5. **Verify before you believe.** One person checks one number by hand against the raw data. If Claude and the Verifier disagree, find out why before you show anything.

## The prompt template

```text
Goal: <what you want, in one sentence>
Read first: <the files that matter>
Constraints: <definitions to use, what not to touch, no invented numbers>
Output: <a file, a table, a page; where to write it>
Check: <the number or test that proves it is right>
Plan first and stop. Do not change anything until I say go.
```

## Session by session

| Session | What Claude is for | A prompt that works |
|---|---|---|
| Day 1 morning: Plant Pulse | Profile the data, then build and deploy the dashboard | "Read `CLAUDE.md`, `README.md` and `data/DATA_DICTIONARY.md`. Before writing any app code, profile `data/extrusion_shift_log.csv`: row counts, ranges, duplicates, gaps, unit errors. Write it to `DATA_NOTES.md` and stop." |
| Day 1 afternoon: consulting skills | Challenge your structure and your message, not write them for you | "Here is my memo to Hervé. Is the answer in the first sentence? List every claim that has no number or source behind it." |
| Day 2: the knowledge bundle | Read a lot, fast, with sources | "Start with `index.md`. For each plant, give the 2025 contribution margin, capacity use and the board's constraints, each with the file it comes from. Mark anything you inferred." |
| Day 2 afternoon: the charter | Find the holes in your charter and your counting rules | "Act as the plant controller. Which gain in this charter would you refuse to sign, and why? Quote the rule you apply." |
| Day 3 morning: the true process | An analyst who cites, and code that counts | "Where does `field/` contradict `stated/PRO-PLN-004-weekly-planning.md`? Quote both." Then: "Write a script that counts the events in `data/change_log_w15-w18.csv` by type and channel. Print the code and the result." |
| Day 3 afternoon: the platform | Compose the platform tools; never rewrite them | "Read `platform/TOOLS.md` and `CLAUDE.md`. Propose `dailyRun` in `architecture/orchestrator.mjs` from the platform tools only: a guard first, an audit line last. Do not edit `platform/`." |
| Day 4: the obstacles | A sparring partner for your answer, and a fast reader of the plant files | On a card: "Act as Hervé. Here is our first sentence and our 48-hour plan. What would make you refuse, and what is missing?" For the scale plan: "From the Day 2 bundle, give capacity, data systems, main problem and plant manager for Haguenau, Évreux and Tarragona, each with its source file." |
| Day 5: the full motion | A fast analyst on your case pack, and a skeptical executive committee | "Use only this case pack. List every promise made in pre-sales and check each against the data annex: units, definitions, missing people, timing. Quote the line for each." Then: "Act as the CFO in this pack. What in our kickoff would you refuse, and why?" |

## Who does what in the team

One laptop per team. The **Builder** drives Claude. The **Verifier** never trusts it: they recompute one number by hand and read the code behind every figure. The **Lead** decides what goes into the next prompt. The **Storyteller** turns the result into one sentence.

## Five ways to waste a session

- **Prompting before the briefing.** Claude guesses the plant, the units and the definitions.
- **Asking for everything at once.** One step, one check, then the next step.
- **Letting it do the arithmetic in text.** Ask for code, always.
- **Accepting a fluent answer without a source.** Fluent is not correct.
- **Pasting client data into a consumer tool.** Real client data goes only into the tools your client has approved.
