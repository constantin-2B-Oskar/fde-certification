# Day 1 afternoon: exercises

FDE School, by Devoteam and OSS Ventures. Participant handout. Polymex Industries is a fictional plant; every number below is consistent with this morning's data.

---

## Exercise 1. From Hervé's complaint to a problem worth testing (35 minutes)

### The email

> **From:** Hervé, site director, Polymex Industries
> **To:** FDE team
> **Monday, 7:42**
> **Subject:** Before you start
>
> Welcome to Polymex. Let me save you some time.
>
> Our on-time delivery has gone from 91% to 84% since September, and corporate wants 95%. The problem is planning. Corinne is overwhelmed: the schedule is rewritten every day, and the Friday plan is dead by Monday morning. Customers call me directly now, which never used to happen.
>
> I have told our COO we need a serious APS and probably a stronger planner. I need your recommendation by Friday, and it has to hold up in front of corporate.
>
> Hervé

### Context sheet

| Item | Value |
|---|---|
| OTIF, measured on promise date | Sep 91%, Oct 90%, Nov 89%, Dec 88%, Jan 87%, Feb 86%, Mar 85%, Apr 84% |
| Corporate target | 95% |
| Retail clients' share of volume | Dec 12%, Jan 19%, Mar 26%, Apr 31% |
| Changeovers per week, extrusion | About 41 in the fourth quarter; 49 in early January; 71 in late March; 78 in April |
| Order book | 91% of demonstrated capacity |
| Planning | One planner, Corinne, 11 years at Polymex. The senior scheduler, Jean-Pierre, retired in March. Plan issued every Friday from the ERP. |
| ERP | Holds routings, standard rates and one changeover time for every product |

### Your task

1. Climb the five rungs: complaint, observable symptom, quantified gap, candidate causes, problem statement with a kill test.
2. Answer the question behind the question: who hurts, why now, what "solved" means to Hervé in his own words.
3. Build a three-branch MECE hypothesis tree with a prior (high, medium, low) on each branch. Hervé's culprit must appear as one testable branch.
4. Give each leaf a test: data or observation, cost, owner.
5. Choose the first test you run on Monday and say why.

### Template: TIP one-pager

| Section | Your team's answer |
|---|---|
| Problem statement (one falsifiable sentence) | |
| Baseline and gap (metric, current, target, trend, source) | |
| Who hurts, why now, what solved means to Hervé | |
| Hypothesis tree (three branches, priors) | Branch A: … (prior) / Branch B: … (prior) / Branch C: … (prior) |
| Tests (what, cost, owner, date) for each leaf | |
| First test on Monday, and why | |
| Decision point (when we choose, on what evidence) | |

---

## Exercise 2. Answer first: a memo and a storyline for Hervé (30 minutes)

### Fact base

Use these facts, which match this morning's lab. If your team found different numbers, you may use yours, with your verification log.

1. OTIF on promise date fell from 91% in September to 84% in April. The target is 95%.
2. Extrusion is the plant's constraint. Every day, mixing spends about 1,170 unit-minutes blocked waiting for extrusion, and packing about 1,660 unit-minutes starved waiting for it. Extrusion itself waits about 60.
3. Changeovers on extrusion rose from 49 a week in early January to 71 a week in late March.
4. Changeovers took 7.5% of planned extrusion time in January and 10.3% in March.
5. In March alone, the extra changeovers, compared with January's rate, cost about 272 tonnes of good output.
6. Good output fell from 233.6 tonnes a day in January to 223.9 in March, minus 4%.
7. Line M07 runs at 77.6% performance against about 88% for the other lines, with normal logged downtime. Over the quarter, that is about 376 tonnes lost to stops nobody records.
8. Line M04 runs at 75% performance at weekends against 90% on weekdays, and scraps 9.6% of its output at weekends against 6.0% on weekdays.
9. Line M02 loses 16.1% of its planned time to logged breakdowns, against 7.7% for the other lines.
10. The order book stands at 91% of demonstrated capacity. Sales says two accounts would take 6% more volume at current prices if lead times improved.
11. Contribution margin is about 26% of revenue, roughly €450 a tonne. Revenue is €148M a year.
12. The ERP schedules every changeover at 30 minutes, whatever the products.

### Your task

1. The governing thought: one sentence, your answer and its so-what.
2. A memo to Hervé: situation, complication, resolution, at most 250 words, in prose.
3. A six-slide ghost deck: an action title for each slide, plus one line naming the evidence that proves it.
4. The 30-second spoken version, rehearsed twice.

### Template: memo

> **To:** Hervé **From:** [team] **Date:** [date] **Subject:** [your governing thought, shortened]
>
> [Situation: one or two sentences Hervé already agrees with.]
>
> [Complication: what changed, with the two or three numbers that matter.]
>
> [Resolution: your recommendation, what it is worth and how sure you are, and the one decision you need from him.]

### Template: ghost deck

| # | Action title (a full-sentence conclusion) | Evidence that proves it (facts used) |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

Read the six titles aloud in order. If they do not tell the whole story, rewrite them.

---

## Exercise 3. One message, four plant roles (10 minutes, in pairs)

Four people at another plant, a metal stamping site. For each: write which preferences you see (E or I, S or N, T or F, J or P) and the evidence; then write the first two sentences you would say to them about your Exercise 2 recommendation, adapted to Polymex as if they were there.

