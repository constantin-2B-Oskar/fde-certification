# Day 3 morning: answer key (trainer only)

## Exercise 1. The numbers teams should compute from the change log

| Measure | Value |
|---|---|
| Events, W15 to W18 | 188 (38, 44, 49, 57: rising with the retail share) |
| Events per calendar day | 6.7; per weekday about 8.6 |
| Events whose first affected order starts within 48 h | 80% |
| Events touching one line only | 77% |
| Changes keyed in SAP the same day | 22% |
| Median hours to answer a customer | 17.3 h, over 95 customer requests that needed an answer |
| Customer answers within 1 h | 7% |
| Night swaps, decided by the shift leader alone | 18 |

By type:

| Type | Events | Share |
|---|---|---|
| date_change | 40 | 21% |
| quantity_change | 31 | 16% |
| rush_order | 24 | 13% |
| machine_breakdown | 19 | 10% |
| night_swap | 18 | 10% |
| material_late | 17 | 9% |
| quality_hold | 16 | 9% |
| planner_resequence | 9 | 5% |
| cancellation | 7 | 4% |
| maintenance_window | 7 | 4% |

By channel (none of these reaches SAP directly):

| Channel | Events |
|---|---|
| email | 85 |
| phone | 56 |
| LineLog | 24 |
| morning meeting | 10 |
| workbook | 9 |
| MaintPro | 4 |

Plan stability: by Wednesday, about half of Friday's plan has moved; by Sunday of W18 less than a third still holds. Teams that find this in `plan_stability_w15-w18.csv` have the strongest evidence against the "frozen week".

## Exercise 1. The as-is map, eight steps

| # | Step | Algorithm | In | Out | Latency |
|---|---|---|---|---|---|
| 1 | Demand capture | Stéphane and customer service; EDI for Codra | Email, phone, EDI | SAP orders, emails to Corinne | Minutes to SAP; changes by email |
| 2 | Weekly plan, Friday 13:00 to 19:30 | Corinne's heuristics: light to dark, family grouping, glass on M01 M02 M05, PA6 on M03 M06 with 4 h dryer gap, max 4 changeovers a shift, black into Saturday for the screw pull. SAP planning board unused | SAP open orders, workbook, head | Workbook v1, PDF | 4 to 5 h of work |
| 3 | Re-keying | Sylvie, transcription | Workbook versions | SAP process orders | Same day for the morning version, D+1 for the rest |
| 4 | Daily full replan, 7:30 | Corinne, same heuristics on a 2 to 3 day horizon, all lines | LineLog, Kevin's notes, workbook | Workbook v2 | 50 min; plus the morning meeting |
| 5 | Morning meeting, 8:30 | Didier, Corinne, quality, maintenance: priorities (Codra, then Brisol), holds, windows | Lab (Access), MaintPro (by mouth), Hervé | Decisions, not written down | 20 min |
| 6 | Intraday repairs, 2 to 4 a day | Corinne: local repair on 1 or 2 lines, next 24 to 48 h, never touch the running order and the next (about 4 h freeze) | Stéphane's emails, lab and maintenance calls | Workbook v3 to v6 | 12 to 26 min each |
| 7 | Night execution and swaps | Kevin: next runnable order on the same line, same family or closest color | Plan v6 at 22:00, the line state | LineLog free text | Read at 7:00 |
| 8 | Promise dates | Stéphane from SAP ATP, padded | SAP (a day behind) | Quote 9 to 14 days | Median 17.3 h to answer a change |

**The point teams must reach.** Planning is not one-and-done. It is two loops: a full replan once a day over the whole horizon and all lines, and event-driven repairs several times a day, local in time (80% within 48 h) and in space (77% on one line). The stated process describes a weekly loop that no longer exists. The algorithm of every step is a person; the rules are in one head, one workbook and four notebooks; SAP is a record of yesterday.

## Exercise 1. The to-be architecture

