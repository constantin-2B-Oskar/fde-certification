<!-- DECK: FDE School, Day 4 afternoon, "What goes wrong, and how it scales". 30 slides, 13:30 to 17:30. Trainer: Renan. Day 4 is a half day; the former morning (technical roadblocks, Plant Pulse v2) is in _archive/. -->
<!-- Conventions for Claude Design: slides are separated by a line of three dashes. The first comment of each slide gives its number and type. Text inside comments is design direction, never slide text. Identity: OSS Ventures design system. Rendered deck: "D4 PM - Deck - Obstacles and scaling.dc.html". -->

<!-- 1 | Title -->
# FDE School
## Day 4 afternoon: what goes wrong, and how it scales

FDE School, by Devoteam and OSS Ventures
Renan Devillières

*AI 50%: drafted with Claude from the FDE School curriculum and OSS field material, validated by the trainer.*

---
<!-- 2 | Hero -->
## The model is rarely what kills the project. A missing yes usually is.

---
<!-- 3 | Detail -->
## This afternoon: everything that goes wrong on one site, then what changes on four

```diagram:flow
paper | Theory 1 | What goes wrong: technical and people | 13:30
ink | Exercise 1 | Eight situation cards: your next 48 hours | 14:05
paper | Theory 2 | Scaling: five principles | 15:40
ink | Exercise 2 | A scale plan from Lyon to three plants | 16:10
```

Break 15:30 to 15:40. Close 17:15.

---
<!-- 4 | Divider | ghost: WRONG -->
## Part 1. Everything that can go wrong

---
<!-- 5 | Framework -->
## What goes wrong falls in two families, and the second one decides

```diagram:columns
== paper | Technical | you see it in a log
- The data is wrong, and you find out late
- Access is blocked by IT or group security
- The system has no API, or the vendor says no
- Nobody owns the app after you leave
== ink | People | you see it in a calendar
- People do not want to use it
- People have a bad opinion of you
- The sponsor is not sponsor enough
- The experts never have time
```

---
<!-- 6 | Framework -->
## Technical dead ends have known moves; the mistake is improvising around the rules

| Dead end | Move |
|---|---|
| IT's security review takes six weeks | Start it on day one; work on exports while it runs |
| The system has no API | Ask the vendor; use the file it already writes; read a database view with IT |
| The data does not exist | Capture it at the source for two weeks: a form, a sensor |
| Two systems disagree | Name the source of truth with the owner; reconcile monthly with finance |
| Nobody will own it | A named owner at the client before go-live, or no go-live |

---
<!-- 7 | Detail -->
## When the data turns out wrong mid-project, you announce it first, with the corrected number

- Say it before anyone finds it: to the sponsor, then to the controller, within a day.
- Bring the corrected figure and what it changes; never the error alone.
- Write down what check would have caught it, and add it.
- Trust lost by a correction comes back. Trust lost by a cover-up does not.

---
<!-- 8 | Framework -->
## Every people problem is a stance with a reason behind it

| What you see | What is usually behind it | First move |
|---|---|---|
| They do not want to use it | Fear for the job, or of being judged on the numbers | Ask what they do that the system does not know |
| They have a bad opinion of you | The last project that left an orphan | Ship one small thing that helps them, this week |
| The sponsor is not sponsor enough | Other priorities, or a theory your data contradicts | Ask for one specific act, with a date |
| The experts never have time | Their manager never freed it | Ask the manager, not the expert |

---
<!-- 9 | Detail -->
## Resistance is information: name the fear before you argue with the stance

- Corinne: "The tool will never know what I know." She fears the APS that replaces her.
- Marc: "We have always done it this way." He fears being blamed for his workaround.
- Nadia: "Not another orphan." She fears the 3 a.m. call for a system she did not approve.
- Sylvie: "So the tool does my job now." She fears the exit.

---
<!-- 10 | Detail -->
## A bad reputation is answered by conduct, not by argument

- It is almost always about the last project, not about you.
- Be on the floor, at shift change, more than in meeting rooms.
- Promise little, deliver it in front of them, within a day.
- Never use one person's data against a colleague.
- Let them say it to you directly: "What did the last team get wrong?"

