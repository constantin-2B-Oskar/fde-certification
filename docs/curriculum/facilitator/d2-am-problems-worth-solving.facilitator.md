# Day 2 morning: how plants work, and which problem to solve. Facilitator guide

*AI 50%: drafted by Claude from the FDE School curriculum and OSS Ventures' internal training "How manufacturing works", validated by the trainer.* Trainer: Renan. 9:00 to 12:00. Deck: `D2 AM - Deck - Problems worth solving.dc.html` (63 slides; content in `D2 AM - Deck content.md`). Handout: `D2 AM - Exercises.md`. Lab material: the folder `D2 AM - Polymex knowledge bundle/` (49 files, Open Knowledge Format) and the same content as `D2 AM - Polymex knowledge bundle.zip`. The earlier version of this session (P&L read and leak register) is in `_archive/`.

## Objectives

By noon every participant can:

1. Say which type of manufacturing a plant runs (process or discrete, layout, make-to-stock or make-to-order) and which game it plays (cost, delivery, innovation).
2. Use the lean vocabulary: value added, the three brakes, the eight wastes, the 5M, the lean house, standards, performance management, problem solving.
3. Read a plant's lean maturity in an hour and explain why it is a readiness test for AI, and what AI changes in scale.
4. Separate the gains that reach the P&L (variable cost, protected revenue, cash, capex avoided) from freed capacity nobody buys.
5. Choose where to start in a multi-plant group with the five filters, from a single source of truth.

## The story of the morning

Polymex is no longer one plant. It is a 102-year-old family group with four plants and three years of falling sales. Its CEO asks one question: where should we start? The naive answer is Haguenau, which has the worst OEE in the group. The right answer is Lyon, because:

- **Sales are down, so every sale lost is very costly.** Lyon is the only plant where a growing segment (retail) is being lost for delivery reasons: €5.05M of revenue lost in 2025 and Q1 2026, and Codra's 5,160 t (€9.0M revenue, €2.3M contribution) decided in September.
- **Capex is fixed, so more use of machines already paid for is worth nothing.** The group has 69 kt of idle capacity; growth capex is frozen. Haguenau's OEE gap is mostly lines with no orders.
- **Cost must come down, and AI can drive it down where the variable cost and the data are.** Lyon has the biggest controllable variable-cost leak (scrap €3.9M a year, almost half of it start-up material after changeovers; overtime €0.9M; 78 days of inventory), daily data since 2019, and a sponsor.

## Two things not to reveal today

1. **Corinne's overrides help.** Still hidden until Day 4. The bundle gives her side ("I rewrite it every day, otherwise nothing would ship") and Hervé's and Laurent's ("a stronger planner"). Do not arbitrate.
2. **What the footprint review means for Lyon.** The bundle states that a footprint review goes to the board in June. It does not say which site is at risk. On Day 4, Hervé's secret is that Laurent has told him privately that Lyon's volume could move to Haguenau's empty capacity if Lyon's trajectory does not turn by June. Today, reward teams that write "what does the footprint review mean for Lyon?" as an open question; do not answer it.

## Before the session

- Post the bundle zip in the cohort channel at 8:45.
- Print one A3 per team with `finance/pnl-2025-group.md`, `finance/capacity-2025.md` and `sales/sales-history-2019-2025.md`.
- Whiteboard: draw the four paths to the P&L (slide 44) before 10:25 and leave it up all day.

## Run sheet

| Time | Slides | Block | Notes |
|---|---|---|---|
| 9:00 | | Stand-up | Ten minutes. Each team: what we learned yesterday, today's goal, one blocker. Roles rotate. |
| 9:10 | 1 to 14 | Types of manufacturing | 20 minutes. |
| 9:30 | 15 to 32 | Lean and continuous improvement | 25 minutes, including the spot-the-waste exercise (slides 22 and 23, five minutes). |
| 9:55 | 33 to 42 | Lean measures maturity; AI changes the scale | 20 minutes. |
| 10:15 | | Break | Ten minutes. |
| 10:25 | 43 to 53 | Problems worth solving | 20 minutes. |
| 10:45 | 54 to 59 | Lab brief | Five minutes; teams download the bundle. |
| 10:50 | | Lab | 45 minutes. Calls at 11:05 (group picture done?), 11:20 (plant chosen?), 11:30 (memo frozen). |
| 11:35 | 60 to 61 | Readouts | Four minutes per team, five teams; fill slide 61 live. |
| 11:55 | 62 to 63 | Close | Five minutes. |

If you are late, compress slides 10, 11, 13, 26, 27, 29 and 31 (the lean house details are in the handout). Never cut the lab below 40 minutes: it is the bulk of the morning.

## Slide notes

### Types of manufacturing (slides 1 to 14)

**Slide 2.** The sentence of the day. Write it on the whiteboard.

**Slides 7 to 9.** Ask the room to place three plants they know: process or discrete, layout, make-to-stock or make-to-order. Polymex Lyon: process, batch on continuous lines, mostly make-to-stock, moving toward make-to-order because of retail.

