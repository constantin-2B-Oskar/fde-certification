<!-- DECK: FDE School, Day 1 afternoon, "Consulting skills 101". 122 slides, 13:30 to 17:30. Trainer: Renan. -->
<!-- Conventions for Claude Design: slides are separated by a line of three dashes. The first comment of each slide gives its number and type. Text inside comments is design direction, never slide text. Identity: OSS Ventures design system. Ink #0D0D0D, paper #FDFDFD, flame #FD594F as the single accent; Fjalla One uppercase titles, Inter body, Archivo labels, Geist Mono for sources and figures; brand photography only. Rendered deck: "D1 PM - Deck - Consulting skills 101.dc.html". -->

<!-- 1 | Title -->
# FDE School
## Day 1 afternoon: think like a partner, speak like one

Consulting skills 101: structure the problem, structure the message, read and move people

FDE School, by Devoteam and OSS Ventures
Renan Devillières

*AI 50%: drafted with Claude from the FDE School curriculum, validated by the trainer.*
---
<!-- 2 | Detail -->
## This afternoon: structure the problem and the message, then learn to read and move people

| Time | Block | Exercise |
|---|---|---|
| 13:30 | Why an engineer needs these skills | |
| 13:35 | Structure the problem | 1. From Hervé's complaint to a problem worth testing |
| 14:25 | Structure the message | 2. A memo and a six-slide storyline for Hervé |
| 15:12 | The six plant roles, then a break | |
| 15:37 | Read people | A listening drill in pairs |
| 15:49 | Understand behaviours | 3. One message, four plant roles |
| 16:06 | Communicate, and one source of truth | Drill: the first five concepts of the bundle |
| 16:26 | The curve of change, the interests of people | |
| 16:38 | Design the target system | 4. Who must change at Polymex, and who sponsors them |
| 16:56 | Sequence a difficult message | 5. Plan the sequence, then brief Hervé live |
| 17:18 | Close | |
---
<!-- 3 | Detail -->
## By 17:30 you will frame, write, read people and plan who hears what, in which order

- Turn a vague complaint into a testable problem with a hypothesis tree that carries its own tests.
- Write an answer-first memo and a storyline whose titles alone tell the story.
- Know what each plant role is measured on, knows and fears: director, planner, operator, maintenance, quality, controller.
- Read what a person is measured on, what they fear and how they prefer to take in information.
- Know where each person sits on the curve of change, and what the system does to their job.
- Keep one source of truth for the engagement, in the Open Knowledge Format, with every email, file, discussion and recording.
- Design the target system of a change: who must change, who sponsors them, who helps.
- Sequence a difficult message so that nobody hears news about their own job second.
---
<!-- 4 | Hero -->
## An FDE is judged on decisions other people take.
<!-- full-bleed ink; one line underneath in steel: "The code is necessary. It is never sufficient." -->
---
<!-- 5 | Divider -->
## Part 1. Structure the problem
---
<!-- 6 | Framework -->
## A complaint is not a problem: climb five rungs before you touch a tool

1. **Complaint.** What they said. "The planning is always wrong."
2. **Observable symptom.** What you could film. The schedule is rewritten daily; expedites jump the queue.
3. **Quantified gap.** Metric, current, target, trend. Plan adherence 54% a week, against 85% needed.
4. **Candidate causes.** The hypothesis tree.
5. **Problem statement and kill test.** One falsifiable sentence, and the evidence that would prove it solved.
<!-- a ladder drawn bottom to top, rung 1 at the bottom; the jump from rung 1 straight to "buy a tool" crossed out in fail red -->
---
<!-- 7 | Detail -->
## Most failed deployments jumped from the complaint straight to a tool

| What the client says | What was bought | What the problem was |
|---|---|---|
| "The planning is always wrong" | An APS | Changeover times in the ERP were fiction |
| "We can never find material" | RFID | Put-away discipline at receiving |
| "Maintenance takes forever" | A new CMMS | Technicians waiting for spare parts |

Every row skipped rungs 2 and 3. Never skip them.
<!-- three rows; the middle column in steel and struck through lightly -->
---
<!-- 8 | Framework -->
## Before structuring anything, ask the question behind the question

- **Who hurts?** Whose KPI, whose bonus, whose credibility is at stake?
- **Why now?** What triggered the request this month? There is always a trigger: a customer audit, a lost order, a corporate review, a rumor.
- **What does solved look like to the sponsor, in their own words?**

The same words mean a different problem three weeks before a corporate review than in a quiet quarter.
---
<!-- 9 | Framework -->
## MECE: no overlaps, no gaps, at every level of the tree

- **Mutually exclusive.** A fact belongs to one branch only.
- **Collectively exhaustive.** Together, the branches cover every possible cause.
- **The test.** Can you put each cause in exactly one box? Is there a cause that fits nowhere?

Three branches beat seven. Depth beats width.
<!-- two small diagrams side by side: overlapping circles (not ME) and a puzzle with a missing piece (not CE), then a clean three-way split -->
---
<!-- 10 | Framework -->
## Use an issue tree to explore, a hypothesis tree to decide

| | Issue tree | Hypothesis tree |
|---|---|---|
| Starts from | A question: "Why is OTIF falling?" | A bet: "OTIF falls because changeovers ate extrusion capacity" |
| Good for | The first day, when you know little | From day two, once you have a view |
| Risk | Boiling the ocean | Confirmation bias |
| Antidote | Prioritize branches by value | Write the test that could kill each branch |

On site, start with an issue tree for an hour, then switch to hypotheses.
---
<!-- 11 | Detail -->
## A useful hypothesis is falsifiable and comes with its test

| Weak | Strong |
|---|---|
| "Planning could be improved" | "The ERP's flat 30-minute changeover time makes the official schedule infeasible" |
| Test: none | Test: compare logged changeover minutes by product pair with the ERP standard, 4 weeks of shift logs, half a day, owner: FDE |

If no observation could prove it wrong, it is not a hypothesis. It is a slogan.
---
<!-- 12 | Framework -->
## Treat the tree as a betting slip: priors on every branch, tests that move them

