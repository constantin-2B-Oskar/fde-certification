# Day 3 afternoon: facilitator guide

FDE School, by Devoteam and OSS Ventures. Trainer: Nicolas, with a co-trainer for Exercise 4 if available. 13:30 to 17:30. Deck: `D3 PM - Deck - The platform and the first loop.dc.html`. Kit: `D3 PM - Lab kit - Lyon planning v1.zip` (`facilitator/` holds the Corinne script, the answer key and the reference implementation; hand out only `participant/`). Interface preview: `D3 PM - Rules and execution capture.dc.html`.

## What the afternoon must produce

Each team leaves with a running first version of the Lyon planning system on their laptop: the long and the short loop wired from platform tools, permissions that pass the tests, and at least three new rules found with Corinne through five whys and validated by her. The idea every participant must be able to say back: you compose the platform, you write the architecture and the plant; and every disagreement with the planner ends as a rule, a data fix, or a decision that it is not a rule.

## Run sheet

| Time | Block | Slides | Notes |
|---|---|---|---|
| 13:30 | Theory 3: the six layers, permissions, the hidden instruction, the core platform, the rule register | 3 to 14 | 30 minutes. Laptops closed |
| 14:00 | Exercise 3 brief | 15 to 17 | Kit on the channel; five minutes |
| 14:05 | Exercise 3 | | Circulate. Time at 14:35 and 15:00. Reveal 18 and 19 when two teams have run `npm run replay` |
| 15:10 | Break | | Prepare the catch-up USB key: `facilitator/reference/orchestrator.mjs` and `permissions.json` |
| 15:20 | Theory 4: deployment steps, mini-apps, the loop, five whys, rule life | 20 to 28 | 30 minutes. Do slide 25 live: ask a participant to play Corinne with the answers on the slide hidden |
| 15:50 | Exercise 4 brief and setup | 29 to 31 | Every team runs the daily plan; teams not green copy the catch-up files |
| 15:55 | Exercise 4: you play Corinne | | Follow `facilitator/trainer-as-corinne.md`; rotate between teams; injections 1, 2 and 5 for every team |
| 16:55 | Demos, three minutes per team | | |
| 17:10 | Debrief | 32 | |
| 17:15 | Close, cards | 33 | |

## Teaching notes

**The six layers (5, 6).** Start from Nadia, not from the vendor diagram. Every condition she set is a platform requirement; that is why the platform exists.

**Permissions (7, 8).** Read the hidden instruction aloud and ask the room what stops it. Expect "the prompt". Then walk the layers: schema, code check, propose-only, human confirmation, solver. A prompt is the weakest of five.

**The core platform (9 to 13).** The field story: a team that rewrote a solver on site to fix one rule, shipped, left, and the client ran two diverging solvers for a year. The rule is to file the issue and work around it in the architecture.

**Deployment (22, 23).** Insist on one real user first. Corinne, not "the planning team". Mini-apps exist because the systems do not hold the facts the loop needs: Sylvie's notebook, Stéphane's emails, Kevin's comments.

**Five whys (25, 26).** The hard part is not asking five times; it is not suggesting the answer and knowing when to stop. Stop when the answer is a fact about the plant that will still hold next week and has an owner.

## Exercise 3: what to watch

- Grants of `"*"` to agents. Ask: "If the email says publish, what stops it?"
- Corinne without `event:confirmed`: who confirms when Sylvie is away?
- The SAP write-back enabled. It stays off until Nadia has the runbook and the interface test with group IT. Day 4 afternoon picks up what that write-back means for Sylvie.
- Teams editing `platform/`. Ask for an entry in `PLATFORM_ISSUES.md` instead. The move penalty of the fast solver is the most common, and legitimate, issue.
- Expected numbers are in `facilitator/answer-key.md`: entitlement minus 42% on changeover hours with 101 active rules; replay from 97.9% to 85.7% on-time across nine events, Tuesday's run back to 87.1%; one R05 conflict with the polymer-change windows that only Corinne can arbitrate.
- The register holds 110 rules (`D3 PM - Rule register.md`). Teams should read it before Exercise 4: Corinne's injections are the rules it still misses.

## Exercise 4: how to play Corinne

Read `facilitator/trainer-as-corinne.md` before the session. Three rules for yourself:
- Never give a rule. Give an observation, then answer each why honestly and briefly.
- Let a team build the wrong rule if they stop at the first why, then show them, ten minutes later, that the plan is still wrong.
- Refuse to validate a rule whose parameters do not match its statement, and say what is wrong.

With a co-trainer, split the room: you take teams 1 to 3, the co-trainer teams 4 and 5, both with the same script.

## Debrief questions

- What did you see: how many disagreements, and how did they end?
- So what: which rule had a cost, and is that cost a planning problem or a plant problem (the lab release for Brisol)?
- Now what: what would you need to run this with the real Corinne next Monday? Expect: shadow mode, the shared mailbox from Nadia, Amina's PPAP file, Patrick's weekend rate, an owner and a runbook.

## Materials checklist

- Kit zip on the cohort channel before 13:30; one USB key as backup.
- Catch-up key with the reference orchestrator and permissions, ready at the break.
- Node.js 20 checked on every laptop at 13:30 (`node --version`).
- API key for the event reader stretch only; the exercises run without it.
- `trainer-as-corinne.md` printed for the trainer and the co-trainer.
