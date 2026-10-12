# Day 1 morning: the job AI created. Facilitator guide

*AI 50%: drafted by Claude, validated by the trainer.* Trainer: Renan. 9:00 to 12:00. Deck: `D1 AM - Deck - The job AI created.dc.html` (122 slides; content in `D1 AM - Deck content.md`). Lab kit: `D1 AM - Lab kit.zip`. Earlier versions (50 and 120 slides) are in `_archive/`.

## Objectives

By 12:00 every participant can:

1. Name the people in the cohort and what each brings.
2. Build, check and deploy from their own laptop, with secrets kept out of Git.
3. Define the FDE role in two sentences, state what an FDE is measured on, and distinguish it from consultant, solutions engineer, product engineer and staffing.
4. Explain with three figures why deployment, not the model, is where industrial AI fails.
5. Describe how a plant is run and who decides what.
6. Build, verify and deploy a small app on plant data.

## Before the day (organizers and trainer)

| When | What | Who |
|---|---|---|
| D-7 | Send the pre-flight email below | Organizer |
| D-3 | Create the cohort GitHub organization, import `polymex-plant-pulse` from the kit as a template repository | Organizer |
| D-3 | Create the cohort channel (Slack or Teams) and post the site URL and password | Organizer |
| D-2 | Test the room Wi-Fi with twenty devices downloading at once; prepare two USB keys with the Node.js, Git, VS Code and Python installers for macOS and Windows | Organizer |
| D-1 | Prepare Claude access for twenty people, ready to hand out at 9:35 | Organizer |
| D-1 | Run the lab yourself end to end with Claude Code (about 30 minutes) | Trainer |
| D-1 | Print the team list (five teams of four, at least one confident coder per team), five team cards, four capability posters and dot stickers | Trainer |
| D-1 | Rewrite slide 13 with your own introduction | Trainer |
| Day 1, 8:30 | Power strips at every table, projector tested, deck on slide 1, timer visible | Organizer |

### Pre-flight email (send at D-7)

> Subject: FDE School, Monday 9:00: twenty minutes of setup before you arrive
>
> On Monday morning you will build and deploy an app from your own laptop. To keep the setup sprint short, please before Monday: (1) create a free GitHub account and send us your username; (2) create a free Vercel account linked to it; (3) install Node.js LTS, Git, VS Code and Python 3.11 or later; (4) check that you can install software on your laptop. If you cannot (a locked corporate laptop), tell us: you will work in GitHub Codespaces in the browser. Claude access will be handed out on Monday. Bring your charger.

## Run sheet

| Time | Slides | Block | Notes |
|---|---|---|---|
| 9:00 | 1 to 9 | Opening | Eight minutes. Teams already seated together. |
| 9:08 | 10 to 20 | Round table | 27 minutes: 20 people × 75 seconds, the capability posters, roles. |
| 9:35 | 21 to 38 | Setup sprint | 30 minutes, hands-on. |
| 10:05 | 39 to 53 | Why the job exists | 12 minutes. Laptops closed. |
| 10:17 | 54 to 72 | The FDE job definition | 13 minutes, including the 3-minute exercise on slide 74. |
| 10:30 | 73 to 88 | Where FDEs work: use cases | 14 minutes, including the 7-minute Polymex mapping. |
| 10:44 | | Break | Ten minutes. |
| 10:54 | 89 to 102 | The context of the role | 8 minutes, fast: most of it returns later in the week. |
| 11:02 | 103 to 116 | Lab brief | Six minutes. |
| 11:08 | | Build | 35 minutes. |
| 11:43 | 117 | Demos | Five teams × 2.5 minutes. |
| 11:56 | 118 to 120 | Close | Four minutes. |

If you run late, cut in this order: the proof-point slides of the use-case section to one sentence each, then the context section down to the decision table, the KPIs, the systems and the site rules. Never cut the build below 30 minutes.

## Slide notes

### Opening (slides 1 to 9)

**Slide 2.** Read the sentence, pause, then say why it is the thesis of the week: the same models are available to everyone for a few euros; what nobody can buy is the person who makes them work inside a plant. That person is what the participants are becoming.

**Slide 6.** Adjust names and roles to who is actually in the room.

