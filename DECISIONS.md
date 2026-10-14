# Decisions

Every default taken or changed, one line each. The spec is docs/SPEC.md.

## Build (4 October 2026)

- Open decisions 1 to 11 of the spec: all on their defaults (pass marks 70/70/75%, 24-month validity, no score on the certificate, English only, AI badge shown, closed book with tab leaves recorded).
- Signatory (open decision 9): only Renan Devillières, OSS Ventures, until the Devoteam signatory is named in `lib/config/site.ts`. PDFs render on demand, so adding a name updates every certificate.
- Privacy page (open decision 7): controller, legal basis and contact are placeholders in `lib/config/site.ts`.
- Database driver: `pg` (node-postgres) instead of Neon's serverless driver. Same code runs against a local Postgres in tests, and it supports real transactions (used to lock an attempt while it is finalized). Neon accepts standard connections; `@vercel/functions` closes idle connections.
- Migrations run automatically before every build (`npm run build` runs `scripts/migrate.ts`), so nobody has to run `db:migrate` by hand. Without a database URL the step is skipped.
- Email through Resend's HTTP API with `fetch`, not the `resend` package: one request, one dependency fewer. Email stays off until `RESEND_API_KEY` and `EMAIL_FROM` exist.
- Fonts: Archivo through `next/font/google` for the site; static TTFs for the PDF (Regular, SemiBold, Bold, Condensed Bold at width 70, IBM Plex Mono Medium) fetched from Google Fonts into `assets/fonts/`.
- Framework preset and function region are set in `vercel.json` (`nextjs`, `fra1`), because the Vercel project had no framework preset.
- Vercel environment: SITE_PASSWORD, ADMIN_PASSWORD (generated), SESSION_SECRET (generated) and APP_URL set for Production and Preview; ENABLE_TEST_TRACK=true and BANK_SERVE=all on Preview only, so rehearsals work on previews before any question is validated.
- `bank:check` coverage: an error when the written (non-retired) bank cannot fill a cell, a warning when the served (validated) bank cannot. Otherwise every deploy would fail until the review is done.
- Banned-term check: "DiscoverY" is matched case-sensitively, so the ordinary word "discovery" passes.
- Test-wise pass (spec section 17, step 4): a deterministic cue solver (`lib/bank/testwise.ts`: longest option, words repeated from the stem, absolute words) instead of a second model, because a model cannot set aside domain knowledge. It answered 6 of 481 items from cues; those 6 were rewritten, now 0.
- Blind re-solve: 6 agents re-answered all 481 items without the key; 481 of 481 matched the key and none was rated ambiguous (2 or more). Agreement between models from the same family is weaker evidence than a human review, so the generators' own doubts are kept as reviewer notes (`content/review/notes.json`, 73 items) and shown as flags in `content/review/bank-review.md`.
- Bank: 481 items written (launch target), all `draft`. Exams on Production open once Renan validates items (`status: "validated"`); until then they show "This exam opens soon".
- A voided attempt keeps any certificate it produced; revoke the certificate separately if needed.
- The "Further reading" Medium link still points to the OSS Ventures publication page; swap in the exact essay URL when available (Medium blocks automated link checks).
- The pass-mark line on the result bars uses the fail red, to stand out from the ink bars.

## First deployment (4 October 2026)

- Renan's decision: Production serves the draft bank (`BANK_SERVE=all` on Production) so the three exams open now; he reviews and corrects questions afterwards. To serve only validated questions again, delete `BANK_SERVE` for Production in Vercel and redeploy.

## Humans, Agents and the new homepage (4 October 2026)

- Humans directory (`/humans`, behind the site password): anyone with access adds their own page (name, organization, self-declared community role, short bio, LinkedIn link, picture). "Certified" is never self-declared: a profile shows the valid certificates issued to its email (rehearsal certificates excluded). The email is never shown.
- Edit rights without accounts: the browser that created a page keeps a signed cookie for a year, and the creator gets a private edit link (only its SHA-256 is stored). Admins can edit, hide or delete any page; "delete everything for an email" also deletes the page.
- Pictures are cropped to a 400 px square JPEG in the browser and stored in Postgres (about 30 KB each): no file storage service to set up.
- Known limit: without email verification, someone could create a page with another person's email and borrow their certifications. The directory is behind the shared password and admins can hide pages; email verification (spec "Later") would close it.
- Renan and Nicolas are seeded as trainers by migration `drizzle/0002_seed_trainers.sql`. Nicolas's last name is unknown; admins can add it from his page.
- Agents page (`/agents`, plus the same text as Markdown at `/agents.md`) is public on purpose, so AI assistants can read it without the password. Source: `content/agents.md`.
- Homepage rewritten: what the FDE School is, then a map of the site, then the exams.

