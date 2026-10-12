<!-- DECK: FDE School, Day 2 morning, "How plants work, and which problem to solve". 63 slides, 9:00 to 12:00. Trainer: Renan. -->
<!-- Conventions for Claude Design: slides are separated by a line of three dashes. The first comment of each slide gives its number and type. Text inside comments is design direction, never slide text. Identity: OSS Ventures design system. Ink #0D0D0D, paper #FDFDFD, flame #FD594F as the single accent; Fjalla One uppercase titles, Inter body, Archivo labels, Geist Mono for sources and figures; brand photography only. Rendered deck: "D2 AM - Deck - Problems worth solving.dc.html". -->

<!-- 1 | Title -->
# FDE School
## Day 2 morning: how plants work, and which problem to solve

FDE School, by Devoteam and OSS Ventures
Renan Devillières

*AI 50%: drafted with Claude from the FDE School curriculum and OSS Ventures' internal training "How manufacturing works", validated by the trainer.*

---
<!-- 2 | Hero -->
## A gain that never reaches the P&L is a story, not a gain.

---
<!-- 3 | Detail -->
## This morning: how plants work, how lean measures them, then choose where Polymex should start

| Time | Block | You leave with |
|---|---|---|
| 9:00 | Stand-up | Yesterday in one sentence per team |
| 9:10 | Types of manufacturing | Which game a plant is playing |
| 9:30 | Lean and continuous improvement | The three brakes, the eight wastes, the lean house |
| 9:55 | Lean measures maturity; AI changes the scale | How to read a plant's readiness in an hour |
| 10:15 | Break | |
| 10:25 | Problems worth solving | The gains that reach the P&L, and the ones that do not |
| 10:45 | Lab: the Polymex knowledge bundle | Which plant to start with, and why, in one page |
| 11:35 | Readouts to the CEO | Feedback from the room |
| 11:55 | Close | Three things to keep |

---
<!-- 4 | Detail -->
## By noon you will read a plant like an operator and a group like its CFO

- You can say which type of manufacturing a plant runs, and what that means for its problems.
- You know the lean vocabulary every plant uses: value added, the three brakes, the eight wastes, the lean house.
- You can judge a plant's maturity from its lean practices, and explain what AI changes.
- You can tell a gain that reaches the P&L from one that never will.
- Your team has read the Polymex knowledge bundle and chosen the plant to start with, with the reasons.

---
<!-- 5 | Divider | ghost: TYPES -->
## Part 1. Types of manufacturing

---
<!-- 6 | Hero -->
## Manufacturing is many different games. Know which one you are playing.

---
<!-- 7 | Framework -->
## Process plants transform material; discrete plants build things

| | Process | Discrete |
|---|---|---|
| Makes | Tonnes, litres, batches | Units you can count |
| Examples | Plastics, chemicals, food, steel, paper | Cars, machines, electronics, furniture |
| Changeovers | Purges, cleaning, temperature profiles | Tooling, setups, line rebalancing |
| Quality | Lab results on a batch | Inspection of a part |
| Typical leaks | Scrap, energy, changeover sequences | Setups, rework, missing parts, line balance |
| Polymex | Compounding: a process plant | |

---
<!-- 8 | Framework -->
## Five ways to organize production, from the continuous flow to the one-off project

| Layout | How it runs | Example |
|---|---|---|
| Continuous flow | Runs day and night, rarely stops | Refinery, paper machine, extrusion line |
| Batch | Fixed quantities, one recipe after another | Compounding, pharma, food |
| Assembly line | Units move station to station at a set pace | Cars, appliances |
| Job shop | Machines grouped by trade; each order has its own route | Machining, precision parts |
| Project | One unique product, built where it stands | Ships, aircraft, plants |

---
<!-- 9 | Framework -->
## How a plant answers demand decides what hurts it

| Strategy | The plant makes... | What hurts |
|---|---|---|
| Make to stock | Before the order, to a forecast | Inventory, forecast error, obsolescence |
| Make to order | After the order, from standard designs | Lead time, changeovers, on-time delivery |
| Assemble to order | Standard modules, assembled after the order | Module stock, configuration errors |
| Engineer to order | A design for each order | Engineering hours, quoting, rework |

Most plants mix them. Polymex Lyon was mostly make to stock; small retail orders are pushing it toward make to order.

---
<!-- 10 | Detail -->
## Plants differ on two axes: how much capital the work needs, and how many references they run