**Slide 12.** The most useful slide of this part for an FDE. Ask: "Which game is Haguenau playing, and which game is Lyon being pushed into?" Haguenau: cost (automotive, price down 3% a year). Lyon: retail pushes it toward delivery.

**Slide 13.** Ask who holds the power at Polymex Lyon. Production and planning: Corinne.

### Lean and continuous improvement (slides 15 to 32)

The source is OSS Ventures' internal training "How manufacturing works". Participants with a lean background will know most of it: ask them to give the examples.

**Slide 16.** Two minutes, no more. Collect "Toyota, after the war, little capital" and move on.

**Slide 18.** These are automotive benchmarks; say so.

**Slides 22 and 23.** Three minutes in pairs, then reveal. The point: six of eight wastes in one short sequence, visible only if you watch the work.

**Slide 28.** Link to Day 1: SAP's 60-minute changeover is a standard nobody believes, so nobody sees the four-hour changeover as a gap.

**Slide 31.** Ask who has done Six Sigma or TPM. They are allies in the room.

### Lean measures maturity; AI changes the scale (slides 33 to 42)

**Slide 34.** The key idea of the first hour: lean maturity is the fastest read of a plant, and a readiness test. In the lab, the bundle holds the Polymex maturity scores; teams should use them.

**Slide 36.** Do not oversell. Lean works; it hits a ceiling because analysis is done by people, by hand, by sampling, weekly.

**Slide 37.** Pause on it. Then slide 39: each row is a lean tool done at the scale of the whole plant, every day.

**Slide 40.** The balance: AI amplifies the operating system, it does not replace it. A plant at level 1 must first get standards and data (Tarragona in the lab).

**Slide 42.** OSS's field observation over more than 180 factories. Do not quote percentages.

### Problems worth solving (slides 43 to 53)

**Slide 44.** Draw it. Ask the room to give a Polymex example for each row before the lab.

**Slide 45.** The central message of the morning: increasing the use of machines already paid for does not create a gain unless more is sold. Say it plainly, then: "In a group with 69 kt of idle capacity and frozen capex, what is a freed hour worth?" Avoided variable cost only.

**Slide 48.** The other central message: when sales fall, a lost sale is very costly. The contribution goes, the fixed costs stay, and the customer is not replaced. Codra's 5,160 t = €2.3M of contribution = more than half of Lyon's scrap bill.

**Slide 49.** Cost-out is what always reaches the P&L, and where AI has the most room: materials are 60% of revenue at Polymex.

**Slides 51 to 53.** The high-level thinking: start from the group's P&L and strategy, then the market, then each plant. The five filters on slide 52 are the grid of the lab.

### Lab brief (slides 54 to 59)

**Slide 55.** Polymex is a 102-year-old group. The plant they worked on yesterday is Lyon, one of four.

**Slide 56.** The bundle is the engagement's single source of truth, in the Open Knowledge Format, as on Day 1 afternoon. Teams add their findings as new concepts with sources.

**Slide 58.** Splitting the reading by role is how they finish in 45 minutes. The Verifier recomputes the Builder's top three numbers.

## Lab answer key

### The group picture

| Item | Value | Source |
|---|---|---|
| Revenue | €612M in 2022, €515M in 2025 (−16%); budget €500M in 2026, plan €496M in 2027 | `sales/sales-history-2019-2025`, `sales/sales-plan-2026-2027` |
| Volume | 270 kt in 2022, 245 kt in 2025 (−9%) | Same |
| Segments | Automotive −8% a year; packaging flat; retail +20% a year and only at Lyon | Same; interviews 04, 19 |
| Capacity | 314 kt demonstrated, 245 kt used: 78%, 69 kt idle | `finance/capacity-2025` |
| Capex | Growth capex frozen 2026 and 2027; only maintenance and the Évreux line | `finance/capex-plan-2026-2027` |
| Covenant | 3.15x in 2025; 3.49x on the 2026 budget; limit 3.5x. €1M of EBITDA ≈ 0.08x | `finance/bank-covenant` |
| Cost program | €15M EBITDA by end 2027: purchasing €6M (planned), overheads €3M (planned), operations €6M (no plan, no owner) | `company/board-memo-2026-03`, interview 02 |

The question behind the question: Antoine needs about €6M of operations EBITDA that the controllers will sign, without capex, without more tonnes, and before the covenant test on 31 December.

### The five filters, plant by plant

| Filter | Lyon | Haguenau | Évreux | Tarragona |
|---|---|---|---|---|
| Reaches the P&L | Yes: scrap, overtime, inventory, and protected retail sales | Little: capacity worth €0 (no orders); some scrap and energy | Capacity worth something until September, then small cost-out | Yes: energy and scrap |
| Size, base, € a year | About €3.2M of cost and carrying cost, plus €2.3M of contribution protected; €7.8M of cash once | About €1.2M | About €0.4M once, then €0.35M a year | About €2.0M |
| Readiness | Daily LineLog data since 2019, SAP, PI on 3 lines; lean 2.0 | Excellent data (MES); lean 3.3 | Good data (MES); lean 2.4 | Paper logs, one meter; lean 1.2 |
| Sponsor | Hervé asks for it | Thierry refuses this year | Claire keen, but her problem ends in September | Jordi keen, asks for six months |
| Future | Footprint review open; the cost and delivery work is what strengthens Lyon's case | Footprint review open; the empty capacity is the issue | Secure, growing | Secure, commodity margin |