- FDE basics skill (`content/FDEbasics.md`, public at `/FDEbasics.md`): the doctrine of spec section 18 rewritten as working rules for an AI assistant, in Claude Code skill format (name `fde-basics`). Installed by saving it as `~/.claude/skills/fde-basics/SKILL.md`; the Agents page gives the command.

## Course material (4 October 2026)

- Renan's curriculum upload (`docs/curriculum/source-files.zip`): participant files go to `public/resources/` (behind the password) and are readable on the site at `/resources/read/<file>`; slide decks render one framed panel per slide. Facilitator guides and the lab kit's answer key and generator stay in `docs/curriculum/facilitator/`, never served: they hold model answers and "things not to reveal".
- The Day 1 lab kit is served as `fde-school-day1-participant-kit.zip`, rebuilt from the `participant/` folder only.
- Renan asked for cards on the Resources page; this replaces the spec's "no rows of identical cards" rule for that page only. Cards differ by state: available (ink border) or coming soon (grey).
- The program guide is a facilitator document (its materials index says so) and its Polymex cast table reveals the consolidation rumor the Day 1 facilitator guide says not to reveal. Participants get "Your week", the same text minus the cast table, facilitation principles, materials index, design conventions and trainer-only lines. The full guide stays in `docs/curriculum/facilitator/`.
- Polymex has its own page, `/resources/polymex` (Renan's request, 12 October 2026): the full kit as one zip, each participant file downloadable on its own (`public/resources/polymex-plant-pulse/`), and the brief and data dictionary readable on the page. Linked from the top of the Resources page and from the Day 1 lab kit card. The upload matched the kit already served; the answer key and generator still stay in `docs/curriculum/facilitator/`.

## Course material, Days 2, 3 and 5 (8 October 2026)

- Renan's second upload (one zip per day, Day 4 missing, plus the updated program guide) is archived untouched in `docs/curriculum/source/`. Participant files follow the Day 1 pattern: deck content and handouts to `public/resources/`, readable on the site; facilitator guides, answer keys, generators and the Day 3 holdout evals to `docs/curriculum/facilitator/`.
- The Day 3 lab kit is served as `fde-school-day3-participant-kit.zip`, rebuilt from the `participant/` folder only. The new Day 1 kit is identical to the one already served, and the Day 1 texts differ only in file names in their comments, so Day 1 is unchanged.
- The designed `.dc.html` decks are not served: they need a `shared/` folder (fonts, images, slide engine) that was not uploaded. The site keeps rendering decks from their Markdown content.
- The Day 5 afternoon deck is held back ("Available after the session"): it tells what really happened in both Friday cases, which the facilitator guide keeps for the 13:30 debrief. The Day 5 case packs and handouts are published.
- Day 4 stays "Available after the session" until its material is uploaded.
- `docs/curriculum/**` is excluded from lint: it holds the trainers' generators as uploaded.

## Day 1 final material (12 October 2026)

- Renan's final Day 1 upload (`docs/curriculum/source/day1-final.zip`) replaces the Day 1 decks (now 122 slides each), exercises (now five), facilitator guides and the participant lab kit (adds a `knowledge/` folder). The lab answer key and generator are unchanged.
- This reverses the 8 October call not to serve the `.dc.html` decks. The decks exported from Claude Design (`*.dc.html`) need the tool's runtime and a `../shared/` folder that was not in the upload. `scripts/deck-html.ts` turns each into one self-contained page (`public/resources/*.deck.html`): the slides as exported, scaled to the window, with arrows, click, swipe and full screen, no React and no runtime. Fonts come from Google Fonts; the logo is the site's official file.
- The photos the decks use (`factory-floor.jpg`, `gear-steam.png`, `sundial.png`) were not in the upload. They are expected in `public/resources/img/`; until then the slides show without them (dark background).
- Slides cards: "View slides" opens the HTML deck in a new tab; "Read as text" keeps the Markdown version (readable on a phone and by screen readers).
- Day 1 recording: the Circleback meeting link Renan gave. Viewers may need access on Circleback.

## Pre-reads and the final Day 2 material (12 October 2026)

- Day 1 feedback page (`d2-day1-feedback.md`), first card of Day 2, with Renan's three points and actions.
- A pre-read per day (`dN-pre-read.md`, kind "Pre-read"), first card of each day (second on Day 2, after the feedback). Written from participant material only (decks, handouts, Your week, glossary), never from `docs/`. Day 4's is built from the week overview and glossary until its decks arrive; its change curve uses the Day 1 deck's stages, not the glossary's, so participants see one version.
- Renan's final Day 2 upload (`docs/curriculum/source/day2-final.zip`): new morning deck (63 slides: types of manufacturing, lean, maturity, problems worth solving, then a lab on the whole Polymex group), afternoon deck lightly edited, both decks viewable as slides, new exercises and facilitator guides, and the Day 2 pre-read rewritten to match.
- The Polymex knowledge bundle is participant material (the facilitator guide has teams download it at 10:45). Served as `fde-school-polymex-knowledge-bundle.zip`, from a Day 2 card and from the Polymex page. Its two "things not to reveal" concern the trainer's reading of it, not its content.
- "The total view of an FDE project" (the ten minutes that open Day 2, PDF) is published as `d2-total-view-of-an-fde-project.pdf`. Its last page named Lyon as Tuesday's choice, which is the answer to the Day 2 morning lab; on Renan's decision the line now reads "choose where to start" (re-set in Inter at the original size). The original stays in `docs/curriculum/source/day2-total-view-original.pdf`.

## Final Day 3 material and the Day 2 feedback (13 October 2026)

- Day 2 feedback page (`d3-day2-feedback.md`), first card of Day 3, with Renan's three points and answers.
- Renan's final Day 3 upload (`docs/curriculum/source/day3-final.zip`) replaces the whole day: the case is now planning at Lyon. New cards: "LLMs and agentic systems in 30 minutes" (21 slides), the morning deck (43) and the afternoon deck (33), all viewable as slides; the morning and afternoon exercises; the morning lab kit (`fde-school-day3-am-lyon-planning-kit.zip`) and the afternoon lab kit (`fde-school-day3-pm-lyon-planning-v1-kit.zip`), each rebuilt from `participant/` only; the rule register; the Lyon Planner app (`fde-school-lyon-planner-app.zip`). The old Day 3 decks, exercises and Plant Pulse v1 kit are removed from the site (still in `docs/curriculum/source/day3.zip`); the Day 3 pre-read is rewritten from the new material; "Your week" and the Day 4 pre-read point to the new Day 3.
- The slides the deck marks "reveal after the readouts" (morning 26 to 30 and 41, afternoon 18 and 19) give the answers to the exercises, so the site shows a "shown in the room, after the exercise" slide in their place until after the session (`scripts/deck-html.ts --hold`). The shape of the answer still shows in the afternoon material, which builds on it.
- Kept for trainers, not served: the facilitator guides, both answer keys, the script for playing Corinne, the reference orchestrator and permissions, the six reference outputs of the morning, and the "Rules and execution capture" preview, which needs the design tool's runtime. The afternoon handout now points to the Lyon Planner app instead of that preview.
- The afternoon kit is for the manager and FDE tracks, like the old Day 3 kit; the morning kit and the Lyon Planner app are for every track.
- The pictures the new decks use (`man-and-machine.jpg`, `robot-arm.png`, plus `factory-floor.jpg`, `gear-steam.png`, `sundial.png`) are still not uploaded; until they are in `public/resources/img/`, the slides show without them.
- Fourth Day 2 feedback point (prompting Claude): a one-pager, "Working with Claude" (`fde-school-working-with-claude.md`), in "Start here". Written from the course material (the Day 1 prompt slides, the kits' `CLAUDE.md`, the Day 3 "Prompts that work"); the Day 4 line is built from the Day 4 pre-read until its material arrives. Renan to review.
- Renan asked (14 October) to publish the Exercise 2 reference output, "What good looks like", on Day 3. It is served as a standalone page (`d3-am-exercise-2-what-good-looks-like.html`): the Claude Design poster without its runtime, fonts from Google Fonts, scaled to the window. A card whose `deck` is not a slide deck now says "Open" instead of "View slides".