| | Few references | Many references |
|---|---|---|
| Capital-heavy, "big machines" | Electrolysis, rolling, continuous casting | Compounding, plastic injection, stamping |
| Labour-driven | Basic assembly, packaging | Small-part machining, low-rate assembly, craft trades |

In capital-heavy plants the machine is the constraint and depreciation is fixed. In labour-driven plants, skills and staffing are.

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 11 | Detail -->
## Each sector has its own pain points

| Sector | What to know |
|---|---|
| Chemicals and plastics | Long cycles, raw materials most of the cost, heavy environmental pressure |
| Consumer goods | Short innovation cycles, cost pressure |
| Agri-food | Compliance, pressure on resources |
| Pharma | Compliance-heavy; R&D under pressure |
| Automotive | High complexity, heavy cost pressure from carmakers and new entrants |
| Aerospace | Concentrated sector, cost pressure, long programs |
| Luxury | Labour shortage, extreme personalization |

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 12 | Framework -->
## A classic mistake in operations is not knowing which game you are playing

| Supplier of... | What the customer pays for | So the plant optimizes |
|---|---|---|
| Easy-to-produce parts | Price | Cost |
| Hard-to-produce parts | Reliability | On-time delivery, by mastering quality and supply chain |
| New, game-changing products | Innovation | Development speed and engineering capability |

A commodity compounder that spends a year on lead time, or a specialist that cuts cost and loses its engineers, is playing the wrong game.

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 13 | Detail -->
## In every plant, one or two functions hold the power

- **Pharma.** Quality: nothing ships without its release.
- **Aerospace.** Engineering and quality, then supply chain.
- **Automotive.** Operations and supply chain: the line must never stop.
- **Luxury.** The craft: the people who master the gesture.
- **Plastics compounding.** Production and planning, with quality close behind.

Find out who holds it before your first proposal. It is rarely the org chart's answer.

---
<!-- 14 | Framework -->
## Every plant runs on four flows: demand, planning, supply and production

1. **Demand.** Orders and forecasts from customers.
2. **Planning.** What to make, where, when: the plan.
3. **Supply.** Raw materials and parts from suppliers.
4. **Production.** Work in progress becoming finished goods.

Information flows run demand and planning; physical flows run supply and production. Most AI use cases sit where an information flow decides a physical one.

---
<!-- 15 | Divider | ghost: LEAN -->
## Part 2. Lean and continuous improvement

---
<!-- 16 | Exercise -->
## Discuss for two minutes: what do you know about the history of lean?

1. Where does lean come from, and why there?
2. Who has worked in a plant with a lean program? What did you see on the walls?

---
<!-- 17 | Detail -->
## Post-war Japan's constraints forced a different model than Ford's

| | Mass production, Ford | Lean, Toyota |
|---|---|---|
| Context | Huge, uniform demand; everything produced sells | Low demand, no capital, little space |
| Strength | Standard products, clear costs, push flow | Less waste, low investment, fast response to demand |
| Weakness | Slow to react; high inventory to cover problems | Needs a change of mindset, constant training and rigor |
| Improvement by | Engineers and investment | Shop-floor teams, every day |

Source: OSS Ventures, How manufacturing works, internal training; Togo and Wartman, Against All Odds.

---
<!-- 18 | Detail -->
## Best-in-class lean plants clearly outperform the industry average

| Automotive | Industry average | Best-in-class lean |
|---|---|---|
| Operational efficiency, good parts against capacity | 75 to 85% | 90 to 95% |
| Component inventory | 3 to 7 days | 2 to 4 hours |
| Vehicle inventory | 2 to 3 days | 1 day |
| Absenteeism | 4 to 6% | 2 to 3% |

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 19 | Detail -->
## Operational excellence is improving as a team, every day

> Operational excellence is the ability to improve as a team, every day, toward the production system that meets customer needs, by identifying and closing performance gaps, and by capitalizing on best practices.

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 20 | Framework -->
## Lean attacks three brakes on value added: rigidity, waste and variability

- **Rigidity.** Lack of flexibility to follow demand: long lead times, long changeovers, machines dedicated to one product.
- **Waste.** Resources used beyond what the customer needs: overproduction, rework, waiting, inventory.
- **Variability.** Processes drifting from their standard: unstable machines, methods that depend on the person.

Value added is what the customer is willing to pay for. Everything else is a brake.

---
<!-- 21 | Framework -->
## There are eight types of waste

