<!-- DECK: FDE School, Day 3 morning, "From the stated process to the target architecture". 9:00 to 12:00. Trainer: Nicolas. -->
<!-- Conventions for Claude Design: slides are separated by a line of three dashes. The first comment of each slide gives its number and type. Text inside comments is design direction, never slide text. Identity: OSS Ventures design system. Rendered deck: "D3 AM - Deck - From stated process to target architecture.dc.html". -->

<!-- 1 | Title -->
# FDE School
## Day 3 morning: from the stated process to the target architecture

FDE School, by Devoteam and OSS Ventures
Nicolas

*AI 50%: drafted with Claude from the FDE School curriculum and OSS field material, validated by the trainer.*

---
<!-- 2 | Detail -->
## Today we design the system before we build it, and build it this afternoon

| Time | Block | You leave with |
|---|---|---|
| 9:00 | Stand-up | Yesterday's lesson, today's goal, one blocker |
| 9:10 | Theory 1. What an AI system is really made of | Ontology, models, tactics, decision models, and when to use what |
| 10:00 | Exercise 1. Stated process, true process | The as-is map and the to-be architecture for Lyon planning |
| 11:10 | Theory 2. Defining what good looks like | Measures that matter, baselines, targets, gains |
| 11:30 | Exercise 2. What good looks like | A five-line scorecard for Lyon planning |
| 11:55 | Close | What we build after lunch |

---
<!-- 3 | Hero -->
## An AI system is mostly code, rules and people. The model is the smallest part.

---
<!-- 4 | Divider | ghost: ONTO -->
## Part 1. What an AI system is really made of

---
<!-- 5 | Framework -->
## The ontology comes first: the objects, their links and their rules, named once

- **Objects.** Order, product, family, line, shift, rule, event, decision, person, source.
- **Links.** An order is for a product; a product belongs to a family; a line can or cannot run a family.
- **Rules.** Black to natural takes 240 minutes and only on Saturday morning. Each rule has an id, a source, an owner.
- **Events.** Anything that changes the plan after it is published: a date, a quantity, a breakdown, a hold.

---
<!-- 6 | Detail -->
## The ontology is the contract between the people, the code and the model

- People recognize their plant in it: Corinne reads "rule R07, source notebook N2 p.31" and agrees or corrects.
- Code uses it as types: a solver cannot sequence an order whose product has no family.
- The model uses it as vocabulary: it extracts an event into fields that already exist, not into prose.
- When two systems disagree, the ontology tells you which one owns the fact. SAP owns the order; Corinne owns the changeover rule.

Source: Allemang, Hendler and Gandon, *Semantic Web for the Working Ontologist*; Polymex Plant Pulse ontology, Day 3 lab kit.

---
<!-- 7 | Framework -->
## Seven kinds of models, each good at a different job

| Kind | What it is good at | Polymex example |
|---|---|---|
| Frontier general model | Reasoning over messy text, writing code, explaining | Reading 28 interviews and drafting the as-is map |
| Small fast model | Classification and extraction at volume, low latency, low cost | Turning each email from Stéphane into a structured event |
| Reasoning model | Long multi-step problems, slower and more expensive | Checking a draft architecture against every constraint |
| Embedding model | Similarity and search | Finding the notebook page that matches a new rule |
| Multimodal model | Reading images, scans, photos | Jean-Pierre's handwritten notebooks, Corinne's whiteboard |
| Open-weight model, self-hosted | Data that cannot leave the site or the EU | Nadia's condition: no data outside the EU |
| Decision model (System One), such as Jev | One typed answer from options you define, with a calibrated probability | "Is this email a date change, a quantity change or a rush order?" |

---
<!-- 8 | Framework -->
## Six tactics, from the least autonomy to the most

1. **Prompt.** Instructions and examples. Fast, fragile.
2. **Structured output.** The model fills a schema your code can check.
3. **Retrieval.** Relevant documents fetched and put in the context.
4. **Tools.** The model calls your functions and reads the results.
5. **Workflow.** Fixed steps in code, with the model inside some of them.
6. **Agent.** The model chooses the next step in a loop: plan, act, observe.

---
<!-- 9 | Detail -->
## A swarm of agents divides the work; use it when the subtasks are many and independent

- **Orchestrator and workers.** One agent splits the job, workers each take a piece, the orchestrator merges. Example: eight agents each read one Lyon interview and extract the steps, one agent builds the map.
- **Specialists.** Agents with narrow tools and narrow permissions: an event reader, a rules checker, an explainer.
- **Critic.** One agent checks another's output against the sources before a human sees it.
- **The cost.** Errors compound across hand-offs, coordination costs tokens, and every agent needs its own evals.
- **The test.** If one well-tooled workflow does the job, a swarm is overhead.