**Slide 7.** Spend real time on rule 2. Some participants may recognize Friday's companies. If you think you recognize a company, you keep it to yourself and do not fill gaps with what you know.

**Slide 9.** Say the exam numbers once and move on; Friday's guide covers logistics.

### Round table (slides 10 to 20)

**Slide 12.** Put the timer on screen. Seventy-five seconds is short on purpose: on site, the first introduction to a sponsor is about as long. Cut people off kindly at 90 seconds.

**Slide 13.** Go first, and stay within 75 seconds: you set the length everyone copies. Replace the bullets with your own words before the day.

**Slides 14 to 18.** One slide per team, shown while that team speaks. Fill names and companies in advance from the team list; the helper types the "background" and "what I want" columns live, in a few words. These slides are reused on Friday at 16:45: read back what people wanted on Monday.

**Slide 19.** Posters on the wall before 9:00. Two minutes, in silence. Then look at the posters and say one sentence about the room ("strong in engineering, lighter on field craft: the week will push you on the floor").

**Slide 20.** Roles chosen in two minutes. The Builder is the person most at ease in a terminal today.

### Setup sprint (slides 21 to 39)

Hand out Claude access at 9:35 sharp. Most people did the pre-flight; they go straight to slides 25 to 27. Walk the room clockwise; the helper walks counter-clockwise. Ask everyone who finishes early to help a neighbor before anything else.

**Slides 28 to 39.** Teach these while the slower installs run: Git, how Claude Code works, permissions, `CLAUDE.md`, prompts as small specs, secrets, deploy, Codespaces, the loop, the five ways to lose an hour. Keep each to one minute; they return in every lab.

**Slide 34.** Make everyone open `.gitignore` now and find `.env` in it. On Day 4, Nadia will ask.

**Slide 37.** The troubleshooting table, also in the kit. Additional cases: corporate antivirus quarantining the installer (use Codespaces); Apple silicon with an old Homebrew (use the native installer, not Homebrew).

**Slide 24.** Write the site address and the password `fdecompany` on the whiteboard; it stays there all week.

**Slide 39.** At 10:05 ask for hands. Anyone without all six sits next to a finished teammate for the lab; the helper keeps fixing in the background.

**Slide 32.** One sentence: the knowledge bundle is the team's single source of truth, in the Open Knowledge Format; they write the first concepts this afternoon (Part 7). The lab repository already contains `knowledge/index.md`, `log.md` and `metrics/oee.md`.

### Why the job exists (slides 40 to 55)

The story of this section: the models got cheap and good, yet companies see little in the P&L; history says this is normal until the work is redesigned; the gap is the last mile; the last mile is a job; the market is now hiring for it.

**Slide 42.** Be honest about the definition: the MIT study counts a pilot as failed if it shows no measurable benefit within six months. Quote the number with its definition.

**Slide 45.** The dynamo story makes the point without any AI hype: the technology was ready decades before the factories were redesigned around it. Keep it to one minute.

**Slide 46.** Field story: one deployment where the model worked and the project still stalled, because a rule nobody had written down made the tool's plans infeasible and operators stopped trusting it. No client names, here and all week.

**Slide 47.** The most important number of the morning for future FDEs: it defines their job. Ask: "If 40% of what the system needs is in heads, what does the first month look like?" Interviews, artifacts, sitting with people.

**Slide 48.** Ask a participant where a planner's schedule sits (bottom right) and where meeting-notes summarization sits (top left).

**Slide 50.** The 800% figure comes from Indeed data reported by the Financial Times in 2025. Quote it with its source.

**Slide 52.** Do not quote a demographic statistic unless you have a current source for the country of the room. The point is qualitative: rules leave with people. Marc is the Thursday example.

**Slide 53.** Close the argument on: "In every rollout that worked, someone played the FDE role. In the ones that stalled, nobody did." Pause.

### The FDE job definition (slides 55 to 74)

**Slide 56.** Read the definition slowly.

**Slides 57 to 60.** The job description in four slides: where you sit, what you do, what you are measured on, what you are not. Spend most time on slide 59: "gain signed by finance" is the measure that changes behavior.

**Slide 60.** Ask the room which column they have worked in before. The consultant stops at the recommendation and the developer at the ticket; the FDE stops when the gain is in the client's numbers.

**Slide 61.** The FDE/product engineer line matters for slide 68: you escalate, you do not fork.