---
<!-- 11 | Framework -->
## A sponsor who is not sponsor enough is a contract problem, not a mood

```diagram:flow
paper | Name the act | One thing only he can do: free Corinne's Friday, call group IT
paper | Ask in private | With a date, and what it costs if it does not happen
flame | Escalate | Back to whoever sold the project; the scope or the sponsor changes
```

What a sponsor owes: thirty minutes a week, a blocker cleared within a week, and saying it in public.

---
<!-- 12 | Detail -->
## Experts never have time because nobody gave it to them

- Ask their manager for named hours, in the plan: "Corinne, two hours on Tuesday and Thursday."
- Take less of it: twenty minutes at her desk beats a two-hour workshop.
- Give time back first: the checker that saves her Friday evening pays for the interview.
- Record, with consent, so you never ask the same question twice.

---
<!-- 13 | Framework -->
## Whatever goes wrong, the first 48 hours follow the same pattern

```diagram:flow
paper | Hour 0 to 4 | Talk to the person, in person. Listen before you explain
paper | Hour 4 to 24 | Tell the sponsor yourself, with facts and one option
paper | Hour 24 to 48 | Write it down: what happened, who owns what, by when
ink | Hour 48 | One next step agreed, with a name and a date
```

---
<!-- 14 | Exercise -->
## Exercise 1: eight situation cards, your next 48 hours

1. Each team draws two cards. Twenty minutes per card.
2. For each card, write on one sheet: who you see first, your first sentence word for word, what you do in the 48 hours, what you will not do, and what is agreed at hour 48.
3. Your Lead runs time, your Storyteller writes.
4. Readout: two minutes per card, then the room challenges.

Forty minutes of work, thirty-five of readout.

---
<!-- 15 | Detail -->
## The eight cards

```diagram:tiles
cols: 4
h: 7
grey | 01 · The weekend crew | Operators refuse to use it
grey | 02 · The canteen | Someone badmouths the team
grey | 03 · The silent sponsor | Hervé goes quiet before the review
grey | 04 · No time | Corinne cancels for the third time
grey | 05 · Six weeks | Group security blocks access
grey | 06 · The wrong baseline | The data was wrong, Mireille has the number
grey | 07 · The wrong theory | Hervé still wants an APS and a new planner
grey | 08 · The re-keying | Sylvie's job is changed by the system
```

---
<!-- 16 | Detail -->
## Readout: the room judges each answer on four questions

1. Did the first person you saw have the problem, or the power to solve it?
2. Was your first sentence about their goal, or about yours?
3. Did you tell the sponsor before he heard it from someone else?
4. Is the hour-48 agreement specific: a name, an act, a date?

---
<!-- 17 | Held back -->
## Slide 17: shown in the room, after the exercise

This slide gives the answer to an exercise. It is added here after the session.

---
<!-- 18 | Divider | ghost: SCALE -->
## Part 2. Scaling

---
<!-- 19 | Hero -->
## A second plant is a new client. It has heard about you.

---
<!-- 20 | Data -->
## Polymex's other three plants share the ERP and almost nothing else

| | Lyon | Haguenau | Évreux | Tarragona |
|---|---|---|---|---|
| Capacity used, 2025 | 91% | 64% | 97% | 78% |
| Shop-floor data | Daily LineLog exports | AutoTrack MES | Small MES since 2021 | Paper |
| Lean maturity | Never got the foundations | The model plant | Middle | "Paper and goodwill" |
| Main problem | Delivery: retail micro-orders | No orders | Sold out until line 7 | Energy and price |

Source: Polymex knowledge bundle: capacity 2025, interviews with the group IT director and the group CI director, plant files.

---
<!-- 21 | Framework -->
## Five principles for scaling

```diagram:tiles
cols: 5
h: 11
paper | 01 · Be humble | Lyon's answer is a hypothesis everywhere else
paper | 02 · Responsibilities | HR and managers decide what is theirs to decide
paper | 03 · Incentives | Every actor can say what they win
paper | 04 · Local culture | Respect it enough to have impact; if it blocks the target, it is a sales problem
ink | 05 · IT from day one | Reuse the core; plan every site with IT, cybersecurity included
```