---
<!-- 10 | Framework -->
## Language models write and read. Decision models choose.

- **Solvers.** Mathematical optimization: linear and integer programming, constraint programming, heuristics. They find the best sequence under hard rules, and prove it is feasible.
- **Simulation.** Replay the plant with a candidate plan to see what breaks, before it breaks.
- **Forecasting and machine learning.** Predict demand, durations, failures from history.
- **Decision models.** Jev (TypeSafe, September 2026) treats tokens as decisions: given a state and typed questions, it returns one of your options, a score or a yes/no, each with a calibrated probability, in one pass. It cannot answer outside the options you gave it.

---
<!-- 11 | Detail -->
## A language model is a poor sequencer and an excellent interface to a solver

| Question | Who answers | Why |
|---|---|---|
| "Which order should run after O58872 on M05?" | Solver | Thousands of combinations, hard rules, an objective; must be right every time |
| "Is this message a quantity change, and for which order?" | Decision model, with a probability | One choice among known options; below the threshold, Sylvie decides |
| "Duval wants 32 t instead of 25 t, can we?" | LLM extracts the fields; solver repairs the plan | The email is language; the answer is arithmetic |
| "Why did the plan move O58866 to Friday?" | LLM, from the solver's diff and rule ids | Explaining a result is language |
| "Codra or Brisol first on Thursday?" | Corinne | A trade-off between customers is a decision someone must own |

---
<!-- 12 | Hero -->
## Most agentic systems are a lot of tools and ad hoc code around a few model calls.

---
<!-- 13 | Framework -->
## Anatomy of a real planning agent: count the boxes that are a model

1. **Connectors.** Read SAP orders, the LineLog CSV, the lab database, MaintPro. Code.
2. **Parsers and validators.** Dates, units, product codes, duplicates. Code.
3. **Event reader.** Email or comment to a structured event. Model.
4. **Rules engine.** Changeovers, capabilities, dryer, shifts. Expert system.
5. **Optimizers.** Long and short. Solvers.
6. **Explainer.** The diff and the reasons in words. Model.

---
<!-- 14 | Detail -->
## The expert system is back, and it is the part your client will trust

- In the 1980s, expert systems failed because someone had to write and maintain every rule by hand.
- Today the model drafts the rule from an interview or a notebook, the expert validates it, the engine applies it deterministically.
- Each rule has an id, a source, an owner and a status: proposed, validated, active, retired.
- An auditor, a controller or a planner can read it. Nobody can read a prompt that contains forty rules.

---
<!-- 15 | Framework -->
## Choose the component by the nature of the step, not by fashion

| If the step is... | Use | Not |
|---|---|---|
| Reading or writing language: emails, notes, interviews, explanations | LLM, with structured output | Regular expressions that break on the next email |
| Picking one option from a known set, with a confidence | Decision model such as Jev | An LLM asked to write the answer, then parsed |
| Applying known, stable rules | Expert system, rules engine | A prompt full of rules |
| Choosing among many combinations under constraints | Solver | An LLM "thinking hard" |
| Predicting from history | Statistics or machine learning | An LLM guessing a number |
| Holding the record of a fact | The existing system: SAP, LineLog, MaintPro | A new database nobody owns |
| A trade-off with accountability | A named person | Any of the above |

---
<!-- 16 | Detail -->
## Real systems are a mix of people and existing systems, and most of the rules already exist

- At Lyon, every step of planning today is run by a person: Corinne, Sylvie, Stéphane, Kevin, Didier.
- The rules are already written somewhere: the changeover whiteboard, four notebooks, the workbook, the 2024 IT review.
- The data already exists: SAP orders, LineLog since 2019, lab tests, MaintPro windows, Sylvie's notebook of changes.
- Your job is to find them, give each fact one owner, and connect them. Not to invent a new plant.

Source: Polymex Lyon process walk, 5 and 6 May 2026, Day 3 lab kit.

---
<!-- 17 | Divider | ghost: VSM -->
## Part 2. Two maps: the current value stream and the future process

---
<!-- 18 | Framework -->
## The current value stream map follows the information, not the material

