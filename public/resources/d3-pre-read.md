# Day 3 pre-read: The technology

*Optional, about a 10-minute read, for those who like to see the material before the session. The session itself assumes no preparation.*

## What to expect

| Time | Block | You leave with |
|---|---|---|
| 9:00 | Stand-up | Yesterday's lesson, today's goal, one blocker |
| 9:10 | What an AI system is really made of | Ontology, kinds of models, tactics, decision models, and when to use what |
| 10:00 | Exercise 1: the stated process and the true process | The as-is map and the target architecture for planning at Lyon |
| 11:10 | Defining what good looks like | Measures that matter, baselines, targets, gains in euros |
| 11:30 | Exercise 2: what good looks like | A five-line scorecard for planning at Lyon |
| 13:30 | Interacting with your platform | What surrounds the model, and which tools you never write |
| 14:00 | Exercise 3: put the platform tools into your architecture | A planning system that runs, with permissions and tests |
| 15:20 | From the first build to deployment | Mini-apps, the first user, the improvement loop, five whys |
| 15:50 | Exercise 4: run the first full version with Corinne | New rules, found and validated with the planner, live |
| 16:55 | Demos, then close | Three minutes per team, on your app |

Nicolas runs the day. The problem is planning at the Lyon plant: the procedure says the plan is weekly and frozen, and Corinne, the planner, says she rewrites it every day. In the morning you map how planning really works, from interviews and data, and design the target system before anyone builds it. In the afternoon you build that system from the tools of a platform, then run it with Corinne, played by the trainer. Group work uses one laptop per team.

If language models and agents are new to you, start with the 30-minute deck "LLMs and agentic systems in 30 minutes" on the Resources page: it covers the basics the day builds on.

## Main terms

**Language model (LLM)**: A model that writes text one small piece (a token) at a time, from everything in its context. Its output always sounds right; it is right only when its context and its tools make it so.

**Decision model**: A model that picks one answer from options you define, with a probability, for example "is this email a date change, a quantity change or a rush order?". It cannot answer outside your options.

**Tool**: A function in your own code that a model can ask to run. The model only asks; the code runs it and checks the result.

**Agent**: A model that chooses its own next step in a loop: plan, act, observe. Most real agentic systems are a few model calls inside a lot of tools and ordinary code.

**Ontology**: The objects a plant reasons with (order, product, family, line, rule, event, person), how they link, and the rules that bind them, named once. It is the shared vocabulary of the people, the code and the model, and it says which system owns each fact.

**Expert system, or rules engine**: Code that applies known rules the same way every time. Each rule has an id, a source, an owner and a status, so a planner or a controller can read it. Nobody can audit a prompt with forty rules inside.

**Solver**: Mathematical optimization. It finds the best sequence among many combinations under hard rules, and proves it is feasible. A language model is a poor sequencer.

**Stated process and true process**: The stated process is what the procedure says. The true process is what people really do, found from interviews and computed from data. The procedure is a hypothesis; the change log is the evidence.

**Value stream map of information**: A map of every step where a plan is created, changed, copied or used, with its inputs and outputs, who or what decides (a person is an algorithm too), its delay, and how often it loops.

**Human gate**: A step where a named person must decide, such as publishing a plan or validating a rule. Put a person where a decision needs an owner, not where the code is weak.

**Permissions**: Who may do what: an identity for every person, agent and service, the least each one needs, human gates, a kill switch. An instruction hidden in an email is stopped by these layers, not by a better prompt.

**Platform**: The tools that surround every model call and that you compose instead of rewriting on site: solvers, rules engine, permissions, audit, connectors, model gateway.

**Five whys**: Asking why, without suggesting the answer, until the answer is a fact about the plant that will still hold next week and has an owner. Every disagreement with the planner ends as a rule, a data fix, or a decision that it is not a rule.

**Outcome, driver, adoption, guardrail**: The three levels of a scorecard, plus what must not get worse. Outcome is what the customer sees; driver is what moves it and you control; adoption is whether people use the system.

**Baseline, best demonstrated, entitlement, target**: Where the plant is today, its best recent week, what a perfect plan would give on the same orders, and the number you commit to, with a date and an owner, in between.

## The ideas to hold on to

- An AI system is mostly code, rules and people. The model is the smallest part.
- Map the true process with data before you design anything. The procedure is a hypothesis.
- Choose one component per step by its nature: language to a model, known rules to a rules engine, combinations to a solver, trade-offs to a named person.
- Good is what the client would notice, not what the system does. At most five measures, each with a number, a date and an owner.
- Compose the platform; your code is the architecture and the plant. And every disagreement with the planner is data.

## Where this day fits in the week

Day 1 set out the FDE role and gave you Plant Pulse, a dashboard on Polymex shift logs. Day 2 chose where to start in the Polymex group and wrote the project charter. Day 3 designs and builds the first planning system for Lyon, and runs it with the planner. Day 4 puts it through what usually goes wrong, technical and human, and takes it to the group's other plants. Day 5 applies the toolkit to two real, disguised engagements.

## Questions to think about before the session

1. In a process you know, how different is what the procedure says from what people really do? How would you prove it with data?
2. Which decision in your work would you never hand to a machine, and why: because it needs an owner, or because the machine is not good enough yet?
3. When an expert overrides a system, how do you tell a real rule from a one-off preference?

## If you have 10 more minutes

See the Day 3 material on the Resources page: "LLMs and agentic systems in 30 minutes", then the morning deck, "From the stated process to the target architecture".