| Waste | Example in a plant |
|---|---|
| Overproduction | A batch larger than ordered, to avoid a changeover |
| Waiting | A crew idle while maintenance finishes |
| Transport | Material stored far from the line |
| Over-processing | Quality beyond what the customer asked for |
| Inventory | Buffers behind an unreliable machine; tied-up cash |
| Rework and defects | Scrap, regrind, a batch run twice |
| Unnecessary motion | Walking around a machine to restart a cycle |
| Unused skills and ideas | Operators never asked how to improve |

---
<!-- 22 | Exercise -->
## Spot the waste: three minutes, in pairs

1. A team must store and prepare a heavy distribution unit in a workshop.
2. Operators walk back and forth across the area and wait for the overhead crane and the telehandler.
3. They move the unit several times with a forklift and the crane, and pull consumables from a large local stock.
4. The forklift is driven by a skilled mason.

Which of the eight wastes do you see?

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 23 | Detail -->
## What we saw: six of the eight wastes in one short sequence

| Waste | What we saw |
|---|---|
| Unused skills | A skilled mason driving the forklift |
| Unnecessary motion | Operators walking back and forth fifteen times |
| Waiting | People waiting five times; the crane and telehandler waiting too |
| Transport | Three forklift trips |
| Rework | The unit handled several times with the crane |
| Inventory | Several units and a stock of consumables |
| Overproduction, over-processing | None observed |

---
<!-- 24 | Framework -->
## Variability comes from five sources: the 5M

| Source | Everyday variability |
|---|---|
| Materials | Inconsistent quality from suppliers; a resin lot that melts differently |
| Means | Unreliable machines; absenteeism; juniors not yet trained |
| Methods | Procedures not shared between shifts |
| Milieu | Temperature and humidity swings in the hall |
| Messages | Wrong forecasts; wrong supplier lead times; a plan nobody can run |

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 25 | Framework -->
## The lean house: two pillars on three foundations

| Part | What it is |
|---|---|
| Roof | Best customer service: safety, quality, cost, lead time |
| Pillar 1: just-in-time | Make only what is needed, when it is needed |
| Pillar 2: jidoka | Right first time: stop at the first defect, never pass it downstream |
| Foundation 1 | Stable, standardized processes |
| Foundation 2 | Shop-floor performance management |
| Foundation 3 | Problem solving and implementing ideas |

---
<!-- 26 | Framework -->
## Just-in-time is built in four steps

1. **Stabilize and level.** Reliable processes; smaller campaigns.
2. **Put machines in line.** Closer workstations, balanced load, one-piece flow where possible.
3. **Produce at takt.** The pace of customer demand.
4. **Pull.** Machines linked, work in progress managed with kanban.

---
<!-- 27 | Detail -->
## Jidoka was born in 1924, with a loom that stopped itself

- Automatic looms already existed, but they produced defects and needed an operator watching each one.
- Sakichi Toyoda built a loom that detected a broken thread and stopped at the first problem.
- One person could now supervise many machines, and no defective cloth was made.
- Today: poka-yoke, andon cords, machine status lights, the red bin for defects.

Source: Taiichi Ohno, Toyota Production System.

---
<!-- 28 | Detail -->
## You only see a problem when you compare the situation to a standard

- A standard is a short, visual document that says how the work is done, written with the people who do it.
- Without a standard, a four-hour changeover is just "how long it takes".
- With one, it is a gap of three hours against 60 minutes, and someone asks why.
- Stabilize, standardize, improve, challenge: the standard is what continuous improvement improves.

---
<!-- 29 | Detail -->
## Performance management runs from the shift to the quarter

| Level | Rhythm | Ritual |
|---|---|---|
| Operating team | Every shift | Start-of-shift meeting at the team board |
| Workshop manager | Daily | Supervisor review of yesterday's numbers |
| Plant director | Weekly, monthly | Performance review, plant KPI board |
| Business unit | Quarterly | Trends and initiative plans per site |

Problems escalate up; decisions and help come back down.

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 30 | Framework -->
## Problem solving treats the root cause, not the symptom

1. **Problem.** The roof leaks.
2. **Curative action.** A bucket under the leak.
3. **Root cause.** Ask "why?" five times.
4. **Corrective action.** Repair the roof.
5. **Standardize.** Inspect the roof regularly, everywhere.

---
<!-- 31 | Detail -->
## Continuous improvement has several schools, and plants mix them

