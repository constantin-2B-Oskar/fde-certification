# Curriculum sources (trainers only)

Nothing in this folder is served by the site.

- `source/`: the curriculum as uploaded by Renan, untouched. `day1.zip`, `day2.zip`, `day3.zip` and `day5.zip` hold the designed decks (`.dc.html`), the deck content, facilitator guides, handouts and lab kits; `program-guide.md` is the full program guide; `day1-first-upload.zip` is the first Day 1 upload. Day 4 has not been uploaded yet.
- `source/day1-final.zip`: the final Day 1 material (122-slide decks, five exercises).
- `source/day3-final.zip`: the final Day 3 material (Lyon planning: the 30-minute LLM deck, new morning and afternoon decks, exercises, facilitator guides, two lab kits, the Lyon Planner app, the morning's reference outputs). It replaces the Day 3 material of `day3.zip`.
- `facilitator/program-guide.md`: the full program guide. Participants get `public/resources/fde-school-your-week.md`, the same text without the Polymex cast (it reveals Day 4 material), the facilitation principles, the materials index, the design conventions and trainer-only lines.
- `facilitator/`: facilitator guides for every session, and the lab kits' answer keys and data generators. They contain model answers and things not to reveal to participants. For Day 3: `day3-am-lab-kit/` (answer key), `day3-am-reference-outputs/` (the six posters shown after Exercises 1 and 2), `day3-pm-lab-kit/` (the script for playing Corinne, the answer key, the reference orchestrator and permissions for the catch-up key, and the interface preview).
- Day 3 decks: the slides that answer an exercise (morning 26 to 30 and 41, afternoon 18 and 19) are replaced on the site by a "shown in the room" slide. To publish them after the session, rerun `scripts/deck-html.ts` without `--hold` and copy the full `Deck content.md` from `source/day3-final.zip`.
- `facilitator/d5-pm-debrief-and-exam.deck.md`: the Friday afternoon deck, held back because it tells "what really happened" in both cases. To publish it after Friday morning, move it to `public/resources/` and set the `d5-slides-pm` item in `content/resources.json` to available, with `read` and `href`.

Participant material lives in `public/resources/` (behind the site password) and is listed in `content/resources.json`.

The designed decks (`.dc.html`) need a `shared/` folder that was not part of the upload, so they are converted into self-contained pages with `npx tsx scripts/deck-html.ts <deck>.dc.html public/resources/<name>.deck.html` (the site links them as "View slides"). The site also shows each deck from its `Deck content.md`, one panel per slide.