| # | Step | Component | Type | Human |
|---|---|---|---|---|
| 1 | Event intake from the shared planning mailbox, LineLog comments, lab and MaintPro | Event type and order chosen among known options with a probability; quantity, date and line extracted | Decision model (Jev) for the choice, small LLM with structured output for the fields; below the threshold, a person | Sylvie confirms customer events: she already keeps the log |
| 2 | Rules | Rules engine with every rule, its id, source, owner and status | Expert system, deterministic | Corinne validates every new rule |
| 3 | Long optimizer, once a day at 05:30 after the LineLog export | Sequence all lines over 7 days: lateness by priority, then changeover minutes, under the hard rules | Solver (platform tool) | Corinne reviews and publishes at 7:30 instead of rewriting |
| 4 | Short optimizer, on each confirmed event | Repair on the affected lines, next 48 h, freeze 4 h, fewest moves, answer in under a minute | Solver (platform tool) | Corinne approves; later, small repairs can be auto-approved by class |
| 5 | Promise and what-if | The short optimizer run as a simulation: "can we do 18 t by Thursday?" | Solver, plus an LLM to draft the customer answer | Stéphane commits the date |
| 6 | Explanation and night guidance | What changed and why, risky sequences, the swap to make if a line stops | LLM over the solver's diff and rule ids | Kevin decides at night, within the proposals |
| 7 | Write-back | Published plan to SAP process orders | Existing system, interface with group IT | Nadia owns it; ends re-keying, from June |
| 8 | Rule discovery | Every override needs a reason; the reason becomes a draft rule | LLM drafts, human validates (afternoon) | Corinne |

Never to the LLM: sequencing, feasibility, capacity arithmetic, the decision between two customers, the publication of a plan.

**The shape in one sentence.** A long optimizer once a day and a short optimizer several times a day, under a rules engine Corinne owns, fed by an LLM that turns messy events into structured ones, with SAP as the record and people deciding the trade-offs.

## Exercise 2. Scorecard, reference answer

Baselines are W15 to W18 averages from `kpi_weekly_2026-w06-w18.csv`.

| Measure | Level | Baseline | Best week | Target | Owner | Guardrail |
|---|---|---|---|---|---|---|
| OTIF for Codra | Outcome | 82.5% | 93.8% (W08) | 95% every week from W23 (1 June), twelve weeks running before September | Hervé; measured by Julien | Overall OTIF not below 84% |
| Quoted lead time to Codra | Outcome | 12.5 days | 9.0 (W08) | 7 days from W23 | Stéphane | OTIF on those orders at 95% |
| Median time to answer a customer change | Driver | 17.5 h (change log: 17.3 h) | 10 h (W08) | 1 h in working hours | Stéphane, from the event log | Answers that later break: below 5% |
| Orders moved inside 24 h of start | Driver | 20% | 7% (W08) | 10%, and zero inside the 4 h freeze | Corinne | Changeovers per shift at most 4 |
| Plans published from the system, with a reason for every override | Adoption | 0% | | 90% by W26 | Corinne | |

Guardrails worth listing separately: scrap at most 4.2% (baseline 4.60%), changeover hours not above 213 h a week at the same order mix, Corinne's overtime at most 4 h (baseline 12.5 h), re-keying from 26.5 h to 0 by June with Sylvie's role redefined first, never framed as a headcount saving.

**The gain in euros, conservative.**
- Codra's 5,000 t at €447 contribution a tonne: €2.2M a year kept (5,000 × 447 = €2,235,000). This is the gain that matters; everything else is secondary.
- Start-up scrap: 4.2% of €89.2M materials is €3.7M; 45% of it is start-up after changeovers, €1.7M. A 20% cut in changeovers at the same mix is worth about €0.3M a year.
- Overtime premium €0.9M, mostly Fridays: half of it is €0.45M, if the Friday rewrite disappears.
- Entitlement for changeover hours is computed this afternoon: run the long solver on the same orders and compare with Corinne's plan.

**Show first:** Codra OTIF, weekly, with Julien's definition. Teams that lead with changeover hours or with parser accuracy have picked a driver, not the outcome.

## Where each reference output comes from

| Output (poster in the Day 3 folder) | Evidence in the kit |
|---|---|
| Stated process | stated/ |
| True process | field/01 to 09, data/change_log, data/plan_stability, data/systems-inventory |
| Target process | the true process, platform/PLATFORM_CATALOGUE.md (long and fast solver), field/08 (Nadia's conditions) |
| Target architecture | data/systems-inventory.md (including what could change), knowledge/ (what is in people's heads, by owner), platform/PLATFORM_CATALOGUE.md (out of the box against built) |
| Ontology | CLAUDE.md (objects), knowledge/ (110 rules, 13 kinds: teams should find about 100 and group them by kind), field/08 and the catalogue (actors, grants, gates) |
| What good looks like | data/kpi_weekly, field/03, context/ (Hervé, Julien, P&L, lost and at-risk orders) |

The knowledge folder holds the 110 rules of the afternoon register, written as people said them, without ids: 101 current, 4 asked but not agreed, 5 no longer true. A team that finds 90 or more and groups them in about a dozen kinds has done the job.
