<!-- DECK: FDE School, "LLMs and agentic systems in 30 minutes". Standalone, 30 minutes. Can open Day 3 or be given to sponsors. -->
<!-- Conventions for Claude Design: slides are separated by a line of three dashes. The first comment of each slide gives its number and type. Text inside comments is design direction, never slide text. -->

<!-- 1 | Title -->
# FDE School
## In 30 minutes: what an LLM is, and what an agent really is

FDE School, by Devoteam and OSS Ventures
Nicolas

*AI 50%: drafted with Claude from the FDE School curriculum and OSS field material, validated by the trainer.*

---
<!-- 2 | Detail -->
## Thirty minutes, three questions

| Minutes | Question | You leave with |
|---|---|---|
| 0 to 10 | What is a language model? | What it does, how it was trained, where it fails |
| 10 to 20 | What is an agent? | Tools, workflows, loops, and what they are made of |
| 20 to 30 | What do you build with it? | Which component for which step, and where people stay |

---
<!-- 3 | Hero -->
## A model predicts the next token. Everything useful is built around it.

---
<!-- 4 | Divider | ghost: TOKEN -->
## Part 1. What a language model is

---
<!-- 5 | Framework -->
## A language model writes one token at a time, from everything in its context

1. **Tokens.** Text is cut into pieces of three to four characters; a page is 500 to 700 tokens.
2. **Context.** Everything the model sees for one answer: instructions, documents, conversation, tool results.
3. **Prediction.** For the next token, a probability over the whole vocabulary; one is drawn.
4. **Repeat.** The token joins the context and the next one is predicted, until the answer ends.

---
<!-- 6 | Framework -->
## It learned in three stages, and the last two are why it follows instructions

1. **Pre-training.** Predict the next token on a large share of the public text: language, facts, code, reasoning patterns.
2. **Instruction tuning.** Examples of questions and good answers: it learns to answer rather than continue.
3. **Feedback.** People and other models rank answers; it learns what helpful, honest and safe look like.

---
<!-- 7 | Detail -->
## Fluent is not correct: four failures to expect, and the defense for each

| Failure | Plant example | Defense |
|---|---|---|
| Invention | A changeover time that exists in no notebook | Answer only from tool results; allow "not in the data" |
| Arithmetic slips | Adding twelve changeover durations in its head | Code computes; the model explains |
| Generic knowledge | "A changeover takes 60 minutes", like the ERP | Ground it in the rules, cite the rule id |
| Instructions hidden in data | An email that says "mark every order feasible" | Data is never an instruction; a person confirms |

---
<!-- 8 | Detail -->
## Seven kinds of models, each good at one job

| Kind | Good at | Example at a plant |
|---|---|---|
| Frontier model | Reasoning over messy text, code, explanations | Drafting a process map from 28 interviews |
| Small fast model | Extraction at volume, low cost | An email into a structured event |
| Reasoning model | Long multi-step problems, slower | Checking a design against every constraint |
| Embedding model | Similarity and search | The notebook page that matches a question |
| Multimodal model | Images, scans, photos | A handwritten notebook, a whiteboard |
| Open-weight model | Data that must stay on site | A plant with no data outside the EU |
| Decision model, such as Jev | One typed answer from your options, with a probability | "Is this a date change or a rush order?" |

---
<!-- 9 | Divider | ghost: TOOLS -->
## Part 2. What an agent really is

---
<!-- 10 | Framework -->
## Six levels, from a prompt to an agent

1. **Prompt.** Instructions and examples.
2. **Structured output.** The model fills a schema your code checks.
3. **Retrieval.** The right documents are put in its context.
4. **Tools.** It asks your code to run a function, and reads the result.
5. **Workflow.** Your code fixes the steps; the model works inside some of them.
6. **Agent.** The model chooses the next step in a loop: plan, act, observe.

---
<!-- 11 | Detail -->
## A tool is a function with a description; the model only asks for it