**Slide 63.** Adjust the ladder to the HR framework agreed with Devoteam before delivery.

**Slide 65.** Make it concrete: being at the 6:45 handover is how you hear what the systems do not say.

**Slide 66.** Draw the loop on the whiteboard; it returns on Day 2.

**Slides 70 and 71.** These are OSS's own lessons, including failures; say so.

**Slide 73.** The works-council point surprises engineers; it returns on Days 3 and 4.

**Slide 74.** Three minutes. Ask two people to read their definition aloud. Reward the one that names a measured result.

### Where FDEs work (slides 75 to 90)

This section answers "what will I actually work on?". Keep the proof points short and factual; do not add client names or figures beyond the slides. Never confirm which companies are behind Friday's cases.

**Slide 76.** Four families, chosen for this week. Say that maintenance, energy and safety are real use cases too, and that the method on slide 78 applies to them unchanged.

**Slide 77.** Ask the participants who work outside plants (logistics, field service, utilities) to give one example from their own operation for one cell.

**Slide 78.** The six questions are the reading grid for every use case of the week and of their career. Leave it on screen during the Polymex exercise.

**Slides 79 to 86.** One card and one proof point per family. On each card, read the trap aloud: it is what participants will meet first on site. On the Oplit slide, insist on the framing: the same team produces more.

**Slide 87.** For utilities and field service, the "floor" is distributed. Shadowing a technician for a day is the equivalent of the night shift.

