# Day 3 pre-read: The technology

*Optional, about a 10-minute read, for those who like to see the material before the session. The session itself assumes no preparation.*

## What to expect

| Time | Block | You leave with |
|---|---|---|
| 9:00 | Stand-up | Yesterday's charter, one line per team |
| 9:10 | The systems of a plant, then source of truth | ISA-95 levels, the families of systems, which system wins for each data object |
| 10:00 | Exercise 1 | The Polymex systems and data-flow map |
| 10:45 | Integration and security | Integration patterns, the IT/OT boundary, secrets |
| 11:05 | Exercise 2, then demos | The access plan and the request to Nadia, the IT manager |
| 13:30 | From tokens to agents | What a model does, and what it cannot do |
| 14:00 | Grounding and evals | Where the model gets its facts, and how you know it works |
| 14:40 | Lab: Plant Pulse v1 | A checker, a grounded assistant, an eval harness |
| 16:30 | Demos with holdout questions | Feedback, and the questions you did not see |
| 17:15 | Close | Three things to keep |

Nicolas runs the day. The morning covers where plant data lives and how to get access to it safely. The afternoon covers how AI models work and how to make them right about one plant, then a 90-minute build lab. From today, group work uses one laptop per team, so the team works together for real.

## Main terms

**ISA-95**: A standard way to describe a plant's systems in five levels, from sensors and machine controllers at the bottom (levels 0 to 2) to manufacturing operations such as the MES (level 3) and business planning such as the ERP (level 4).

**ERP**: Enterprise resource planning, the core business system for orders, stock and costs. At Polymex it holds one 60-minute changeover for every product, which is not what happens on the floor.

**MES or shift logger**: The system that records what really happened on the line: output, scrap, stops and changeovers. At Polymex, operators type this into a shift logger at the end of each shift.

**SCADA and historian**: SCADA is the operator's screens and alarms. The historian stores machine signals, such as melt temperature, second by second.

**Source of truth**: The system that wins for a given piece of data. Name one per data object, or two systems will argue in front of the CFO.

**Tacit knowledge**: Rules and workarounds that live in heads and spreadsheets, such as Corinne's changeover rules at Polymex. About 40% of the data an industrial agent needs is in no system at all.

**Ontology**: A map of the types of things the plant reasons with (product family, machine, changeover rule, order) and how they relate. Real items, such as machine M01, are the instances. Gaps in it show where a deployment will fail.

**Access ladder**: Five ways to get data, from the least to the most invasive: a manual export, a nightly file drop, read-only access, a live stream, and writing back with a human approving. You earn each rung with a result.

**IT/OT boundary**: The separation between office IT and the network that runs the machines (operational technology). It exists for safety: your software never changes a machine setting.

**Language model (LLM)**: A model that writes text by predicting the next small piece, called a token. Its output always sounds plausible, but it is only true if the information it was given makes it so.

**Context**: Everything the model sees for one answer: instructions, documents, the conversation and tool results. What is not in its training or its context does not exist for the model.

**Retrieval**: Fetching relevant documents into the model's context. It works well for manuals and interview notes, poorly for tables and exceptions.

**Tools**: Functions in your own code that the model can call, for example to look up a changeover time. The model chooses the tool; the code owns the facts.

**Agent**: A model that decides its own next step in a loop: plan, act, observe. Most plant use cases need fixed steps with a model inside.

**Rules file**: A structured list of the plant's real rules, each with an id, a source and the name of the expert who validated it. It is co-owned with the expert, or it dies with the project.

**Evals**: A list of questions with expected answers, run on every change, including questions the assistant should refuse ("not in the data"). A holdout is a set you never tune on.

## The ideas to hold on to

- The data you need is spread across several systems, a few spreadsheets and people's heads, and your architecture needs a place for the part that is in heads.
- Name one source of truth per data object, written down and agreed.
- Climb the access ladder one rung at a time, earn each rung with a result, and show IT who will own the system after you leave.
- Code owns the facts and the arithmetic; the model chooses tools and explains.
- Evals with refusals and a holdout, run on every change, are what turn a demo into a system.

## Where this day fits in the week

Day 1 set out the FDE role and gave you Plant Pulse v0, a dashboard on Polymex shift logs. Day 2 priced the biggest leaks in euros and produced a project charter. Day 3 adds a map of where the data lives, a plan to access it, and Plant Pulse v1, an assistant that checks a schedule against the real changeover rules. Day 4 tests it on dirty exports and with the people who must adopt it. Day 5 applies the toolkit to two real, disguised engagements.

## Questions to think about before the session

1. In a plant or business you know, which number do finance and operators each trust, and do they come from the same system?
2. Where does an important rule in your own work live: in a system, a spreadsheet, or one person's head? What happens when that person is away?
3. When you used an AI tool for work, how did you check its answer, and would that check hold up for a decision that costs money?

## If you have 10 more minutes

See the Day 3 decks on the Resources page: "Plant systems and data" for the morning and "AI fundamentals and the build lab" for the afternoon.
