# Day 5 morning: the full motion, the kickoff. Facilitator guide

*AI 50%: drafted by Claude from the FDE School curriculum and public information on five companies, disguised; validated by the trainer.* Trainer: Renan. 9:00 to 12:00. Deck content: `public/resources/d5-am-the-full-motion.deck.md`. Handouts: the five case packs (`public/resources/d5-am-case-1-halden-polymers.md` to `d5-am-case-5-meridian-imaging.md`) and `d5-am-the-full-motion.exercises.md` (template and timing).

**Confidentiality.** Each case is inspired by a real company, which participants may know or work for. Company, site and people names are invented; revenue and headcount are scaled (factor about 0.85) and rounded; the project, the pre-sales story and every site figure are invented for the exercise. Never confirm or deny which company a case comes from. Keep this guide away from participants.

| Case | Inspired by | Signed project |
|---|---|---|
| 1. Halden Polymers | Teknor Apex | Sequence-aware scheduling at the lead vinyl plant |
| 2. Peakline | Decathlon | Component shortages at a European bike assembly plant |
| 3. Groupe Ardent | SEB | Scrap on the coating lines of a French cookware plant |
| 4. Laboratoires Sorel | Pierre Fabre | Batch release lead time at a dermo-cosmetics plant |
| 5. Meridian Imaging | Xerox | First-time fix rate in a field service region |

## Objective

By noon every team has turned a signed contract into a kickoff an executive committee would accept: the client's strategy in their words, scope honestly reset, measures with a baseline the client computes, twelve weeks with gates and kill criteria, owners, each person's win, and what is needed from IT and the others from week 1.

## Run sheet

| Time | Block | Notes |
|---|---|---|
| 9:00 | Stand-up and brief (slides 1 to 9) | Fifteen minutes. One case per team: team n takes case n. |
| 9:15 | Reading alone | Ten minutes, silence. |
| 9:25 | What was sold, and what is true | Call at 9:55: "How many traps have you found?" Each pack has three or four. |
| 9:55 | The kickoff document | Call at 10:30: "Has your Verifier recomputed every number?" |
| 10:45 | Frozen; rehearsal | The next team reads the committee table of the case it will play (team 1 plays case 5). |
| 11:00 | Kickoffs | 8 minutes plus 4 of questions, strict. You chair each committee and play the sponsor; the next team plays the others. |
| 12:00 | Lunch | |

## Case by case: the traps, and what a strong kickoff says

### Case 1. Halden Polymers

**Traps.**
1. *The $8M in the sales email.* The contract covers one plant. Only 3 of 18 plants make vinyl, and the other two have never had their changeover data looked at. Correct it on slide 2: the group figure is a hypothesis to test after Riverside, not a commitment.
2. *Pounds and kilograms.* The run rate is in pounds per hour (2,200 lb, about 1,000 kg), the margin in dollars per kg. 30% of 2,100 MTO changeover hours is about 630 hours; at about 1,000 kg per hour and $0.60 per kg, about $380K a year at Riverside, **if the extra output sells**. A team that multiplies 2,200 by $0.60 overstates it by 2.2 times.
3. *No baseline.* Setup times are not measured; the ERP holds one standard value per line. The CFO has "never found the gain". Week 1: start measuring planned against actual setups, and the controller freezes a baseline of changeover hours per order, normalized for mix, before go-live.
4. *The CIO was never invited.* A new cloud tool needs about 4 weeks of security review. Start it in week 1 and work on exports meanwhile.

**A strong kickoff also:** uses the senior planner's retirement as the reason to capture sequencing rules with him, under his name (CEO: "no one replaced by a computer"); asks the plant manager for named planner hours; frames the gain as lead time and throughput (customers lost to a 5-day competitor); kill criterion such as "less than 15% fewer changeover hours on scheduled families by week 8".

**Committee question to ask:** CFO: "I never found a scheduling gain in my numbers. Why will this one be different?"

### Case 2. Peakline

**Traps.**
1. *The demo is not the contract.* The exco expects store stockouts to fall; the signed scope is line stops at the plant. Say so on slide 2, and say how the plant result helps store availability in the peak.
2. *400,000 bikes or 420,000 units.* The plant counts frames started; finance counts finished bikes. The 20,000 bikes parked waiting for a part are the real symptom. The controller ("show me the bikes, not the stops") needs finished bikes.
3. *The calendar.* The project starts mid-November and ends mid-February, when the peak starts. A strong plan pilots on two lines in December and January, decides at a gate before February, and freezes changes during the peak (industrial director: "not in March").
4. *Value only counts at the bottleneck.* About 1,100 stops of 40 minutes is about 730 line hours a year. Off-peak, lost hours are recovered with Saturday shifts (about €9,000 each); in the peak the plant is sold out and every bike lost is about €60 of contribution. Teams that value every stop at peak margin overstate it.
5. *Operator badges in the stop log.* Any analysis by operator goes to the works council first (HR). Use the data by line and component, not by person.