**Slide 90.** Model answer for Polymex: planning and scheduling (sequence on extrusion, daily; data in the shift log, SAP and Corinne's workbook; owner Corinne) passes all five tests and is where the week starts. Quality (scrap 4.2%, release by the lab) and inventory (DIO 78 days against about 55) come up on Day 2. Recipes exist (compound formulations) but nobody in the cast owns them yet: a good question for Hervé.

**Slide 69.** Every email, file, discussion and meeting recording, the same day, with consent. The client owns the bundle. The afternoon's Part 7 goes deep.

### The context of the role (slides 91 to 104)

Fast: ten minutes for sixteen slides. Say that every one returns in depth later in the week, so nobody takes notes yet.

**Slide 92.** Ask who in the room has met a plant controller. Few will have. They meet one on Tuesday.

**Slide 93.** The rule: never propose a change to someone who does not decide it, without the person who does.

**Slide 95.** If anyone has attended a morning production meeting, ask them for one sentence on what it felt like.

**Slide 97.** Polymex is process manufacturing. Friday's second case is a hybrid.

**Slide 102.** Non-negotiable. Read the five rules aloud.

**Slide 103.** This is the first-week plan participants will reuse in their 30/60/90 on Friday.

**Slide 104.** Read it, then move straight to the lab.

### Lab brief (slides 105 to 119)

Six minutes for sixteen slides: most are reference for the build, shown and left in the repository.

**Slide 106.** Introduce Polymex as a real place: "You will live here until Thursday."

**Slide 108.** Name the cast; reveal nothing about them beyond the table.

**Slides 110 and 111.** The two definitions teams need. Leave slide 110 on screen during the build.

**Slide 113.** The two-pair design is the lesson. Pair B must not look at Pair A's code. With three people, the Verifier works alone.

**Slide 114.** Tell Builders to paste this prompt first. It is how they meet the traps before the traps meet them.

**Slide 116.** Put this on the second screen if you have one.

## Running the lab

Timeline: 11:08 start; 11:28 call "15 minutes"; 11:38 call "5 minutes, push and deploy now"; 11:43 demos.

Circulate in this order: first check every team has started (repo cloned, Claude Code running), then every five minutes ask a Verifier "what have you checked so far?"

### Hint ladder for stuck teams (give one hint at a time)

1. "Have you asked Claude Code to profile the data before computing anything? Look at rule 1 in `CLAUDE.md`."
2. "Plot output per shift over the 90 days. Is anything physically impossible?"
3. "Your OEE is above 100%. Which rows drive output?"
4. "Count the rows per date and shift. Are they all the same?"

### Answer key (facilitator only)

All values on the cleaned data: kg rows divided by 1,000, duplicate rows removed, the missing shift left missing, the planned shutdown kept with zero planned time. Full detail in `facilitator/answer_key_day1.json`.

| Metric | Value |
|---|---|
| Plant extrusion OEE, January to March | 59.5% (availability 73.4%, performance 86.3%, quality 93.9%) |
| Good output | 20,579 t over 90 days, 228.7 t a day; January 233.6 t a day, March 223.9 t a day |
| Changeovers per week | 49 in the week of 5 January, 71 in the week of 23 March |
| Changeover share of planned time | 7.5% in January, 10.3% in March |
| Good tonnes lost in March to the extra changeovers, at January's rate | about 272 t |
| M07 OEE | 54.4% (performance 77.6% against about 88% for the rest of the fleet, logged downtime normal) |
| M07 output lost against fleet performance | about 376 t, 1.6 days of plant output |
| M02 OEE | 54.7% (logged downtime 16.1% of planned time against 7.7% for the others) |
| M04 performance, weekdays against weekends | 89.9% against 75.2%; scrap 6.0% against 9.6% |
| Performance by shift | A 87.6%, B 87.5%, C 83.9% |
| Constraint | Extrusion. Waiting time per day: extrusion 34 unit-minutes starved and 25 blocked; mixing 1,169 blocked; packing 1,658 starved. |

Pair B's three numbers: plant OEE 59.5%; M07 OEE 54.4%; 71 changeovers in the week of 23 to 29 March.

### The four traps, and how to spot a team that fell in

| Trap | What it is | The tell |
|---|---|---|
| Units | M06, shift B, 22 to 24 January: output and scrap logged in kilograms | Total output around 54,000 t instead of 21,900 t; plant OEE around 147%; a spike in late January |
| Duplicates | 11 March, shift A, all seven machines appear twice | A spike on 11 March; slightly inflated March figures |
| Missing shift | 17 February, shift C, absent for all machines (logger outage) | A dip on 17 February; averages "per shift" quietly wrong |
| Planned shutdown | M03 on 1 March, planned_min = 0 on three shifts | Division by zero, "NaN" or "Infinity" in a per-row OEE |

A team that averages per-row OEE ratios instead of summing minutes and tonnes gets a slightly different number; that is the classic "average of ratios" error from habit 4 on slide 115.

### Acceptable insights for Hervé (any one, with its number)

- M07 lost about 376 tonnes in the quarter, 1.6 days of plant output, to stops nobody logs: its logged downtime is normal but its performance is 10 points below the fleet. (Sets up Day 4: data archaeology.)
- M04 runs nearly 15 points slower and scraps half again as much at weekends. Something about the weekend crew differs. (Sets up Day 4: the operator's workaround.)
- Changeovers rose from 49 to 71 a week as retail orders grew; in March they cost about 272 good tonnes against January's rate. (Sets up Day 2 and Day 3.)
- M02 loses twice the downtime of any other line.
- The night shift runs about 4 points slower than the day shifts.

The strongest demos tie the insight to a decision Hervé could take.

## Demos and debrief

Two and a half minutes per team, timer visible, then thirty seconds of feedback from you. Feedback follows the same pattern every time: one thing that would convince Hervé, one thing he would challenge.

If time allows, three debrief questions, one minute each, written live on slide 119:

1. "Which anomalies did Claude Code find on its own, and which did a human catch?" Land the point: the tool profiles fast when asked; the human decides what is plausible in a plant.
2. "Where did Pair B disagree with Pair A, and who was right?" Celebrate every disagreement that was found and resolved.
3. "Which insight would make Hervé do something on Monday?" Land the point: an insight is worth something only if it changes a decision.

## Facts to check before delivery

| Slide | Claim | Source to confirm |
|---|---|---|
| 41 | About 95% of pilots without measurable P&L impact; partners about twice as successful | MIT NANDA, The GenAI Divide, July 2025 |
| 49 | About 800% growth in FDE postings, January to September 2025 | Indeed data, Financial Times, 2025 |
| 52 | 22 companies, about 3,800 sites, about 200,000 monthly users | OSS Ventures portfolio tracker, refresh with the latest board figures |
| 98 | 16% to 54% accuracy | Sequeda, Allemang and Jacob, arXiv 2311.07509 |
| 44 | Electrification: motors from the 1880s, productivity surge in the 1920s | Paul A. David, The Dynamo and the Computer, AER 1990 |