1. **Steps.** Every place where the plan is created, changed, copied or used.
2. **Data in and out.** For each step, the source of every input and where the output goes.
3. **The algorithm.** Who or what decides, written as a rule. A person is an algorithm too.
4. **Latency.** How long between the fact and the decision, and between the decision and the system.
5. **Loops.** Rework, repairs, re-keying, with how often they happen, computed from data.

---
<!-- 19 | Detail -->
## On the map, a person's rule is written like any other algorithm

| Step | Algorithm | Written as |
|---|---|---|
| Friday plan | Corinne | Light to dark: natural, white, colors, black. Glass on M01, M02, M05 only |
| Night swap | Kevin | If a line stops, run the next order of the same family, else the closest color |
| Promise date | Stéphane | SAP date plus margin, quote 9 to 14 days |
| Changeover time | SAP | 60 minutes for every product |

Source: Lyon process walk interviews, 5 and 6 May 2026; SAP planning flow, group IT, November 2024.

---
<!-- 20 | Framework -->
## The future process makes one architectural choice per step, and says why

1. **Component.** What runs the step: existing system, expert system, solver, LLM, ML, person.
2. **Why this type.** The nature of the step, from the decision table.
3. **What the model gets.** The text it reads, the schema it fills, the tools it may call.
4. **Where a human decides.** Who, on what, and why a human: accountability, a trade-off, a missing fact.
5. **The record.** Which system holds the result once decided.

---
<!-- 21 | Detail -->
## Put a human where the decision needs an owner, not where the code is weak

- **Trade-offs between customers or objectives.** Codra or Brisol: somebody answers for it.
- **Validating a new rule.** The person who knows the plant signs the rule, once.
- **Publishing.** A plan that stops a line is published by the planner, not by an agent.
- **Low confidence.** When the event reader is unsure, a person confirms.
- **Not there.** Re-keying, arithmetic, checking a changeover time: a human there is a cost and a source of error.

---
<!-- 22 | Divider | ghost: 01 -->
## Exercise 1. The stated process and the true process

---
<!-- 23 | Exercise -->
## Exercise 1: map how Lyon really plans, then design the target, in 70 minutes

**Situation.** Wednesday 6 May 2026. Hervé wants an APS. The procedure says planning is weekly and frozen. Corinne says she rewrites it every day.

**Your kit.** `D3 AM - Lab kit - Lyon planning process.zip`: the procedure, IT's SAP flow, eight process-walk interviews, a shadowing log of Corinne's day, 188 change events over four weeks, plan stability and the systems inventory.

1. **Stated, 10 min.** The procedure in five boxes.
2. **True, 30 min.** With Claude, infer the real steps; each one cites a file. Compute the loops with code.
3. **To-be, 20 min.** One architectural choice per step, and where a human decides.
4. **Readout, 10 min.** Two teams, four minutes each.

---
<!-- 24 | Detail -->
## How to use Claude in this exercise: as an analyst you check, not as an oracle

- Give it the ontology in `CLAUDE.md` and ask it to extract steps per interview, with the file and line.
- Ask it to write the code that counts events by type, horizon and number of lines. Read the code.
- Ask it where the interviews contradict the procedure. Then ask where they contradict each other.
- The Verifier recomputes two numbers by hand from the CSV before the readout.
- Keep the drafts: this afternoon the rules you find become the rules file.

---
<!-- 25 | Detail -->
## What a good readout answers

- What does the procedure say, and in which three ways does the plant not follow it?
- How many times a day does the plan change, how far ahead, on how many lines? Computed, not estimated.
- Which algorithm runs each step today, and which component runs it tomorrow?
- What do you give to the language model, and what do you never give it?
- The shape of the solution, in one sentence.

---

<!-- 26 | Held back -->
## Slide 26: shown in the room, after the exercise

This slide gives the answer to an exercise. It is added here after the session.

---

<!-- 27 | Held back -->
## Slide 27: shown in the room, after the exercise

This slide gives the answer to an exercise. It is added here after the session.

---

<!-- 28 | Held back -->
## Slide 28: shown in the room, after the exercise

This slide gives the answer to an exercise. It is added here after the session.

---

<!-- 29 | Held back -->
## Slide 29: shown in the room, after the exercise

This slide gives the answer to an exercise. It is added here after the session.

---

<!-- 30 | Held back -->
## Slide 30: shown in the room, after the exercise

This slide gives the answer to an exercise. It is added here after the session.

---
<!-- 31 | Divider | ghost: GOOD -->
## Part 3. Defining what good looks like

---
<!-- 32 | Hero -->
## Good is defined by what the client would notice, not by what the system does.