| School | Attacks | Typical tools |
|---|---|---|
| Lean, Toyota Production System | Waste and flow | Value stream map, 5S, kanban, standard work |
| Six Sigma | Variability | DMAIC, statistical process control, capability studies |
| Total productive maintenance | Equipment losses | OEE, autonomous maintenance, planned maintenance |
| Theory of constraints | The bottleneck | Drum-buffer-rope, constraint exploitation |
| SMED | Changeover time | Separate internal and external tasks, then shorten both |
| Kaizen | Small daily improvements | Suggestion systems, improvement workshops |

---
<!-- 32 | Detail -->
## Four convictions about lean

1. Lean is not only cost-cutting: it improves quality and lead time as much as cost.
2. In high-value manufacturing, lean is mostly about shorter flows and a more responsive supply chain.
3. Real lean is not a collage of tools but a deep change in practices and mindsets.
4. An ambitious transformation needs senior management and a team of change agents beside operations.

Source: OSS Ventures, How manufacturing works, internal training.

---
<!-- 33 | Divider | ghost: x10 -->
## Part 3. Lean measures maturity; AI changes the scale

---
<!-- 34 | Detail -->
## A plant's lean practices are the fastest read of its maturity

| Level | What you see on the floor | What it means for you |
|---|---|---|
| 1. Firefighting | No standards, whiteboards with yesterday's crisis | Data is unreliable; start with standards and capture |
| 2. Standards | 5S, work instructions, OEE measured weekly | Data exists; definitions vary by shift |
| 3. Daily management | Shift boards, daily reviews, problem-solving routines | Data is used; people expect numbers |
| 4. Improvement culture | Operators solve problems; standards evolve every month | Fastest adoption; AI amplifies what they already do |

---
<!-- 35 | Detail -->
## Read it in the first hour: seven questions and a walk

1. How many people work here, and how many in the offices?
2. What are the three key issues today?
3. Who are your customers, and what do they expect most?
4. Rank machine productivity, people productivity, supply chain, delivery, quality and safety.
5. What have you done in lean?
6. What have you done in digital?
7. On the walk: standards on the wall, boards updated today, waste you can see, who holds the power.

Source: OSS Ventures, How manufacturing works, field kit.

---
<!-- 36 | Detail -->
## Lean hit a ceiling: people can only analyze so much, so often

- Analysis is done by hand: a five-whys session takes a team an afternoon.
- Quality is sampled: two parts per machine per shift, not every part.
- Reviews are weekly or monthly; by then the batch has shipped.
- The best rules live in a few heads, and leave when those people do.
- Mature lean plants improve a few percent a year, then plateau.

---
<!-- 37 | Hero -->
## Lean taught plants to see waste. AI lets them act on all of it, every shift.

---
<!-- 38 | Detail -->
## The digital plant has eight new wastes, and they slow it as much as the old ones

| Lean wastes, physical flows | New wastes, information flows |
|---|---|
| Overproduction | Bad user experience |
| Waiting | Indecision |
| Transport | Silos |
| Over-processing | Unstructured data |
| Inventory | Painful, repetitive tasks |
| Rework | Waiting for information |
| Unnecessary motion | Bureaucracy |
| Unused skills | Over-consumption of energy and resources |

Source: OSS Ventures, How manufacturing works: the hyper-manufacturing wastes.

---
<!-- 39 | Detail -->
## Every lean tool has an AI version that works at the scale of the whole plant

| Lean tool | What AI makes possible |
|---|---|
| SMED on one line, once a year | Every changeover sequenced against every rule, every day |
| Five whys in a workshop | Root-cause hypotheses across quality, machine, material and maintenance data, in hours |
| Statistical sampling | Every part or batch checked; drift caught before scrap |
| Kanban sized once a year | Stock levels recomputed every week from demand |
| The shift board | Alerts in real time, with the likely cause |
| Standard work in a binder | The experts' rules captured, checked and used by the system |

---
<!-- 40 | Detail -->
## AI amplifies the operating system; it does not replace it

- A plant without standards automates its chaos: the model learns the bad habits.
- Data quality follows standards: one definition of a changeover before any model of it.
- Plants with daily performance routines adopt AI fastest: they already act on numbers.
- So lean maturity is a readiness test. Read it before you size anything.

---
<!-- 41 | Detail -->
## Build for usage first: software made for reporting produces no data

| Reporting-first tool | Usage-first tool |
|---|---|
| Built for management dashboards | Built for the operator's daily work |
| Operators do not use it | Operators use it every shift |
| Little or poor data | Good data is created as a by-product |
| Reports are wrong; nobody trusts them | Reports and analysis follow |

Source: OSS Ventures, factory digital diagnostic, worked case.

---
<!-- 42 | Detail -->
## Most plants OSS visits sit before their digital transformation

