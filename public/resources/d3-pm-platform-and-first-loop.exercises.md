# Day 3 afternoon: the platform and the first loop. Exercises

FDE School, by Devoteam and OSS Ventures. Participant handout. The kit is `D3 PM - Lab kit - Lyon planning v1.zip` (folder `polymex-lyon-planning-v1`). Node.js 20 or later; nothing to install. The Lyon Planner app, on the Day 3 page, shows the same kind of interface, ready to try.

---

## Exercise 3. Put the platform tools into your target architecture (14:00 to 15:10)

**Situation.** This morning you designed the target: a long optimizer once a day, a short optimizer at every event, a rules engine Corinne owns, a model only where there is language. The platform team gives you its tools. You do not rewrite them; you compose them.

| Time | Step | File |
|---|---|---|
| 14:00 | Read `README.md`, `platform/TOOLS.md`, `CLAUDE.md`. For each step of your to-be, write the platform tool it uses. | `architecture/ARCHITECTURE.md` |
| 14:10 | Give every actor the least grants it needs. Who publishes, who confirms an event, what the event reader may write, whether the SAP write-back is on. | `config/permissions.json` |
| 14:25 | Implement `dailyRun`, `onEvent`, `whatIf`, `publish`. A guard first, an audit line last. | `architecture/orchestrator.mjs` |
| 14:55 | `npm test`, `npm run day`, `npm run replay`. Write the entitlement in this morning's scorecard. | |
| Stretch | `readEvent` on `data/inbox/2026-05-11/` with the model gateway; `explain`. | |

**Roles.** The Lead owns `ARCHITECTURE.md` and the permissions. The Builder writes the orchestrator with Claude. The Verifier reads every grant and asks "why does this actor need it?". The Storyteller prepares one sentence on what each loop does that the other cannot.

**Done means.** `npm test` green. `npm run replay` prints the nine events with repair time, orders moved and on-time. You can say what Tuesday's daily run recovered.

**Questions to answer in `ARCHITECTURE.md`.**
1. Why is publishing a human gate, and why Corinne?
2. Why may Sylvie confirm events and Stéphane not?
3. What stops an instruction hidden in an email from changing the plan? Name every layer.
4. What did `npm run day` give as entitlement on changeover hours, and why is it not your target?

---

## Exercise 4. Run the first full version with Corinne (15:50 to 16:55)

**Situation.** Monday 11 May. Corinne uses your app on her plan for the first time. The trainer plays her. She will disagree with the plan, bring news from the floor and correct facts. Your job is to find the rules you are missing, with her, and show her the plan change.

**Setup.** `npm run reset`, `npm start`, open `http://localhost:3000`. Run the daily plan for `2026-05-11 05:30`.

**The loop, every time.**
1. **Disagreement.** Corinne overrides an order (Plan tab, with a reason) or tells you what really happened (Execution tab).
2. **Five whys.** In the Rules tab, ask her why until the answer is a fact about the plant that will still hold next week. Do not suggest the answer.
3. **Outcome.** A rule (type, parameters, statement in her words, source, owner), a data fix, or not a rule.
4. **Validation.** Corinne validates the rule, or tells you what is wrong with it.
5. **Re-run.** The daily plan, or the next repair. Show her what changed.

**Worksheet. One line per disagreement.**

| # | What Corinne saw or said | Why 1 to 5 (short) | Outcome: rule, data fix, not a rule | Rule id or fix | Effect on the plan |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |

**Demo at 16:55, three minutes, live.** How many disagreements, and how each ended. The rule that cost on-time, and whether the cost is real. What you learned about the plant that is in no file. What you would need to run this with the real Corinne next Monday.

**Done means.** Every override has a reason. Every reason ends as a rule, a data fix or a decision that it is not a rule. Corinne has validated at least three rules.

If your Exercise 3 is not green at 15:50, ask the trainer for the catch-up files and say so in your demo. Running the loop with Corinne matters more than finishing the code.