- Mark a prior on each branch: high, medium, low.
- Give each leaf a test: the data or observation, its cost, its owner, its date.
- Run the cheapest tests that move the biggest priors first.
- Rule of thumb: two days of tests should kill half the tree.
<!-- a small tree with H, M, L tags on branches, and a cost/owner tag on each leaf -->
---
<!-- 13 | Detail -->
## When the sponsor arrives with a culprit, put it in the tree as one testable branch

- The sponsor names a villain: a team, a machine, a person.
- Do not accept it, do not dismiss it. Write it in, visibly and respectfully, as one branch among three.
- Give it the same treatment as the others: a prior and a test.
- If the data clears the culprit, you will need that test to move the sponsor without humiliating him. Day 4 shows how.
---
<!-- 14 | Framework -->
## The TIP one-pager is the contract of the first two weeks

| Section | Content |
|---|---|
| Problem statement | One falsifiable sentence |
| Baseline and gap | Metric, current, target, trend, and where the number comes from |
| Hypothesis tree | Three branches, priors on each |
| Tests | What, cost, owner, date, for each leaf |
| Decision point | When we choose, and on what evidence |

You will write dozens of these. You write your first one in twenty minutes.
<!-- the five sections as a one-page form layout -->
---
<!-- 15 | Detail -->
## Four anti-patterns to name out loud when you see them

1. **The embedded solution.** "We need a dashboard" is not a problem. Ask which decision the dashboard would change.
2. **The tyranny of averages.** Lead time is "fine on average". Variance kills service, not the mean. Ask for the distribution.
3. **Survivor data.** Analyzing shipped orders to explain lateness ignores the cancelled ones.
4. **The anchored culprit.** The sponsor's villain, accepted without a test.
---
<!-- 16 | Data -->
## This morning you already found the facts a strong tree needs

- Extrusion is the constraint: every other stage waits for it.
- Changeovers rose from 49 to 71 a week between January and March.
- M07 loses output to stops nobody logs; M04 drifts at weekends.

Facts are not yet a problem. The next exercise turns them into one.
Source: Polymex shift logs, January to March, your Plant Pulse analysis.
---
<!-- 17 | Exercise -->
## Exercise 1: Hervé's email, from complaint to a problem worth testing

> "Our on-time delivery has gone from 91% to 84% since September and corporate wants 95%. The problem is planning. Corinne is overwhelmed: the schedule is rewritten every day and the Friday plan is dead by Monday morning. I have told our COO we need a serious APS and probably a stronger planner."
> Hervé, site director

Full email and context sheet: exercises file, Exercise 1.
---
<!-- 18 | Exercise -->
## Thirty-five minutes, one TIP one-pager per team

1. Climb the five rungs, from Hervé's complaint to a problem statement with a kill test.
2. Answer the question behind the question: who hurts, why now, what solved means to Hervé.
3. Build a three-branch MECE hypothesis tree with priors. Hervé's culprit appears as one testable branch.
4. Give each leaf a test with its cost and owner.
5. Choose the first test you run on Monday, and say why.

At 14:25, two teams present their tree in two minutes each.
---
<!-- 19 | Detail -->
## What the strongest trees had in common

- The gap was a number with a source, not an adjective.
- The branches split the cause space cleanly: what is ordered, what can be produced, how it is planned.
- Hervé's culprit was there, as a branch with a cheap test, neither accepted nor dismissed.
- The first test was chosen for value and speed, not because it was easy.
- Someone wrote "why now?" and planned to ask it.
<!-- fill live during the debrief if the room produces better points -->
---
<!-- 20 | Divider -->
## Part 2. Structure the message
---
<!-- 21 | Hero -->
## Executives triage in seconds. Put the answer first.
<!-- full-bleed ink -->
---
<!-- 22 | Framework -->
## The pyramid: one governing thought, three supporting arguments, then the evidence

- **Governing thought.** The answer and its so-what, in one sentence.
- **Supporting arguments.** Three, MECE, each answering "why?" or "how?" about the level above.
- **Evidence.** Data, analysis, observations under each argument.

Write top-down. The reader can stop at any level and still have the message.
Source: Barbara Minto, The Pyramid Principle.
<!-- classic pyramid diagram: one box, three boxes, nine small boxes -->
---
<!-- 23 | Framework -->
## Situation, complication, resolution: the pyramid told as a story

| | One line each | Example |
|---|---|---|
| Situation | What the audience already knows and agrees with | "Ferralux is sold out, and changeovers take 18% of machine hours." |
| Complication | What changed, the tension | "A six-week pilot cut changeover time by 35% on three machines." |
| Resolution | Your answer and what you need | "Rolled out, that frees about 3,300 hours a year, roughly €300K of net contribution. We propose to validate it with your controller." |

Then stop talking.
---
<!-- 24 | Framework -->
## Vertical logic answers "why?", horizontal logic keeps siblings clean

- **Vertically**, each box answers the question the box above raises in the reader's mind.
- **Horizontally**, siblings are MECE and of the same kind: three reasons, or three steps, never a mix.
- A reader who asks "so what?" of your top line, or "why?" of a box without an answer below, has found a hole.
---
<!-- 25 | Detail -->
## A title states the conclusion; a topic title makes the reader do your work

| Topic title | Action title |
|---|---|
| "OEE analysis" | "Extrusion OEE is 59%, and changeovers explain most of the drop since January" |
| "Machine performance" | "M07 runs 10 points slower than the fleet, with no downtime logged to explain it" |
| "Next steps" | "Two weeks of measurement will tell Hervé which fix to fund" |

Read only your titles, in order. If they do not tell the story, rewrite them before touching a chart.
---
<!-- 26 | Framework -->
## Write the ghost deck first: titles, in order, before any chart exists

1. Write the governing thought.
2. Write five to eight action titles that prove it, in order.
3. Read them aloud as a paragraph. Fix the logic here, where it is cheap.
4. Only then, sketch one exhibit per slide that proves its title.

A ghost deck takes twenty minutes and saves two days of polishing the wrong story.
<!-- a row of empty slide frames with only titles written in them -->
---
<!-- 27 | Detail -->
## One message per slide, absorbable in sixty seconds

