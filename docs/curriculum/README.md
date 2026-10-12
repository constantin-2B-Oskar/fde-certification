# Curriculum sources (trainers only)

Nothing in this folder is served by the site.

- `source-files.zip`: the curriculum as uploaded by Renan.
- `source-files-day1-final.zip`: the final Day 1 material. Decks are converted with `npx tsx scripts/deck-html.ts <deck>.dc.html public/resources/<name>.deck.html`.
- `facilitator/program-guide.md`: the full program guide. Participants get `public/resources/fde-school-your-week.md`, the same text without the Polymex cast (it reveals Day 4 material), the facilitation principles, the materials index, the design conventions and trainer-only lines.
- `facilitator/`: facilitator guides and the Day 1 lab kit's answer key and data generator. They contain model answers and things not to reveal to participants.

Participant material lives in `public/resources/` (behind the site password) and is listed in `content/resources.json`.
