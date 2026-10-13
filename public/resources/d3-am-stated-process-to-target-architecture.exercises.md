# Day 3 morning: from the stated process to the target architecture. Exercises

FDE School, by Devoteam and OSS Ventures. Participant handout. The kit is `D3 AM - Lab kit - Lyon planning process.zip` (folder `polymex-lyon-planning`). Open it in Claude Code; `CLAUDE.md` gives Claude the ontology and the working rules.

---

## Exercise 1. Stated process, true process, target architecture (10:00 to 11:10)

**Situation.** Wednesday 6 May 2026. Lyon is the plant, planning is the problem. Hervé wants an APS. The procedure PRO-PLN-004 says planning is weekly and frozen from Monday 06:00. Corinne says she rewrites the plan every day. Before anyone buys or builds, you map how planning really works.

**Steps.**

| Time | Step | Output |
|---|---|---|
| 10:00 | Read `stated/`. Draw the stated process in five boxes. | Five boxes, top of `templates/as-is-vsm.md` |
| 10:10 | Read `field/` and `data/` with Claude. Infer every real step, with a citation. Compute the loops with code over `data/change_log_w15-w18.csv` and `data/plan_stability_w15-w18.csv`. | The true process table, the loops table, the algorithms people run |
| 10:35 | Read `knowledge/`, split across the team: every rule people apply today, with its source and owner. Group them by kind. | The rule inventory (about 100) |
| 10:45 | Design the target: `templates/target-process.md`, `templates/target-architecture.md` (with `platform/PLATFORM_CATALOGUE.md` and `data/systems-inventory.md`), `templates/ontology.md`. | Target process, target architecture, ontology |
| 11:00 | Readout: two teams, four minutes each. | |

**Roles.** The Lead keeps time and decides what goes on the map. The Builder drives Claude. The Verifier recomputes two numbers from the CSV without Claude. The Storyteller writes the one sentence and gives the readout.

**Done means.**
- Every step of the true process cites a file.
- The loops are counted by code you can show: events per day, share within 48 hours, share on one line, share keyed in SAP the same day, median answer time to a customer.
- Every step of the target has one type: existing system, expert system, solver, LLM, machine learning, or a person. Every human decision says who and why a human.
- The sentence that describes the shape of the solution fits on one line.
- The target architecture says, for each fact, which system it comes from or which app captures it from a person, and which modules are out of the box, built for Lyon, or a change to an existing system.

**Prompts that work.**
- "For each file in `field/`, list the planning steps this person describes, with trigger, who decides, inputs, outputs and latency. Cite the line."
- "Where does `field/` contradict `stated/PRO-PLN-004-weekly-planning.md`? Quote both."
- "Write a script that counts the events in `data/change_log_w15-w18.csv` by type, by channel, by `horizon_hours` under 48, by `lines_affected`. Print the code and the result."

**The decision table.**

| If the step is... | Use |
|---|---|
| Reading or writing language | LLM, with structured output |
| Applying known, stable rules | Expert system, rules engine |
| Choosing among many combinations under constraints | Solver |
| Predicting from history | Statistics or machine learning |
| Holding the record of a fact | The existing system |
| A trade-off with accountability | A named person |

---

## Exercise 2. What good looks like (11:30 to 11:55)

**Situation.** Hervé will ask on Friday what success looks like. Julien will only sign a gain he can measure without you. Codra decides in September.

**Steps.**

| Time | Step |
|---|---|
| 11:30 | One line per person in `templates/what-good-looks-like.md`: "it worked if...", in their words, from the interviews. |
| 11:35 | The scorecard: at most five measures from `data/kpi_weekly_2026-w06-w18.csv`. For each: level (outcome, driver, adoption), baseline (average of weeks 15 to 18), best demonstrated week, target with a date, owner, how measured and by whom, guardrail. |
| 11:47 | The gain in euros, with the calculation and the controller's figures (contribution €447 a tonne; materials €89.2M; overtime premium €0.9M). |
| 11:52 | The one measure you put on the first slide for Hervé. |

**Done means.** At least one outcome measure. No measure that describes the system instead of the plant. Each target has a number, a date and an owner. Each gain names its calculation.

**Leave one column empty.** Entitlement, what a perfect plan would give on the same orders, is computed this afternoon with the long optimizer.