- Two points means two slides. No exceptions.
- If a slide needs more than a minute to understand, split it or move it to the appendix.
- The title says the message; the body proves it; nothing else earns space.
---
<!-- 28 | Detail -->
## Numbers discipline: every figure carries a source, a unit and its assumptions

- A source line on every slide with data: organization, document, date.
- Units and periods on every number: tonnes a day, euros a year, percent of planned time.
- Assumptions in a visible table, with a low and a high case.
- Triangulate critical numbers: two independent methods within 20 to 30% of each other, or you have found an error.
---
<!-- 29 | Detail -->
## Memos: prose, short sentences, numbers, no filler

- Write in paragraphs, not bullet lists. Bullets hide missing logic.
- Vary the rhythm: a six-word claim, a thirty-word explanation, a ten-word implication.
- Keep only the adjectives that carry information.
- Ban the filler words: leverage, holistic, robust, streamline, unlock, game-changer.
- Be confident and honest: "We recommend X." "We do not know Y yet; here is how we find out."
---
<!-- 30 | Exercise -->
## Exercise 2: turn this morning's facts into a memo and a storyline for Hervé

Use the fact base in the exercises file, Exercise 2 (it matches this morning's lab).

1. Write the governing thought: one sentence, the answer and its so-what.
2. Write a memo to Hervé: situation, complication, resolution, 250 words at most, prose.
3. Write a six-slide ghost deck: action titles only, plus one line naming the evidence for each.
4. Rehearse the 30-second version.
---
<!-- 31 | Exercise -->
## Thirty minutes; your Storyteller holds the pen

- First ten minutes: governing thought and titles, as a team.
- Next fifteen: the Storyteller writes the memo; the others draft the evidence lines and check every number against the fact base.
- Last five: rehearse the 30-second version twice, timed.

At 15:10, three teams read their governing thought aloud. The room picks the one Hervé would act on.
---
<!-- 32 | Detail -->
## What made a governing thought land

- It answered Hervé's real question, not the one in the email.
- It held a number and a mechanism, not an adjective.
- It respected his theory while moving him: options, not verdicts.
- It ended on a decision he could take this week.
---
<!-- 33 | Divider | ghost: ROLES -->
## Part 3. The six roles you meet in every plant
---
<!-- 34 | Detail -->
## Six roles decide whether an operational AI system is used

| Role | Measured on | Knows | Fears | Use cases that touch them most |
|---|---|---|---|---|
| Site director | EBIT, OTIF, safety | Why now; how the group sees the site | Looking bad upward | All of them |
| Planner | Plan adherence, late orders | The real sequencing rules | Blame for every late order; being replaced | Scheduling, inventory |
| Operator and shift leader | Output, scrap and safety on their shift | What the machine really does | Being monitored; extra work | Scheduling, quality |
| Maintenance | Availability, time between failures | Machine history and workarounds | Blame for stops others caused | Scheduling, quality |
| Quality | Scrap, complaints, on-time release | Defect causes, customer specifications | False alarms; a release they cannot defend | Quality, recipes |
| Controller | Numbers finance trusts | The baseline and the cost structure | A gain they cannot defend | All of them, through the gain |
---
<!-- 35 | Detail -->
## The site director: answer first, a number on his P&L line, one decision

- Measured on EBIT, OTIF and safety; judged by the group, often against sister sites.
- Wants a plan he can show upward, no surprises, and options when the news is bad.
- Give him the answer in the first sentence, a date and the decision you need.
- Never correct him in front of his team or his boss.
---
<!-- 36 | Detail -->
## The planner: the expert whose rules you need, and whose job you change

- Holds the rules no system has, and rewrites the plan every day.
- Fears an APS that replaces her, and blame for every late order.
- Work one to one, her details first. Her name goes on the rules; the tool checks her plan and never writes it.
- Tasks around her, such as re-keying and checking, may be automated. Know whose tasks they are before you demo anything.
---
<!-- 37 | Detail -->
## Operators and shift leaders: credibility first, usefulness within weeks

- They know what the machine really does, including the workarounds nobody wrote down.
- They judge you on whether you came at 6 a.m. and whether you fixed what they asked.
- They fear monitoring. Never put a name on a chart; in France the works council is consulted first.
- Their sponsor is their direct boss, not the site director.
---
<!-- 38 | Detail -->
## Maintenance: the owner of availability, and of the machines' history

- Measured on availability and time between failures; often blamed for stops caused by planning or by the process.
- Holds the failure log, but micro-stops rarely reach it.
- Owns the machines and often the OT network: ask them before any sensor or data connection.
- Earn their trust by showing the stops they were wrongly blamed for.
---
<!-- 39 | Detail -->
## Quality: the person who can stop a shipment, and who hates false alarms

- Measured on scrap, complaints and releasing on time.
- Holds the defect taxonomy, the lab data and the customer specifications.
- Burned by tools that alarm too often: measure false positives from the first day.
- Never ship a model that takes a release decision without them.
---
<!-- 40 | Detail -->
## The controller: the person who decides whether your gain exists

- Holds the baseline, the cost structure and the numbers the group believes.
- Meet them in the first week, and let them define the baseline and the formula.
- Bring rows, not charts. Expect precise questions by email the next morning.
- A gain they compute without you is the only gain that counts.
---
<!-- 41 | Divider | ghost: READ -->
## Part 4. Read people
---
<!-- 42 | Detail -->
## On site, reading people is an engineering skill: it decides what data you get and whether the system is used

- The rules you need are in people's heads; they share them with people they trust.
- The person who will use your system can quietly make it fail.
- The sponsor's stated goal is rarely the whole goal.
- None of this is in a document. You learn it by watching and listening.
---
<!-- 43 | Framework -->
## Read four things in anyone you meet

| Read | The question you answer |
|---|---|
| What they are measured on | Which number makes their month good or bad? |
| What they fear | What would this project cost them: status, time, their job? |
| What they control | Which decision, data or people can they move, formally or not? |
| What they know | Which rule, history or workaround only they hold? |
---
<!-- 44 | Detail -->
## Listen more than you talk: eighty percent of the time, in the first weeks

- Ask, then stop. Count to five in silence; the best answers come after the pause.
- Paraphrase what you heard before you add anything: "So the Friday plan dies because...?"
- Take notes in front of them; read back the important parts.
- Never correct an expert in the first conversation, even when the data says they are wrong.
---
<!-- 45 | Framework -->
## Questions that open people

| Ask | Why it works |
|---|---|
| "Walk me through yesterday." | Concrete, recent, no judgment |
| "What surprised you last month?" | Surfaces anomalies they have noticed |
| "What do you do that the system does not know?" | Finds the tacit rules |
| "If you could change one thing, what would it be?" | Shows their real priority |
| "Who else should I talk to?" | Maps the informal network |
| "What would make this project a waste of your time?" | Names the fear without asking for it |
---
<!-- 46 | Detail -->
## Questions that close people

| Avoid | Because |
|---|---|
| "Why did you do that?" | Sounds like an audit; ask "what led to that?" |
| "Don't you think that...?" | Leading; you get your own idea back |
| "Can the APS handle your constraints?" | Jargon and a solution inside the question |
| "Is the data right?" | Yes-or-no; ask "where would you look first if it were wrong?" |
| Three questions in one breath | They answer the easiest one |
---
<!-- 47 | Detail -->
## Signals of stance you can observe

| Signal | Often means |
|---|---|
| "They" for the project, "we" for the plant | Not yet on board |
| Sends a junior to every meeting | Low priority, or quiet opposition |
| Agrees fast, follows through slowly | Polite resistance |
| Asks detailed, hard questions | Engagement; often a future ally |
| Brings data you did not ask for | Wants to be part of it |

Treat every signal as a hypothesis. Test it in a one-to-one.
---
<!-- 48 | Detail -->
## On the shop floor, credibility is earned in the first week

- Wear the protective equipment, every time, properly.
- Learn the names of the crew, and use them.
- Come to the night shift at least once.
- Do what you said you would do, by when you said it.
- Never discuss an operator's performance with anyone but the operator.
---
<!-- 49 | Detail -->
## After every conversation that matters, write five lines and file them in the bundle

| Field | Example |
|---|---|
| Person, role, date | Corinne, planner, Monday 8:10 |
| Measured on, in their words | "Every late order lands on me" |
| What they fear | An APS that replaces her |
| What they know that nobody else does | The black-to-natural changeover rule |
| Next step, promised by whom | Rules review on Wednesday, the FDE sends the draft |

The note goes into the engagement bundle the same day, linked to the person and to the rules it mentions.
---
<!-- 50 | Detail -->
## Four traps that make you misread people

1. **Projection.** Assuming they want what you would want in their place.
2. **First impressions.** The gruff operator is often the best ally by week three.
3. **Politeness as agreement.** A nod in a meeting is not a yes.
4. **Silence as consent.** In many plants, people do not contradict the boss in public.
---
<!-- 51 | Exercise -->
## Drill: a five-minute interview, in pairs

1. One of you is a planner in a plant you know or imagine. The other is the FDE.
2. The FDE asks only open questions from the list, and paraphrases before each new one.
3. Goal: one rule the system does not know, and one fear.
4. Five minutes, then swap. The listener says which question worked best.
---
<!-- 52 | Divider | ghost: MBTI -->
## Part 5. Understand behaviours
---
<!-- 53 | Detail -->
## People take in information and decide differently; adapting to them is respect, not manipulation

- The same finding lands with one person as a relief and with another as an attack.
- Most friction on a project comes from style, not from substance.
- Adapting means changing the order, the detail and the channel, never the facts.
- You do not need to type anyone. You need to notice and adjust.
---
<!-- 54 | Framework -->
## The MBTI gives a vocabulary of four preferences

| Dimension | One pole | The other pole |
|---|---|---|
| Energy | Extraversion (E): thinks out loud, gets energy from people | Introversion (I): thinks before speaking, needs time alone |
| Information | Sensing (S): facts, details, what is | Intuition (N): patterns, possibilities, what could be |
| Decisions | Thinking (T): logic, consistency, criteria | Feeling (F): people, values, consequences for others |
| Structure | Judging (J): plans, closure, deadlines | Perceiving (P): options, flexibility, adapting late |

Source: The Myers-Briggs Company, MBTI Manual.
---
<!-- 55 | Detail -->
## Extraversion and introversion: give each the room to think their way

| With a strong E | With a strong I |
|---|---|
| Expect thinking out loud; the first idea is not the final one | Send the question before the meeting |
| Use workshops, whiteboards, quick calls | Leave silences; they will fill them |
| Confirm decisions in writing; talk is not commitment | Follow up one-to-one; they may not speak in a group |
---
<!-- 56 | Detail -->
## Sensing and intuition: lead with the data, or lead with the picture

| With a strong S | With a strong N |
|---|---|
| Start from the facts: dates, tonnes, machines | Start from the big picture, then the facts |
| Show the raw rows behind a number | Show the pattern and where it leads |
| Give a concrete, step-by-step plan | Leave room for their ideas on the approach |
| Distrust anything that sounds like a vision | Lose interest in long detail |
---
<!-- 57 | Detail -->
## Thinking and feeling: show the logic, and show who it affects

| With a strong T | With a strong F |
|---|---|
| Lead with criteria and the analysis | Lead with what it means for the people involved |
| Expect challenge; it is engagement, not hostility | Expect concern for fairness; answer it directly |
| Be precise; vagueness reads as weakness | Acknowledge effort before you discuss results |

Everyone uses both. The question is which one they reach for first under pressure.
---
<!-- 58 | Detail -->
## Judging and perceiving: close the loop, or keep the options open

| With a strong J | With a strong P |
|---|---|
| Give a plan with dates and stick to it | Present options; let them choose late |
| Announce changes early; surprises cost trust | Expect late changes; build slack into the plan |
| End every meeting with a decision | Use a deadline only when it is real |
---
<!-- 59 | Detail -->
## Use the MBTI as a vocabulary, never as a verdict

- The research is mixed: many people get a different type when they retake the test a few weeks later.
- The Big Five model has stronger evidence and describes traits on a scale, not in boxes.
- Never label a client, and never write a type in a document about someone.
- What stays useful: noticing that people differ on these four axes, and adjusting your approach.

Source: David Pittenger, Measuring the MBTI and Coming Up Short, 1993; Robert McCrae and Paul Costa on the five-factor model.
---
<!-- 60 | Detail -->
## Spot preferences in five minutes, from what people do

| Cue | Suggests |
|---|---|
| Opens your report at the appendix | S, and probably T |
| Asks "where is this going?" in the first minute | N |
| Asks "who has been consulted?" | F |
| Arrives with a printed agenda and leaves on time | J |
| Reopens a decision taken last week | P, or a fear nobody has addressed |
| Speaks first in every meeting | E |
---
<!-- 61 | Detail -->
## One finding, four plant roles, four ways to open

| For | Open with |
|---|---|
| A detail-first controller (S, T) | "Changeovers took 10.3% of extrusion time in March, against 7.5% in January. Here are the rows." |
| A quality manager who thinks about the customer first (F) | "Scrap rises on the days with the most changeovers. We want to measure it for two weeks before we claim anything." |
| A maintenance manager who checks before he speaks (I, S) | "Part of the lost extrusion time is changeovers, not breakdowns. Your failure log would let us separate the two." |
| A plan-first site director (J) | "We have a two-week test on two lines, with a decision on Friday the 15th." |

Same fact, same number. Different first sentence.
---
<!-- 62 | Detail -->
## Our first reading of the Polymex cast, to test on site

| Person | What we have observed | First adjustment |
|---|---|---|
| Hervé | Decides fast, wants a plan, impatient with background | Answer first, a date, one decision |
| Corinne | Precise, protective of her rules, quiet in meetings | One-to-one, her details first, credit to her |
| Marc | Practical, few words, judges by results | Show, do not present; ask about the machine |
| Nadia | Process, risk, history of being blamed | Written, step by step, an exit plan |
| Mireille | Criteria and evidence | The baseline and the formula before the number |
---
<!-- 63 | Exercise -->
## Exercise 3: one message, four readers

1. Read the four profiles in the handout, from another plant.
2. For each, write the hypothesis: which preferences you see, and the evidence.
3. Rewrite your Exercise 2 governing thought as the first two sentences you would say to each.
4. Ten minutes, in pairs. Two pairs read theirs aloud.
---
<!-- 64 | Divider | ghost: SAY -->
## Part 6. Communicate
---
<!-- 65 | Hero -->
## The message is what they heard, not what you said.
---
<!-- 66 | Framework -->
## Before you say anything, answer four questions about the audience

1. **Who.** One person, or a group with different stakes?
2. **What they know.** What they already believe, and what is new to them.
3. **What they must decide.** The one thing you need from them.
4. **How they take it in.** Detail or picture, talk or paper, now or after thinking.
---
<!-- 67 | Detail -->
## Choose the channel for the message, not for your convenience

| Channel | Use for | Never for |
|---|---|---|
| In person | Bad news, anything about someone's job, first meetings | Long numbers nobody can follow |
| Phone | Urgent news the same day, with options | Anything that needs a record, unless confirmed in writing |
| Email | Decisions and actions on record, pre-reads | First news of a problem to the sponsor |
| Chat | Quick coordination | Bad news, criticism, client data |
| Meeting | Decisions with several people, after pre-wiring | Surprises |
| Document | Analysis, protocols, anything finance will check | Persuading someone who has not read it |
---
<!-- 68 | Detail -->
## The floor and the boardroom need different words for the same fact

| On the floor | In the boardroom |
|---|---|
| "The black-to-natural changeover on M02 took four hours on Wednesday." | "Infeasible sequences cost about two points of OTIF." |
| Machines, products, shifts, names of the crew | Lines of the P&L, OTIF, EBIT, cash |
| Short, spoken, at the line | Written first, then discussed |
| Credit to the people who found it | Credit to the team, and the sponsor's decision |
---
<!-- 69 | Framework -->
## Give feedback with situation, behaviour, impact

| Step | Example |
|---|---|
| Situation | "In Tuesday's steering committee..." |
| Behaviour | "...you presented the M07 numbers before the controller had seen them..." |
| Impact | "...and Mireille spent the meeting questioning the baseline instead of deciding." |
| Then ask | "How would you handle it next time?" |

Source: Center for Creative Leadership, the SBI model.
---
<!-- 70 | Detail -->
## The 24-hour recap: every conversation that matters ends in writing

- Same day, or next morning at the latest.
- Three parts: what we agreed, who does what by when, what is still open.
- Short enough to read on a phone.
- It protects them as much as you: nobody remembers the same meeting the same way.
- File it in the bundle as a meeting note, with the recording if there is one, and link each decision.
---
<!-- 71 | Divider | ghost: TRUTH -->
## Part 7. One source of truth
---
<!-- 72 | Hero -->
## If it is not in the bundle, it did not happen.
---
<!-- 73 | Detail -->
## On an engagement, knowledge scatters within a week

- Emails sit in five inboxes; the decision is in a reply nobody else received.
- The planner's rules are in a recording on one laptop and a chat thread on another.
- Two versions of the baseline circulate; the controller has the older one.
- A new FDE on the team needs three weeks to find what the others know.
- Your coding agent cannot read any of it.
---
<!-- 74 | Framework -->
## One source of truth means one place, one version and one owner for every fact

| Principle | What it means on an engagement |
|---|---|
| One place | A single knowledge repository per engagement, on the client's approved platform |
| One version | Git history; nothing is overwritten, superseded concepts are marked as such |
| One owner | Every concept has a named owner who keeps it current |
| Linked | Every claim links to the email, file, recording or data it comes from |
| Open | Plain files anyone can read: the client, a new FDE, the controller, an agent |
---
<!-- 75 | Detail -->
## Capture everything: every email, file, discussion and meeting recording

| Source | What goes into the bundle |
|---|---|
| Email | The original in the sources folder; a concept with the decision or fact, linked to it |
| File | The original, unchanged, with its date and hash; a concept that says what it is and who sent it |
| Meeting | Recording and transcript, with consent; a meeting note with decisions and actions |
| Floor conversation | The five-line note from Part 4, written the same day |
| Chat | Any decision or fact copied out, with a link to the thread |
| Data extract | The profile, the hash and the data contract |
---
<!-- 76 | Detail -->
## Capture with consent, on the client's ground

- Record a meeting only when everyone has agreed, and say it at the start of the recording.
- Keep the bundle in the tools and region the client approved. Never in a personal account.
- Notes about people hold roles, what they asked and what they decided. Never judgments, never MBTI types.
- Data that could be used to judge an operator stays aggregated; in France the works council is consulted before tools that can monitor employees.
- The client owns the bundle, and gets all of it at handover.
---
<!-- 77 | Framework -->
## The Open Knowledge Format is Google's open standard for knowledge that people and agents both read

- **A bundle is a folder.** Markdown files with a YAML header, shippable in a Git repository.
- **One concept per file.** A person, a machine, a rule, a metric, a decision, a meeting.
- **The path is the identity.** `rules/black-to-natural.md` is the concept `rules/black-to-natural`.
- **Links are relationships.** Standard markdown links from one concept to another.
- **No vendor.** No account, no SDK, no platform required to read or write it.

Source: Google Cloud, Open Knowledge Format specification, v0.1 (12 June 2026) and v0.2 (24 July 2026), github.com/GoogleCloudPlatform/open-knowledge-format.
---
<!-- 78 | Detail -->
## Every concept has a type, and states where it came from

```markdown
---
type: rule
title: Black to natural changeover on extrusion
description: Screw pull, 240 minutes, only on Saturday shift A
sources:
  - meetings/2026-05-04-corinne-interview.md
  - sources/files/jean-pierre-notebook-n1-p12.pdf
status: active
---
## Rule
Black to natural requires a screw pull: 240 minutes.
Allowed only on Saturday shift A, with maintenance on site.
```

The only required field is `type`. Version 0.2 adds optional fields for sources, status and freshness.
---
<!-- 79 | Detail -->
## The Polymex engagement bundle, on day one

```text
polymex-knowledge/
  index.md                    reserved: what the bundle covers
  log.md                      reserved: dated record of changes
  people/herve.md
  people/corinne.md
  plant/extrusion.md
  machines/m07.md
  metrics/oee.md
  rules/black-to-natural.md
  findings/extrusion-is-the-constraint.md
  decisions/2026-05-12-aps-out-of-scope.md
  meetings/2026-05-04-corinne-interview.md
  sources/emails/  sources/files/  sources/recordings/
```
---
<!-- 80 | Framework -->
## Seven rules keep the bundle the single source of truth

1. **Same day.** Every meeting, email and visit is in the bundle before you go home.
2. **One fact, one place.** Link to it; never copy it.
3. **Every number links to its source.** The file, the query, the person.
4. **Never delete.** Mark a concept superseded and link to what replaced it.
5. **Decisions are concepts.** Who decided, when, on what evidence.
6. **People notes are factual.** Role, requests, decisions. Nothing you would not show them.
7. **The client owns it.** Handed over in full, in an open format.
---
<!-- 81 | Detail -->
## The bundle pays four times: for the agent, the newcomer, the controller and the next site

- **The agent.** Claude Code reads the bundle the way it reads `CLAUDE.md`: your rules become its context.
- **The newcomer.** A new FDE reads `index.md` and is useful in days, not weeks.
- **The controller.** The baseline decision is a concept with its sources, not a memory.
- **The next site.** The second deployment starts from the rules, metrics and decisions of the first.
---
<!-- 82 | Exercise -->
## Drill: write the first five concepts of the Polymex bundle

1. In your Plant Pulse repository, create `knowledge/` with `index.md` and `log.md`.
2. Write five concepts: Hervé (person), the constraint (finding), OEE (metric), Hervé's email (source), one decision your team took today.
3. Each has a `type`, a title, a description and at least one source.
4. Six minutes. The Verifier checks that every number links to its source.
---
<!-- 83 | Divider | ghost: CURVE -->
## Part 8. The curve of change
---
<!-- 84 | Framework -->
## People go through change in stages, and morale dips before it rises

1. **Shock.** "Nobody told us."
2. **Denial.** "It will never work here."
3. **Frustration.** "It makes my job harder."
4. **Low point.** "Why bother?"
5. **Experiment.** "Let me try it on one order."
6. **Decision.** "This works for me if..."
7. **Integration.** "This is how we do it now."

Source: adapted from Elisabeth Kübler-Ross, On Death and Dying (1969), as used in change management.
---
<!-- 85 | Detail -->
## What people need at each stage of the curve

| Stage | What helps | What hurts |
|---|---|---|
| Shock and denial | Clear information, the reason, early | Silence, rumors |
| Frustration and low point | Listening, support, removing a burden | Pushing harder, blaming |
| Experiment | A safe first use, quick fixes, visible help | Judging their first attempts |
| Decision and integration | Recognition, ownership, their name on it | Moving on before it holds |
---
<!-- 86 | Detail -->
## The curve is personal, and the sponsor is always ahead of everyone else

- The sponsor has lived with the decision for weeks; the floor hears it today.
- So the sponsor is in "decision" while the planner is in "shock". Both are normal.
- Each person moves at their own speed, and can fall back after a bad week.
- Your job is to see where each person is, not to rush them.
---
<!-- 87 | Framework -->
## Every change starts with an ending: endings, the neutral zone, new beginnings

1. **Ending.** Name what people lose: a skill that mattered, a routine, a status.
2. **Neutral zone.** The old way is gone and the new one is not yet natural. Productivity dips; keep the support close.
3. **New beginning.** The new routine, with a clear role for each person in it.

Source: William Bridges, Managing Transitions.
---
<!-- 88 | Detail -->
## Start with the early adopters, and let the floor see them succeed

- Choose the first users for credibility on the floor, not only enthusiasm.
- Make them visibly successful within weeks: a fix in a day, their name on the result.
- The early majority follows people they respect, not memos.
- Do not start by trying to convert the most resistant person. Win the middle first.
---
<!-- 89 | Detail -->
## Resistance is information

| Resistance sounds like | It often tells you |
|---|---|
| "It will never work here" | A real constraint you have not seen yet |
| "We tried that in 2019" | Scar tissue: ask what happened |
| "I don't have time" | You are adding work, not removing it |
| "Who asked for this?" | The sponsorship has not reached them |
| Silence | Fear of saying it to someone with power |
---
<!-- 90 | Divider | ghost: STAKE -->
## Part 9. The interests of people
---
<!-- 91 | Hero -->
## Everyone asks the same first question: what happens to me?
---
<!-- 92 | Framework -->
## For each role, ask what the system does to their work

| The system... | Example at a plant | What you can expect |
|---|---|---|
| Removes a task they value | Re-keying the plan into the ERP | Fear for the job; low support |
| Removes a task they dislike | Checking every Friday plan by hand | Relief, once they trust it |
| Changes how they decide | The planner's rules become a checker | Loss of control, unless they own the rules |
| Adds work | One more screen for operators | Quiet non-use |
| Makes them visible | Line performance by shift | Fear of judgment |
---
<!-- 93 | Detail -->
## When the system automates someone's task, change how you work with them, not how honestly

- Their interest and the project's diverge. Do not build your plan on their support, or spend weeks trying to win them as a champion.
- Do not use them as your main source while hiding what the system will do. It is dishonest, and it always comes out.
- Make sure the sponsor and HR decide what happens to the person before the change is visible.
- Tell them early, in person, before anyone else does. Then let their manager lead.
---
<!-- 94 | Detail -->
## Positions are what people say; interests are why they say it

| Position | Interest behind it |
|---|---|
| Hervé: "We need an APS and a stronger planner" | Show the group a credible plan before the review |
| Corinne: "The tool won't know what I know" | Keep control of the plan, and her job |
| Nadia: "No access until the review is done" | Never again own a system nobody supports |
| Marc: "No camera on my line" | Not be judged on numbers he cannot explain |

Negotiate on the interest; the position usually follows.

Source: Roger Fisher and William Ury, Getting to Yes.
---
<!-- 95 | Framework -->
## Spend your time by power and interest

| | Low interest | High interest |
|---|---|---|
| High power | Keep satisfied: short updates, no surprises | Manage closely: pre-wire, co-decide |
| Low power | Monitor | Keep informed, and listen: they hold the facts |

The people whose job the system changes most are high interest whatever their power. Inform them first.

Source: Aubrey Mendelow, power-interest grid, 1991.
---
<!-- 96 | Detail -->
## Three lines an FDE never crosses about jobs

1. Never promise that nobody will lose their job. It is not your decision to make.
2. Never hide a job effect inside a model, a slide or a gains case. Name it to the sponsor.
3. Never let a person learn about their own job from a demo, a rumor or a document. In France, the works council is consulted before such changes.
---
<!-- 97 | Divider | ghost: TARGET -->
## Part 10. Design the target system
---
<!-- 98 | Framework -->
## Every change has four roles: sponsors, agents, targets and advocates

| Role | Who | What they do |
|---|---|---|
| Sponsor | The person with authority over the targets | Decides, legitimizes, holds people to it |
| Agent | The FDE team, internal project leads | Plans and drives the change |
| Target | The people who must change how they work | Adopt, or not |
| Advocate | People who want the change but lack authority | Argue for it, find sponsors |

Source: Daryl Conner, Managing at the Speed of Change (1992).
---
<!-- 99 | Detail -->
## Sponsorship must cascade to every target's direct boss

- The initiating sponsor starts the change: Hervé.
- Every target needs a sustaining sponsor, their direct boss, who says it matters.
- An operator follows their shift leader, not the site director's email.
- An agent without a sponsor is a consultant with opinions.
---
<!-- 100 | Detail -->
## Find the black holes: managers who do not pass the message down

- A middle manager who agrees in the steering committee and says nothing to the team.
- The signs: their people ask "who asked for this?"; usage stops at their team's border.
- The fix is not you going around them. It is their boss making it their objective.
---
<!-- 101 | Framework -->
## Design the target system in five steps

1. **The behaviour.** Write what must change, as a behaviour: "the Friday plan is checked with Plant Pulse before it is issued."
2. **Targets.** Who must behave differently, by name.
3. **Sponsors.** Each target's direct boss, up to the person who decided.
4. **Agents and advocates.** Who drives, who argues for it.
5. **Gaps.** Missing sponsors, black holes, targets nobody has met.
---
<!-- 102 | Detail -->
## Who to talk to, for what: decide, consult, inform

| Decision | Decides | Consulted | Informed |
|---|---|---|---|
| Use the checker for the Friday plan | Hervé | Corinne, the production manager | Shift leaders |
| Change a changeover rule | Corinne | Maintenance, quality | The FDE team, the crews |
| Give read access to exports | Nadia | Group security | Hervé |
| Accept the baseline | The plant controller | Mireille | Hervé |
| Change a job's content | Hervé, with HR | The works council | The person, first |
---
<!-- 103 | Detail -->
## Find the informal network: who people go to when the system fails

- Ask everyone: "who do you call when something goes wrong at night?"
- The same two or three names come back. They are your real map.
- The expert nobody mentions in the org chart is often the one the floor trusts most.
- Jean-Pierre retired in March; ask who people call now.
---
<!-- 104 | Framework -->
## Map influence against stance, then spend your time where it moves the outcome

| | Opposed or wary | Neutral | Supportive |
|---|---|---|---|
| High influence | Convert first, one to one | Pre-wire before every meeting | Use, and protect their credibility |
| Low influence | Listen; they often hold the facts | Inform | Recruit as allies on the floor |

Influence is formal and informal. On a shop floor, the senior operator can sink a tool the director bought.
---
<!-- 105 | Detail -->
## Behind every stance there is a fear you can address

| Person | Usually fears | What helps |
|---|---|---|
| Operator | Being monitored, being replaced | Respect for their craft; no names on any chart; usefulness to them within weeks |
| Planner | Blame for every late order | Taking a task off their plate; no-blame framing; co-authorship |
| Site director | Looking bad upward | Answer first, options not problems, no surprises |
| IT manager | Being blamed for an orphan application | Named fields, access in steps, an exit plan |
| Finance | A number they cannot defend | A baseline they build, a protocol they run |
---
<!-- 106 | Exercise -->
## Exercise 4: design the Polymex target system

1. Write the behaviour that must change, in one sentence.
2. List the targets, their sustaining sponsors, the agents and the advocates, from the cast sheet.
3. Place each person on the influence and stance map, and on the curve of change.
4. Mark what the system does to each person's work: removes, changes, adds, or nothing.
5. Circle the gaps: missing sponsors, black holes, people nobody has met.

Twelve minutes, on the template in the handout.
---
<!-- 107 | Divider | ghost: ORDER -->
## Part 11. Sequence a difficult message
---
<!-- 108 | Hero -->
## Nobody should hear news about their own job second.
---
<!-- 109 | Framework -->
## Pre-wire: nobody should hear anything important for the first time in a meeting

- Before a steering committee, meet each key person one to one.
- Show them what concerns them, ask what they would change, adjust.
- In the room, the decision is a formality; the real work happened before.
---
<!-- 110 | Framework -->
## Sequence a difficult message in six steps

1. **Decide.** The sponsor and HR agree what will happen, and what is offered to the people affected.
2. **Consult where the law requires.** The works council, before anything is announced.
3. **Equip the direct manager.** The facts, the reasons, the answers to the hard questions.
4. **Tell the person affected.** In person, by their manager, with you available.
5. **Tell the team.** The same day, the same facts.
6. **Write it down.** A short note to everyone concerned, and a recap to the sponsor.
---
<!-- 111 | Detail -->
## Timing is part of the message

- Steps 3 to 5 happen within hours, not days: the longer the gap, the more likely a leak.
- Never on a Friday afternoon, never by email, never before a holiday.
- Prepare the questions people will ask, and the answers, before step 3.
- Plan what you do if it leaks before step 4: go straight to the person.
---
<!-- 112 | Detail -->
## The communication plan fits on one page

| Who | What they hear | From whom | When | Channel | Reaction we expect | Follow-up |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |
| | | | | | | |
---
<!-- 113 | Detail -->
## At Polymex: the plan check removes most of Sylvie's re-keying

- Sylvie, scheduling clerk, spends about 25 hours a week re-keying Corinne's daily changes into the ERP.
- Plant Pulse v1, with a write-back approved by IT later, would remove most of that work.
- That is a change to Sylvie's job. It is decided by Hervé with HR, not by the FDE team.
- Your Exercise 5: sequence it.
---
<!-- 114 | Detail -->
## What the manager says to the person affected

1. The news, in the first sentence: "The re-keying of the plan will be automated from June."
2. The reason, tied to the plant: "Corinne's changes will flow directly, without retyping."
3. What it means for them, as far as it has been decided, and what has not been decided yet.
4. What happens next, and when they will know more.
5. Then listen. Answer what you can; write down what you cannot.
---
<!-- 115 | Detail -->
## When it leaks before you are ready

- Go to the person affected first, the same hour, even without every answer.
- Say what is true, what is decided and what is not.
- Tell the sponsor what happened and what you did.
- Do not look for who leaked it. Fix the plan.
---
<!-- 116 | Detail -->
## Bring options, not problems, when the news is bad

- Lead with what you found, then what it means for their line.
- Offer two or three options with their cost and their risk, and say which one you recommend.
- Ask for one decision.
- Never let the sponsor discover bad news in front of their own boss.
---
<!-- 117 | Exercise -->
## Exercise 5: sequence the Sylvie message, then brief Hervé live

1. Fill the one-page communication plan: who hears what, from whom, when, by which channel.
2. Write the first three sentences Corinne will say to Sylvie.
3. Prepare a two-minute, answer-first briefing for Hervé: your Exercise 2 recommendation, and the sequence you need him to approve.

Ten minutes of preparation. Then two teams brief Hervé live, four minutes each.
---
<!-- 118 | Exercise -->
## The trainer plays Hervé, and Hervé has little patience

- Hervé interrupts any preamble longer than thirty seconds: "What do you need from me?"
- He warms to answer-first speech, numbers and options.
- He goes cold at anything that sounds like "we are here to prove you wrong".
- He will try to skip a step of your sequence. Hold it, politely.
---
<!-- 119 | Detail -->
## What moved Hervé, and what lost him

<!-- complete live with the room's observations -->
- Moved: the answer in the first sentence; a number tied to OTIF or EBIT; a test he could co-own; a decision he could take this week.
- Lost: background before the point; jargon; a verdict on his planner; no ask.
---
<!-- 120 | Detail -->
## Nine habits to practice from tomorrow morning

1. Write the gap as a number with its source before anything else.
2. Put a prior and a test on every branch, including the sponsor's culprit.
3. Write titles before charts, and read them in order.
4. Say the answer in the first sentence.
5. Listen for what people are measured on and what they fear.
6. Adapt the first sentence to the reader; never the facts.
7. For every change, name the targets and their sponsors.
8. Nobody hears news about their own job second.
9. If it is not in the bundle, it did not happen.
---
<!-- 121 | Detail -->
## Go further

- Barbara Minto, *The Pyramid Principle*: structured writing.
- Charles Conn and Robert McLean, *Bulletproof Problem Solving* (2018): issue trees and hypotheses.
- Gene Zelazny, *Say It with Charts*: choosing exhibits.
- Roger Fisher and William Ury, *Getting to Yes*: interests behind positions.
- William Bridges, *Managing Transitions*: endings and the neutral zone.
- Daryl Conner, *Managing at the Speed of Change*: sponsors, agents, targets.
- Kerry Patterson and others, *Crucial Conversations*: talking when stakes are high.
- Google Cloud, *Open Knowledge Format* specification, v0.2: github.com/GoogleCloudPlatform/open-knowledge-format.
---
<!-- 122 | Detail -->
## Tomorrow: the business

- **Morning.** Problems worth solving: read the Polymex P&L in 20 minutes, find the bottleneck's value, size the leaks in euros.
- **Afternoon.** Leading an FDE project: the six-phase method, scoping, governance, and a validation protocol a controller could run without you.

Before you leave: write on a card one thing you would do differently on a real site after today.