---
<!-- 22 | Detail -->
## Be humble: start again from the true process, and ask what they do better

- What worked in Lyon solved Lyon's problem. Haguenau's problem is not planning; it is orders.
- Redo the stated against true process walk on every site, even if it takes a day.
- Ask first what they already do better: Haguenau runs daily management better than its customers.
- Come with questions and a short demo, not with a roll-out plan.

---
<!-- 23 | Framework -->
## Get people to face their responsibilities: the FDE does not decide roles

```diagram:router
head: Decision | Owner | Not the FDE's job because
What Sylvie's job becomes | ink | HR and Hervé | Only her employer can promise anything about her job
Who uses the system, and when | paper | The plant manager | Adoption is managed, not volunteered
How operators are judged on the data | paper | Managers and the works council | The data watches machines, not people
Who owns the app after go-live | paper | Site IT and the business owner | You leave; they stay
What counts as a gain | paper | The controller | She measures it without you
```

---
<!-- 24 | Detail -->
## Align incentives: each actor must be able to say what they win

| Actor | What they win, or not |
|---|---|
| Plant manager | OTIF and EBIT he reports to the COO |
| Planner | Her Friday evening back, her rules under her name |
| Operator | Fewer calls at 3 a.m.; his setting becomes the standard |
| Site IT | One supported platform instead of five orphans |
| Group COO | Gains a controller can measure, plant by plant |

If an actor wins nothing, expect nothing from them. Haguenau's planner gains little from a better plan when the lines run at 64%.

---
<!-- 25 | Framework -->
## Respect local culture enough to achieve impact, but not so much that the target bends

```diagram:spectrum
axis: Adapt to the site | Take it back to the sponsor
Adapt | Language, shift patterns, meeting rituals, who signs what
Adapt the path | Order of roll-out, the first user, the pace
Hold the target | The rules are validated, the plan is followed, the data is shared
Escalate | The culture is at odds with the target: a sales problem, not a floor problem
```

---
<!-- 26 | Framework -->
## Reuse the core, rewrite the edge

```diagram:columns
layout: bands
== ink | Reused on every site
- The ontology core
- The platform: harness, permissions, audit
- The solvers and the rules engine
- The scorecard and the eval
== paper | Rebuilt per site
- Local rules, validated by local owners
- Data connectors: LineLog, AutoTrack, paper
- Thresholds and the scorecard weights
- Language, the first user, the rituals
```

---
<!-- 27 | Detail -->
## See every plan with IT, cybersecurity included, from day one

- Data stays on the client's servers, in their tenant, in the EU. You bring the software to the data.
- Start the group security review on day one; it takes six weeks at Polymex.
- Train site IT on the ontology, so they can read it, change it and own it.
- Secrets in a vault, access per role, every change audited: the same on every site.
- Nadia's five conditions become the group's standard, not Lyon's exception.

Source: Polymex knowledge bundle, interview with the group IT director.

---
<!-- 28 | Exercise -->
## Exercise 2: the scale plan from Lyon to three plants

1. You have Lyon live. Laurent, the COO, asks for a plan for Haguenau, Évreux and Tarragona.
2. For each plant: what it wins, who owns what, what you reuse and what you rebuild, the IT and security plan, the order and the dates.
3. List what you will not do, and every sales problem you must take back to Laurent.
4. One poster per team. Three minutes of readout.

Forty-five minutes. Use the plant files and the IT director's interview in the Day 2 bundle.

---
<!-- 29 | Detail -->
## Three things to keep from this afternoon

1. Name the fear behind the stance; talk to the person within four hours, the sponsor within a day.
2. A sponsor who does not act is a contract problem: take it back to whoever sold it.
3. Scale with humility, owners, incentives and IT: reuse the core, rebuild the edge, keep the data on their servers.

---
<!-- 30 | Detail -->
## Go further, and tomorrow

**Read**
- Chip and Dan Heath, *Switch* (2010).
- Roger Fisher and William Ury, *Getting to Yes*.
- Edgar Schein, *Organizational Culture and Leadership*.

**Tomorrow**
- Five companies, disguised, one per team: the kickoff of a signed project in front of the executive committee. Then the debrief, your 30/60/90 plan, and the FDE Certification exam.