1. **Stuck in lean.** Listening to the big vendors.
2. **Testing the waters.** Asking questions, a pilot or two.
3. **Doing new things the old way.** Many pilots, little scale.
4. **Doer visionaries.** Few: data-centric, usage first, scaling fast.

Source: OSS Ventures, more than 180 factories visited.

---
<!-- 43 | Divider | ghost: P&L -->
## Part 4. Problems worth solving

---
<!-- 44 | Framework -->
## An operational gain reaches the P&L in four ways, and fails to in one

| Path | Example | Reaches the P&L when |
|---|---|---|
| Variable cost out | Less scrap, energy, overtime, freight | Always, once finance measures it |
| Revenue protected or added | Orders kept by better delivery | Sales names the orders |
| Cash released | Lower inventory | Once, in the year stock goes down |
| Capex avoided | A line you no longer need to buy | A purchase was planned |
| Capacity freed | More hours on machines already paid for | Only if someone buys the output |

---
<!-- 45 | Detail -->
## Machines already paid for cost the same whether they run or not

- Depreciation, salaried staff and most maintenance do not move when a line runs more hours.
- So more utilization of a paid machine is worth nothing, unless the extra output is sold.
- When the market shrinks, nobody buys it.
- The highest-OEE improvement in a half-empty plant can be worth zero euros.

---
<!-- 46 | Framework -->
## What a freed hour is worth forks on one question: can the extra output be sold?

| Situation | A freed hour is worth |
|---|---|
| Sold out, demand growing | The contribution margin of the extra output |
| Spare capacity, demand flat or falling | Only the variable cost it avoids: overtime, energy, outsourcing |
| Delivery is losing orders | The contribution of the orders kept, if sales can name them |

Ask "what is your order book against demonstrated capacity?" in the first hour.

---
<!-- 47 | Detail -->
## One tonne is worth its contribution margin, never its price or its full cost

| At Polymex Lyon | Per tonne |
|---|---|
| Average selling price | €1,721 |
| Variable costs | €1,274: materials, energy, consumables, freight, variable labour |
| Contribution margin | €447, about 26% of the price |
| Full cost | €1,608: never use it to value a tonne gained or lost |

Source: Polymex Lyon plant P&L, 2025; knowledge bundle, finance/pnl-2025-lyon.

---
<!-- 48 | Detail -->
## When sales are falling, a lost sale costs more than almost any saving

- A lost tonne takes its full contribution with it: €447 at Lyon.
- The fixed costs stay, spread over fewer tonnes: every remaining tonne gets more expensive.
- In a shrinking market the lost customer is not replaced.
- At Lyon, losing one retail account of 5,160 t a year costs €2.3M of contribution: more than half of the plant's scrap bill.

---
<!-- 49 | Framework -->
## Variable cost is the lever that always reaches the P&L

| Line | Why AI can move it |
|---|---|
| Materials and scrap | 50 to 65% of revenue in compounding; scrap is resin thrown away |
| Energy | Measured by the meter, in kWh per tonne, line by line |
| Overtime and expedites | Visible in payroll and freight invoices, often a symptom of planning |
| Inventory | Cash once, and a carrying cost of 15 to 25% a year |
| Indirect work | Re-keying, checking, reporting: hours that can go to better work |

---
<!-- 50 | Detail -->
## Count every euro once

- Overtime and expedites are usually symptoms of changeovers and late plans: do not add them on top.
- Inventory releases cash once and saves carrying cost every year: never add the two.
- The capacity effect of scrap is already inside the quality rate: do not count it twice.
- Annualize a quarter only when you say so.

---
<!-- 51 | Detail -->
## In a group, start from the group's P&L and strategy, not from the loudest plant

- The CEO's question comes first: what must change in the group's numbers, by when?
- Then the market: which segments grow, which shrink, where capacity is short or idle.
- Then each plant: where its variable cost sits, how mature it is, who would sponsor the work.
- The plant with the worst KPI is often not the plant to start with.

---
<!-- 52 | Framework -->
## Choose where to start with five filters

| Filter | The question |
|---|---|
| Reaches the P&L | Does the gain show up as cost, protected revenue, cash or capex avoided? |
| Size | Is it worth at least ten times what it costs to capture? |
| Readiness | Is there data, and are there standards to build on? |
| Sponsor | Is there a plant leader who wants this and will change how decisions are made? |
| Future | Will the plant exist, at this scale, in three years? |

---
<!-- 53 | Detail -->
## Three questions to ask before any use case