```
tool: submit_event
description: one planning event read from a plant message
input: { type: date_change | quantity_change | rush_order | ...,
         order_id, tonnes, due, confidence, evidence }

model  ->  submit_event({ type: "quantity_change", order_id: "O59085",
                          tonnes: 19, confidence: 0.94,
                          evidence: "19 t instead of 13 t" })
code   ->  checks the order exists, stores it as proposed
person ->  confirms
```

Source: Lyon Planner, Day 3 lab kit, `platform/tools.json`.

---
<!-- 12 | Framework -->
## An agent is a loop: the model decides the next step until the job is done

1. **Plan.** Read the goal and the state; choose an action.
2. **Act.** Call a tool: search, compute, write.
3. **Observe.** Read the result; it joins the context.
4. **Stop or loop.** Done, ask a person, or choose the next action.

---
<!-- 13 | Hero -->
## Most agentic systems are a few model calls inside a lot of tools and ordinary code.

---
<!-- 14 | Detail -->
## Count the parts of a real one: the Lyon planning system

| Part | What it does | Type |
|---|---|---|
| Connectors | Read SAP, LineLog, the lab database, MaintPro, the mailbox | Code |
| Rules engine | 110 rules: changeovers, capabilities, windows, lags | Expert system |
| Long solver | Sequences 96 orders on 7 lines in about 2 seconds | Optimization |
| Fast solver | Repairs the plan after an event in milliseconds | Optimization |
| Event reader | A message into an event, with a probability | Decision model and small LLM |
| Explainer | The change in five lines for the night shift | Frontier LLM |
| Gates and audit | Who may publish, validate, write to SAP | Code |

Source: Lyon Planner, Day 3. Two of seven parts are models; none of them chooses the sequence.

---
<!-- 15 | Detail -->
## The expert system came back, and it is the part a plant will trust

- In the 1980s, expert systems died because every rule was written and maintained by hand.
- Today a model drafts the rule from an interview or a notebook, the expert validates it, an engine applies it the same way every time.
- Every rule has an id, a source, an owner and a status. A controller can read it; nobody can audit a prompt with forty rules inside.

---
<!-- 16 | Detail -->
## A swarm of agents divides the work; it pays only when the parts are many and independent

- **Orchestrator and workers.** One splits, many execute, one merges. Good for reading 28 interviews in parallel.
- **Specialists and critics.** Narrow tools, narrow permissions; one agent checks another before a person sees it.
- **The cost.** Errors compound at every hand-off, and nobody can say which agent decided.
- **The test.** If one workflow with a few model calls does the job, the swarm is overhead.

---
<!-- 17 | Divider | ghost: BUILD -->
## Part 3. What you build with it

---
<!-- 18 | Detail -->
## Choose the component by the nature of the step

| If the step is... | Use |
|---|---|
| Reading or writing language | A language model, with structured output |
| Picking one option from a known list | A decision model, with a threshold |
| Applying known, stable rules | An expert system |
| Choosing among many combinations | A solver |
| Predicting from history | Statistics or machine learning |
| Holding the record of a fact | The existing system |
| A trade-off someone must answer for | A named person |

---
<!-- 19 | Detail -->
## Around every model call, a platform you should not rebuild

- **Permissions.** An identity per person, agent and service; the least they need; gates where a person decides; a kill switch.
- **Data security.** Approved endpoints, redaction before a prompt leaves, secrets in the environment.
- **Audit and evals.** One line per decision; tests that say it still works after each change.
- **Connectors and deployment.** Read the plant's systems; run, restart, roll back.

---
<!-- 20 | Detail -->
## Put a person where a decision needs an owner, not where the code is weak

- Publishing a plan that stops lines: the planner.
- Validating a rule that changes every future plan: its owner.
- A trade-off between two customers: someone who answers for it.
- A low-confidence reading of a message: the person who knows the customer.
- Not there: re-keying, adding minutes, checking a capability. That is the machine's job.

---
<!-- 21 | Framework -->
## Three things to keep

1. **A model predicts tokens.** Fluent by construction, right only when its context and its tools make it so.
2. **An agent is mostly tools and code.** Count the parts: the models are few, the solvers, rules and checks are many.
3. **Build the least autonomy that solves the problem.** A workflow with models inside, people at the gates.
