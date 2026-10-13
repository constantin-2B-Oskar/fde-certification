# Day 3 morning: facilitator guide

FDE School, by Devoteam and OSS Ventures. Trainer: Nicolas. 9:00 to 12:00. Deck: `D3 AM - Deck - From stated process to target architecture.dc.html`. Kit: `D3 AM - Lab kit - Lyon planning process.zip` (the `facilitator/` folder holds the answer key; hand out only `participant/`).

## What the morning must produce

Each team leaves with three files: the as-is value stream map of Lyon planning, the to-be architecture with one component per step, and a five-line scorecard. The idea every participant must be able to say back: planning at Lyon is not one weekly plan but two loops, so the target is a long optimizer once a day and a short optimizer at every change, under a rules engine Corinne owns, with a language model only where there is language.

## Run sheet

| Time | Block | Slides | Notes |
|---|---|---|---|
| 9:00 | Stand-up | | Ten minutes, one sentence per team |
| 9:10 | Theory 1, part 1: ontology, models, tactics, swarms, decision models | 3 to 11 | 25 minutes. Laptops closed |
| 9:35 | Theory 1, part 2: agentic systems are mostly code; the decision table; people and existing systems; the two maps | 12 to 21 | 25 minutes |
| 10:00 | Exercise 1 brief | 22 to 25 | Hand out the kit. Five minutes |
| 10:05 | Exercise 1 | | Circulate. Announce time at 10:35 and 10:55 |
| 11:00 | Readouts, two teams | 26 to 30 after | Reveal 26 to 30 only after the readouts |
| 11:10 | Theory 2: what good looks like | 31 to 38 | 20 minutes |
| 11:30 | Exercise 2 | 39 to 40 | 25 minutes, readout from one team at 11:50 |
| 11:52 | Reference scorecard, close | 41 to 43 | |

## Teaching notes

**Ontology (slides 5 and 6).** Use the Polymex objects only. Ask the room: "Who owns the changeover time, SAP or Corinne?" The answer is Corinne; SAP holds a number nobody believes. That is the point of the ontology: one owner per fact.

**Models and tactics (7 to 9).** Do not turn this into a vendor tour. For each kind, the question is: what job at Lyon would I give it? The swarm slide needs one warning: errors compound across hand-offs. Most plant problems are one workflow with a few model calls.

**Decision models (10, 11).** Two kinds of decision: choosing among many combinations (a solver) and choosing one option from a known set (a decision model such as Jev, TypeSafe's System One model, public since September 2026). Jev returns a choice, a score or a yes/no with a calibrated probability, and cannot answer outside the options you defined; that makes it a good event classifier with a threshold to a person. Its speed and cost figures are the vendor's: ask participants how they would check them on Polymex messages before relying on them. The language model stays the interface for free text and explanations.

**Agentic anatomy (12 to 14).** Count the boxes on slide 13 with the room: two of six are a model. Field story to tell: an agent demo that sequenced a week of orders in a prompt, looked brilliant, and broke a forbidden transition the first time a client tested it.

**Decision table (15).** This is the slide participants reuse all afternoon. Leave it on screen during the brief.

**People and systems (16, 21).** Insist: you place a human where a decision needs an owner, not where the code is weak.

## Exercise 1: what to watch

- Teams that stop at the procedure and add "plus some changes". Push: "How many changes a day? Show me the code."
- Teams that map only Corinne. The night swaps (Kevin), the morning meeting (Didier), the lab holds (Amina) and the re-keying (Sylvie) are separate steps with their own algorithm and latency.
- Teams that make everything an agent. Ask: "Which box chooses the sequence? Would you sign it if it were a prompt?"
- Teams that forget SAP as the record. The target writes the published plan back to SAP; that is what ends re-keying from June. Do not discuss Sylvie's role in the room beyond this; it is Day 4's conversation, and in the kit she is the person who built the change log.
- Marc asked not to be named in any chart. If a team names him, correct it kindly and say why.

**The numbers teams should find** (from the answer key): 188 events in four weeks, 8.6 per weekday, 80% within 48 hours, 77% on one line, 22% keyed in SAP the same day, median 17.3 hours to answer a customer, 18 night swaps. Plan stability: about half of Friday's plan has moved by Wednesday.

**Reference outputs.** Six posters, in the order a strong team builds them: `D3 AM - Exercise 1 output - Stated process`, `- True process`, `- Target process`, `- Target architecture` (data sources, knowledge to capture and where it lives, platform modules out of the box against ad hoc work, changes to existing systems, how each decision is taken, the model architecture), `- Ontology` (the graph, the constraints by rule type, the integrity constraints, the agents as actors), and `D3 AM - Exercise 2 output - What good looks like`. Show the stated process after the first readout, the true process after slide 26, the target process and architecture with slides 28 to 30, the ontology when a team asks how the agents share one vocabulary, and the scorecard after Exercise 2.

**The landing.** Slides 27 to 30. If a team reached "long optimizer daily, short optimizer on events", let them present it and use slide 28 as confirmation, not revelation.

## Exercise 2: what to watch

- Teams that put parser accuracy or "number of plans generated" as an outcome. Ask: "Would Codra notice?"
- Teams with twelve measures. Ask them to cross out seven.
- Euros: contribution a tonne, never revenue; Codra's €2.2M dwarfs everything else. Start-up scrap (about €0.3M for a 20% cut in changeovers) and Friday overtime (about €0.45M) are real but secondary.
- Entitlement stays empty until the afternoon. Say so: they will fill it with the long optimizer.

## Debrief questions

- What did you see that the procedure does not describe?
- So what: which component would you have bought if you had trusted the procedure?
- Now what: which three rules will you need this afternoon, and who signs them?

## Materials checklist

- Kit zip on the cohort channel before 9:00; one USB key as backup.
- Slide 15 printed on A3 for each table.
- Answer key printed for the trainer only.