### Sizing, base case (show the arithmetic; ranges matter more than the point)

**Lyon.**
- Scrap: 4.2% × €89.2M = €3.75M of material, plus €0.15M disposal: €3.9M a year. About 45% is start-up material after changeovers (interview 18). Addressable 30% (20 to 40%): €1.2M a year (€0.8M to €1.6M).
- Overtime premium €0.9M, symptom of late plans and changeovers: 30% avoidable, €0.3M. Count it once.
- Energy €6.8M: 5%, €0.3M.
- Inventory: (78 − 55) / 365 × €123.8M ≈ €7.8M of cash once, and 18% carrying ≈ €1.4M a year. Never added together.
- Sales protected: Codra's 5,160 t × €447 = €2.3M of contribution a year, decided in September; conditions given by the customer: above 95% on time and seven days of lead time for three months (interview 27).
- Total: about €3.2M a year of cost and carrying cost, plus €2.3M a year of contribution protected, plus €7.8M of cash. Against the €6M operations target, Lyon alone covers most of it.

**Haguenau.** Raising OEE from 51% to 65% "frees 15,000 tonnes" (Laurent, interview 03) but the 51% is on calendar time (79% on planned time), there are no orders (interviews 22, 23), and the depreciation of H5 does not move: €0. Scrap 2.4% × €99.1M = €2.4M, 30% = €0.7M; energy 5% of €8.9M = €0.45M. About €1.2M, with no sponsor.

**Évreux.** Sold out until September: freeing about 5% of capacity for four to five months ≈ 0.25 kt × €1,680 ≈ €0.4M, once. After September: scrap 1.8% × €31.0M = €0.56M, 30% = €0.17M; overtime €0.6M, 30% = €0.18M. About €0.35M a year. Profitable plant, problem solved by capex.

**Tarragona.** Scrap 2.9% × €91.0M = €2.6M, 30% = €0.8M; energy €11.9M at 830 kWh per tonne against 640 at Lyon, 10% = €1.2M. About €2.0M a year, but the numbers are estimates from paper and one meter. The right move is wave 2: sub-meters per line (€40K, already budgeted) and digital shift logs now, so the plant is ready in six months.

### The memo we expect (model)

"Start at Lyon, on changeovers and delivery. In a group that sells less every year and has 69 kt of idle capacity, the gains that reach the P&L are lower variable cost and sales we stop losing. Lyon has both: €3.9M a year of scrap, almost half of it start-up material after changeovers, €0.9M of overtime, 78 days of inventory, and €9.0M of retail revenue (€2.3M of contribution) that Codra decides in September on delivery. Base case: about €3.2M a year of cost, €2.3M of contribution protected and €7.8M of cash, with daily data since 2019 and a sponsor who asks for it. Not Haguenau: its 51% OEE is on calendar time and extra hours earn nothing without orders. Not Évreux: sold out, but line 7 solves it in September. Not Tarragona yet: real energy and scrap leaks, but no data; start sub-metering and digital logs now for a second wave. We need one decision this week: Julien defines the baseline with us, and Stéphane confirms Codra's conditions in writing."

### Traps to name in the debrief

- Choosing Haguenau for its OEE: the 51% is on calendar time; the hours have no buyers.
- Valuing freed capacity at €447 a tonne in a group with 69 kt idle.
- Taking Valérie's "€12M lost because the plants do not deliver" at face value: the file says €5.05M at Lyon for delivery and €1.7M at Évreux for capacity; the rest is price and programs.
- Adding inventory cash to the yearly savings.
- Counting overtime and scrap's capacity effect on top of the changeover gain.
- Proposing headcount reductions: the group has never made a collective layoff and labour is fixed in the short term (interview 08). Frame gains as cost, sales and cash.

## Readouts (11:35)

You play Antoine. After each team, ask one of these:

1. "Laurent says Haguenau is our worst plant. Why is he wrong?"
2. "Which of your numbers would Mireille refuse, and why?"
3. "What happens to your case if Codra leaves anyway?"
4. "What do you need from me this week?"

Reward teams that say what they do not know, and who confirms it.

## Close (11:55)

Slide 62, then the card: "one thing I would do differently on a real site". Tell teams that this afternoon's charter is for the plant they chose; most will have chosen Lyon, and the afternoon's material assumes it. A team that chose Tarragona with a strong data-first argument may write its charter for Tarragona's wave 2.

## Trainer retro, after the day

Which team chose by KPI rather than by P&L? Pair its Lead with a strong Verifier this afternoon.