| Person | What you observed in your first week |
|---|---|
| Lucas, plant controller | Opened your memo at the appendix. Asked for the raw rows behind two numbers. Speaks little in meetings, then sends a precise email the next morning. Every meeting with him starts and ends on time. |
| Amélie, quality manager | Thinks out loud at the morning production meeting. First question about your findings: "Which customers would see this?" Worried that operators who log defects will be blamed. Prefers to talk at the line, in front of the defect. |
| Karim, maintenance manager | Said almost nothing in the first meeting. Two days later he brought a printed failure log for one line, with three corrections to your numbers, and asked how a sensor would be powered. Does not commit until he has checked. |
| Sophie, site director | Arrived with a printed agenda. Wants a plan with dates; was annoyed when a deadline moved. Decides in the meeting. |

| Person | Preferences you see, and the evidence | Your first two sentences |
|---|---|---|
| Lucas | | |
| Amélie | | |
| Karim | | |
| Sophie | | |

Remember: these are hypotheses to test, never labels.

---

## Drill. The first five concepts of the Polymex bundle (6 minutes)

In your Plant Pulse repository, open `knowledge/`: `index.md`, `log.md` and `metrics/oee.md` are already there. Write the concepts below, one markdown file each, in the Open Knowledge Format: a YAML header with at least `type`, `title`, `description` and `sources`, then the body.

| File | type | What it must contain |
|---|---|---|
| `people/herve.md` | person | Role, what he asked, link to his email. No judgments. |
| `findings/extrusion-is-the-constraint.md` | finding | The evidence, with links to the data and to `VERIFY.md` |
| `metrics/oee.md` | metric | Already written: check it against your code |
| `sources/emails/2026-05-04-herve.md` | email | The original text of Hervé's email |
| `decisions/<date>-<topic>.md` | decision | Who decided, when, on what evidence |

Template:

```markdown
---
type: finding
title: Extrusion is the constraint
description: Mixing is blocked and packing starved while extrusion is always busy
sources:
  - ../../data/stage_daily.csv
  - ../../VERIFY.md
status: active
---
## Evidence
...
```

Rules: one fact in one place; every number links to its source; nothing you would not show the person concerned. Append one dated line to `log.md`. From tomorrow, every lab adds to this bundle.

---

## Exercise 4. Design the Polymex target system (12 minutes)

### Cast sheet

| Person | Role | Measured on | What you know |
|---|---|---|---|
| Hervé | Site director, your sponsor | OTIF and plant EBIT | Has told the group COO the plant needs an APS and probably a stronger planner. Wants your recommendation by Friday. |
| Corinne | Planner, 11 years | Plan adherence; in practice, every late order | Her spreadsheet is what the floor actually runs. Has heard rumors about an APS. Short on time and on patience. |
| Marc | Extrusion operator on M04, 23 years, weekday morning shift | Output and scrap on his line | Respected on the floor. Talks little to people from head office. |
| Nadia | IT manager | Uptime, security, audit findings | Inherited an unsupported application from a 2022 project and was blamed for it in an audit. |
| Mireille | CFO | Group EBIT, cash | Will join Friday's steering. Not yet briefed. |
| The group COO | Hervé's boss | Group OTIF, the 95% target | Expects Hervé's recommendation after Friday. |
| The sales director | Owns key accounts, including the two retail clients | Revenue, customer satisfaction | Some customers are known on the floor as "priority". |
| Sylvie | Scheduling clerk, 6 years, reports to Corinne | Plan in the ERP on time | Re-keys Corinne's daily changes into the ERP, about 25 hours a week. |
| The production manager | Runs the three shifts, reports to Hervé | Output, crews | Shift leaders report to him. Quiet in meetings; his teams do what he asks. |
| Shift leaders A, B, C | Run each shift, report to the production manager | Their shift's output | Receive the plan every morning. |


### Your task

1. Write the behaviour that must change, in one sentence.
2. Fill the target system below.
3. Place each person on the influence and stance map, and on the curve of change.
4. Mark what the system does to each person's work.
5. Circle the gaps.

### Template: target system

| Person | Role in the change (sponsor, agent, target, advocate) | Their sustaining sponsor | What the system does to their work (removes, changes, adds, nothing) | Where on the curve of change | Gap or risk |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Template: influence and stance map

| | Opposed or wary | Neutral | Supportive |
|---|---|---|---|
| High influence | | | |
| Low influence | | | |

---

## Exercise 5. Sequence the Sylvie message, then brief Hervé live (10 minutes of preparation)

### Situation

When Plant Pulse v1 is live and IT approves a write-back, Corinne's daily changes will flow into the ERP without retyping. That removes most of Sylvie's 25 hours a week of re-keying. Hervé has not decided what Sylvie will do instead. Nobody has told Sylvie or Corinne. The works council meets on the first Tuesday of each month.

### Your task

1. Fill the communication plan.
2. Write the first three sentences Corinne will say to Sylvie.
3. Prepare a two-minute, answer-first briefing for Hervé: your Exercise 2 recommendation, and the sequence you need him to approve.

### Template: communication plan

| Step | Who | What they hear | From whom | When | Channel | Reaction we expect | Follow-up |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |
| 4 | | | | | | | |
| 5 | | | | | | | |
| 6 | | | | | | | |

### Briefing structure (two minutes)

1. The answer, in one sentence.
2. The two numbers that prove it.
3. The options you see, and the one you recommend.
4. The decision you need from Hervé this week, including the sequence for Sylvie.