1. Is the market growing or shrinking, for this plant's products?
2. Is capacity the constraint, or is demand?
3. Where does the variable cost sit, and how much of it can the plant control?

If you cannot answer all three, you are not ready to choose a problem.

---
<!-- 54 | Divider | ghost: BUNDLE -->
## Lab: the Polymex knowledge bundle

---
<!-- 55 | Detail -->
## Polymex is a 102-year-old group with four plants, and Lyon is only one of them

- Founded in Lyon in 1924; family-owned; CEO Antoine Morel is the fourth generation.
- Four plants: Lyon, Haguenau, Évreux, Tarragona. €515M of revenue in 2025, down from €612M in 2022.
- The board wants a cost program and has frozen growth capex.
- Antoine has asked us one question: where should we start?

---
<!-- 56 | Detail -->
## The bundle is the engagement's single source of truth, and it is in the Open Knowledge Format

| Folder | Content |
|---|---|
| `company/` | The group, the board memo of March 2026 |
| `plants/` | One file per plant: products, lines, people, systems, data |
| `finance/` | The 2025 P&L of the group and of each plant; capacity; capex; the bank covenant |
| `sales/` | Sales history 2019 to 2025, the 2026 budget and 2027 plan, lost and at-risk orders |
| `operations/` | The lean program and its maturity assessment by plant |
| `interviews/` | 28 interviews, from the CEO to a night-shift leader and a customer |

Download it from the cohort channel, or from `D2 AM - Polymex knowledge bundle.zip`.

---
<!-- 57 | Exercise -->
## Your brief: which plant should Polymex start with, and on which problem?

1. Read `index.md`, then split the bundle between the four of you.
2. Build the group picture: sales trend, capacity, P&L by plant, the board's constraints.
3. For each plant, apply the five filters and size the gains that reach the P&L.
4. Choose one plant and one first problem. Say why not the other three.
5. Write the one-page memo to Antoine and Laurent, the COO: answer first.

Fifty minutes. Add your findings to the bundle as concepts, with their sources.

---
<!-- 58 | Framework -->
## Split the reading by role, then put the picture together

| Role | Reads first | Delivers |
|---|---|---|
| Lead | `company/`, the CEO, COO, CFO and chair interviews | The group's constraints and the question behind the question |
| Builder | `finance/` and `sales/` | The table: plant by plant, revenue trend, utilization, contribution, variable-cost leaks |
| Verifier | `plants/`, `operations/`, the plant interviews | Readiness and sponsor, plant by plant; recomputes the Builder's top numbers |
| Storyteller | The customer, sales and works-council interviews | The memo, and the risk nobody in the group is naming |

---
<!-- 59 | Detail -->
## The memo fits on one page

| Section | Content |
|---|---|
| Governing thought | The plant, the first problem, the size, the condition |
| Why this plant | The five filters, with the numbers |
| Why not the other three | One line each, with the number that decides it |
| What it is worth | Low, base, high, in € a year; cash stated separately |
| What we do not know | The two assumptions that move the answer, and who confirms them |
| What we need from you | One decision, this week |

---
<!-- 60 | Detail -->
## Readout in four minutes, to Antoine and Laurent

1. The answer, in one sentence.
2. The number that rules out the plant Laurent would have chosen.
3. Why the extra capacity is worth nothing.
4. The first problem, its size, and how the controller will measure it.

The trainer plays Antoine. Laurent has already told him he believes in Haguenau's OEE.

---
<!-- 61 | Detail -->
## What the readouts taught us

<!-- complete live after the readouts -->
- The plant most teams chose, and the number that decided it:
- The trap most teams avoided, and the one some fell into:
- The best "why not" line:
- The question for Antoine we heard most:

---
<!-- 62 | Detail -->
## Three things to keep from this morning

1. Know which game the plant plays, and read its lean maturity before sizing anything.
2. Machines already paid for are worth nothing more running longer unless the output sells. In a shrinking market, protect sales and drive variable cost down.
3. Start from the group's P&L and strategy, then choose the plant with the five filters.

---
<!-- 63 | Detail -->
## Go further, and this afternoon

**Read**
- Eliyahu Goldratt, *The Goal*: the constraint, as a novel.
- James Womack, Daniel Jones and Daniel Roos, *The Machine That Changed the World*: where "lean" was named.
- Jeffrey Liker, *The Toyota Way*: the principles behind the tools.

**This afternoon**
- Leading an FDE project at the plant you chose: the six-phase method, the charter, governance and the gains validation protocol.
