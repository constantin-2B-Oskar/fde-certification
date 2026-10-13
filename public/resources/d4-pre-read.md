# Day 4 pre-read: The obstacles

*Optional, about a 10-minute read, for those who like to see the material before the session. The session itself assumes no preparation.*

## What to expect

Day 4 is about what stops a working system from becoming a used system.

| Block | You leave with |
|---|---|
| Morning: technical roadblocks | Ways to handle dirty data, legacy systems and integration dead ends, and a Plant Pulse that runs reliably on messy exports |
| Afternoon: human roadblocks | Ways to read resistance, use the change curve, work with champions and sponsors, and tell a sponsor they are wrong, practiced in role-plays |

After Day 1 feedback, the day also has a full section on working inside a large company: cybersecurity, how to deal with data issues, and what to do when the company does not let you use the right stack. The detailed agenda comes with the session's slides. As on Days 3 and 5, each team works on one laptop, so the team builds together for real, a change made after Day 1 feedback.

## Main terms

**Data quality**: How far the data matches what really happened on the floor. A downtime log where many stops are coded "other" is poor-quality data, even if every field is filled in.

**Missing and duplicate data**: Gaps and repeats in a data set. A forgotten changeover leaves a hole; an export loaded twice counts every stop twice.

**Legacy system**: An old system the plant still depends on, often hard to change or connect to. An old scheduling tool that only exports to a spreadsheet is a typical case.

**Integration**: Connecting your system to the plant's systems so data flows without someone copying it by hand. Reading orders from the ERP each night instead of asking a planner to email a file is an integration.

**Interface or API**: The agreed way one system lets another read or write its data. If the MES offers none, you are left with manual exports: an integration dead end.

**System of record**: The system that officially owns a piece of data; every other source is a copy. Keep the ERP as the system of record for orders and add a thin layer on top, rather than building a second order list.

**Source of truth**: The system that wins when two sources disagree, decided object by object. If the ERP and the planner's spreadsheet show different line speeds, you need to know in advance which one counts.

**Idempotent pipeline**: A data pipeline that gives the same result however many times it runs on the same input. If someone re-runs last night's load by mistake, the downtime totals do not double.

**Resistance**: The pushback people show when a change touches their work. An operator who says "it will never work here" is often protecting something real, such as their skill or their workload.

**Change curve**: The path people go through when their work changes: shock and denial, frustration and a low point, experiment, then decision and integration. Performance dips before it rises, so plan for the dip when a new planning tool goes live.

**Champion**: An internal operational person with a formal role, legitimacy and a direct line to the software teams, who carries the tools after the project team leaves. A respected shift lead who uses the tool daily is a good example.

**Sponsor**: The senior person who owns the outcome and can make decisions the project needs. A plant director who arrives with a culprit already in mind is still your sponsor, and you have to move them with evidence.

**Works council**: The body of employee representatives that must be consulted on changes affecting staff. In France it is consulted before any tool that could monitor individual workers, so never put a name on a chart.

## The ideas to hold on to

- Most industrial AI deployments stall on data and people, not on the model.
- Expect plant data to be dirty, and build checks into the pipeline rather than cleaning it once by hand.
- Decide one source of truth per data object before you build, or two systems will argue in front of the CFO.
- People go through stages when their work changes, and they need different help at each stage.
- A tool survives only if someone inside the plant owns it after you leave.

## Where this day fits in the week

Day 1 set out the role and how to read people. Day 2 covered finding a problem worth solving and running the project. Day 3 gave you the plant systems and AI tools. Day 4 tests all of that against what usually goes wrong: data that does not behave and people who do not follow. Day 5 asks you to run the full motion on two real cases, where both kinds of obstacle meet.

## Questions to think about before the session

1. Think of a project you worked on that stalled. Was the real blocker technical, human, or both, and when did you first see it?
2. Think of a person who resisted a change you were part of. What were they protecting, and what would have helped them move?
3. In your own work, which data do people trust least, and who quietly fixes it by hand before it gets used?

## If you have 10 more minutes

On the Resources page, open the Day 1 afternoon deck, "Consulting skills 101", and read the part on the curve of change. Then skim the Day 3 morning deck, "Plant systems and data", in particular the section on the source of truth.