---
<!-- 33 | Detail -->
## Start from the decision that matters most: Codra decides in September

- Codra put 30% of its volume out to tender: 5,000 tonnes a year.
- Its terms: 95% on time and seven days of lead time, three months running before September.
- Lyon gives 84% on time overall in April, and quotes nine to fourteen days.
- 5,000 t at €447 contribution a tonne is €2.2M a year. Every other gain this month is smaller.

Source: Stéphane, interview 19, and process walk, 5 May 2026; Julien, interview 15; P&L Lyon 2025. Calculation: 5,000 × €447 = €2.24M.

---
<!-- 34 | Framework -->
## Measure at three levels, and protect the result with guardrails

- **Outcome.** What the business or the customer sees: OTIF for Codra, quoted lead time.
- **Driver.** What moves the outcome and what you control: answer time to a change, orders moved inside 24 hours.
- **Adoption.** Whether people use it: plans published from the system, overrides with a reason.
- **Guardrail.** What must not get worse while you push: scrap, changeovers per shift, the planner's hours.

---
<!-- 35 | Framework -->
## Set the target between what you have done and what physics allows

1. **Baseline.** The last four weeks, defined by the controller, in week one.
2. **Best demonstrated.** The best week of the last quarter: proof the plant can do it.
3. **Entitlement.** What the plant could do with a perfect plan on the same orders. The solver tells you this afternoon.
4. **Target.** A number, a date, an owner, between best demonstrated and entitlement.

---
<!-- 36 | Detail -->
## A gain smaller than the weekly noise will never be seen, so size it before you promise it

- Lyon's weekly OTIF moves by about two points from week to week without anything changing.
- A project that promises one point of OTIF has promised something nobody can measure.
- Ask: if we hit the target, will Julien see it in his numbers in four weeks? If not, aim higher or measure something closer to the cause.
- Price each gain in euros with the controller's figures: contribution per tonne, not revenue; the variable cost, not the full cost.

Source: kpi_weekly_2026-w06-w18.csv; Julien, interview 15.

---
<!-- 37 | Detail -->
## Ask each person what would make them say it worked

| Person | It worked if... |
|---|---|
| Hervé | Codra stays |
| Stéphane | He can answer "can we do it by Thursday?" within the hour, and the answer holds |
| Corinne | She leaves on Friday at five |
| Kevin | The plan at 22:00 has not changed twice, and he knows what to swap to |
| Julien | He can find the gain in his numbers without you |

Source: Lyon interviews 10, 15, 19, 20, and process walk, 5 and 6 May 2026.

---
<!-- 38 | Detail -->
## Four ways to define good badly

- **Vanity measures.** Number of model calls, parser accuracy, number of users logged in. They describe the system, not the plant.
- **Too many measures.** Twelve KPIs means nobody watches any. Five at most.
- **No date, no owner.** "Improve OTIF" is a wish.
- **No guardrail.** OTIF bought with three extra changeovers a shift is paid in scrap.

---
<!-- 39 | Divider | ghost: 02 -->
## Exercise 2. What good looks like

---
<!-- 40 | Exercise -->
## Exercise 2: write the scorecard for Lyon planning, in 25 minutes

**Your kit.** `data/kpi_weekly_2026-w06-w18.csv`, thirteen weeks; the interviews; `templates/what-good-looks-like.md`.

1. **What matters, 5 min.** One line per person: "it worked if...".
2. **Scorecard, 12 min.** At most five measures: level, baseline, best week, target and date, owner, how measured, guardrail.
3. **Euros, 5 min.** The gain, with the calculation and the controller's figures.
4. **Show first, 3 min.** The one measure you put on the first slide for Hervé.

---

<!-- 41 | Held back -->
## Slide 41: shown in the room, after the exercise

This slide gives the answer to an exercise. It is added here after the session.

---
<!-- 42 | Framework -->
## Three things to keep from this morning

1. **Map the true process with data.** The procedure is a hypothesis; the change log is the evidence.
2. **One component per step, chosen by its nature.** Language to the model, rules to the engine, combinations to the solver, trade-offs to a person.
3. **Good is what the client notices.** Codra's 95% and seven days, with a baseline Julien defines.

---
<!-- 43 | Detail -->
## This afternoon: build it on the platform, then run it with Corinne

- 13:30, theory: the platform around the model, and the tools you do not write.
- 14:00, exercise: wire the long and the short optimizer into your target architecture.
- 15:20, theory: from the first build to deployment, and the improvement loop.
- 15:50, exercise: run the first full version with the trainer as Corinne.