**Also:** the supplier portal belongs to group purchasing: name an owner and ask for access in week 1.

**Committee question to ask:** Supply chain director: "So the store stockouts we saw in the demo are not in the project?"

### Case 3. Groupe Ardent

**Traps.**
1. *No cameras.* The proposal sells AI visual inspection; the capex (€1.2M) was postponed. Either the committee decides on the capex now, or the 12 weeks start with what exists: process data against hand-recorded defects, and a camera business case at a gate.
2. *6.5% or 3.8%.* Two definitions: finance counts rework as scrap. Agree one definition, owned by the controller, with both lines shown (scrap about 3.8% of 25M pans at €6 is about €5.7M a year; rework about 2.7% at 30% of €6 is about €1.2M). The CFO wants "the 6.5% to go down": show both components.
3. *90 days of history.* The historian overwrites after 90 days. Week 1: ask IT to start archiving, or there is no history to learn from by week 8.
4. *The plant director leaves in four months.* The business owner must be the successor or the plant's production manager; ask HR to name them now.
5. *Not sold out.* The plant runs at 85%: the gain is cost (scrap, rework, energy in the ovens), not extra volume.

**Also:** HR's question ("if this is about cutting jobs, say it now"): answer it on slide 1 or 6, plainly; the "other" defect codes need cleaning with quality; the CIO owns any connection to line controllers.

**Committee question to ask:** HR director: "Is this about cutting jobs?"

### Case 4. Laboratoires Sorel

**Traps.**
1. *"Released automatically."* Impossible: the qualified person certifies every batch. The assistant prepares and flags; the qualified person decides. Correct it on slide 2, and invite her to own the definition of "conforming".
2. *Validation.* Any system that affects quality must be validated before use. Plan it from week 1 with quality and IT; it decides the calendar more than the model does. The CIO asks who pays: settle it at kickoff.
3. *The €9M is not EBIT.* Cutting quarantine from 18 to 10 days releases about €9M of working capital once (8/18 of €20M), cash, not a yearly profit. The CFO has told the board: help him correct it before someone else does.
4. *Where the days go.* Clean batches release in 6 days; 1 batch in 5 has a deviation that takes 12 days to close. The lever is deviation investigations and paper records (40%), not the clean batches.
5. *The reviewers.* Fifteen reviewers working Saturdays: the win is their Saturdays back and launches on time, never fewer reviewers (HR: "exhausted, not redundant").

**Committee question to ask:** Quality director: "Who releases the batch?"

### Case 5. Meridian Imaging

**Traps.**
1. *"Predictive maintenance on the whole fleet."* 40% of devices (the acquired fleet) send no telemetry. Scope the prediction to Meridian devices; for the rest, the lever is standard van stock and better diagnosis.
2. *"150 fewer technicians."* The FDE does not frame gains as headcount, and the works council must be consulted. Reframe as capacity: about 28% of 210,000 calls are repeats (about 59,000 visits at €140, about €8M a year); reaching 80% first-time fix frees about 17,000 visits (about €2.4M a year), enough to absorb the acquired fleet without hiring, plus fewer penalties (€1.1M last year). HR and the President decide on roles.
3. *Two systems, two identifiers.* The same site has two ids; first-time fix is not measured the same way at the acquired company. Week 1: one definition of first-time fix, computed by the service controller on both fleets.
4. *The integration calendar.* The CIO merges systems in 18 months. Build on exports from both, not on the future merged system; fit the gates to the integration lead's milestones.
5. *Half the repeats are "part not available".* The quickest lever is the van stock, not the model.

**Committee question to ask:** CFO Europe: "My business case is 150 fewer technicians. Where are they?"

## Grid for feedback (no marks)

| Dimension | What good looks like |
|---|---|
| Answer first | Slide 1 states the client's priority, the value at stake with its condition, and the decision asked |
| Honest scope | Every pre-sales promise the data does not support is corrected, with a reason and an alternative |
| Numbers | Units consistent, definitions agreed, one-off cash separated from yearly profit, the baseline computed by the client |
| Plan | Twelve weeks with gates and kill criteria, fitted to the client's calendar (peak season, integration, validation) |
| People | Owners named; IT and security from week 1; each committee member's win; roles left to HR and managers |
| Under questions | Concedes what it does not know and says how it will find out |

## For the 13:30 debrief

Ask each team: which trap did you find, which did you miss, and which committee member did you not convince? Then: "Across the five cases, what did pre-sales get wrong most often?" Expected: a promise beyond the signed scope, a number with the wrong unit or definition, a person who was never in the room (IT, quality, HR), and a gain framed as fewer people.
