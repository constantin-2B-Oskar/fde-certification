# Day 3 afternoon: answer key (trainer only)

The kit runs on the full rule register: 110 rules, 101 active (`data/RULES_REGISTER.md`). Numbers below are deterministic; runtimes vary by laptop.

## Exercise 3. What a correct run prints

`npm run day`:

| Measure | Corinne's Friday plan | Long solver |
|---|---|---|
| On time, all orders (planned) | 91.7% | 97.9% |
| On time, Codra (planned) | 97.1% | 97.1% |
| Changeovers | 77 | 50 |
| Changeover hours | 89.2 h | 51.3 h |
| Late orders | 8 | 2 |
| Rule violations | 1 | 1 |

Entitlement on changeover hours, same orders, no events: minus 42%, with six points more of planned on-time. This goes in the entitlement column of the morning scorecard. It is an entitlement, not a target: it assumes no event all week, and Monday alone brings nine. The long solver runs in about 2 seconds with 101 rules.

The one violation in both plans is R05 (one dryer, PA6 starts four hours apart) against the polymer-change windows R52 to R59 (weekdays 06:00 to 14:00 only): two PA6 starts are pushed into the same morning window. The solver cannot satisfy both; it shows the conflict. Good teams bring it to Corinne: which rule gives way? That is a question for the owner, not for the code.

`npm run replay`:

| Event | Type | Moved (line or sequence) | On time | Codra |
|---|---|---|---|---|
| | Daily plan 05:30 | | 97.9% | 97.1% |
| E01 | date_change | 0 | 97.9% | 97.1% |
| E02 | machine_down | 25 | 93.8% | 94.3% |
| E03 | quantity_change | 12 | 92.7% | 94.3% |
| E04 | rush_order | 2 | 92.8% | 94.3% |
| E05 | material_late | 4 | 90.7% | 88.6% |
| E06 | quality_hold | 13 | 89.8% | 88.9% |
| E07 | cancellation | 11 | 90.7% | 88.9% |
| E08 | rush_order | 14 | 87.8% | 89.2% |
| E09 | machine_down | 9 | 85.7% | 86.5% |
| | Repaired plan at Tuesday 05:30, not re-optimized | | 84.7% | 86.2% |
| | Daily plan Tuesday 05:30 | | 87.1% | 89.7% |

Repairs run in 2 to 70 ms. Tuesday's long run recovers 2.4 points overall and 3.5 for Codra; it cannot recover everything because the day used capacity that is gone. The answer participants must give: the short loop keeps the floor stable and answers in milliseconds, the long loop recovers what a day of local repairs lost; both are needed.

Moves per event can be high (25 for the M02 stop). Good teams ask whether the move penalty is right for the floor: a platform parameter (`MOVE_PENALTY` in the fast solver), so it goes in `PLATFORM_ISSUES.md`.

## Exercise 3. Reference permissions, and why

See `reference/permissions.json`. Check in each team's file:
- Only Corinne writes `plan:published` and `rule:validated`.
- Sylvie confirms events: she already keeps the change log, and this is the role the June change gives her. Stéphane proposes events and reads what-ifs; he does not confirm, because he is the requester.
- The event reader writes `event:proposed` only. The solvers write `plan:draft` only.
- The SAP write-back is present and disabled. The kill switch is Nadia's.

Common errors: `"grants": ["*"]` for the agents; Corinne without `event:confirmed`; the write-back enabled.

## Exercise 4. The rules Corinne should have validated by 16:55

None of these is in the register of 110: they are what the register still misses.

| Injection | Rule | Type | Effect on the reference Tuesday plan |
|---|---|---|---|
| 1 | Brisol only on M01 and M05 (PPAP) | customer_line_qualification | 8 violations in the current plan (Brisol on M04, M06, M07); after re-run 3 left, inside the freeze; on-time 87.1% to 83.5%, changeover hours 55.7 to 61.1 |
| 3 | M04 at 85% on Saturday and Sunday | rate_factor | The weekend orders on M04 run about two hours longer; no order turns late this week |
| 4 | Colored to natural 130 min, not 110 | changeover_override | Data fix; changeover hours move slightly, on-time unchanged |
| 5 | Duval before Bricoval | none: human preference | Override with reason, no rule |
| 6 | Brisol red needs 6 h of lab release, not 2 | release_lag, kind lab | Adds four hours to every Brisol red lot; none turns late this week, the slack disappears |
| 8 | No PA6 start on M06 Sunday night | blackout | No effect this week |

Three of six change nothing visible this week. Say it in the debrief: a rule is captured when it is heard, with its owner, not when it bites.
