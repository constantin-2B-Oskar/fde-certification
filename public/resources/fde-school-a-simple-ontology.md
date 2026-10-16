# A simple ontology, step by step

*Written after Day 4 feedback: "do a simple example of an ontology". Fifteen minutes. First a tiny bakery, then the same five steps on Lyon planning, then where to see a real one.*

## What an ontology is, in one sentence

An ontology is the list of **things** a business deals with, the **links** between them, the **facts** we know about each, the **rules** that constrain them and the **actions** people can take, written once, with names everyone agrees on.

It is not a database and not a diagram for its own sake. It is the shared vocabulary that people, code and a language model all use, so that "an order", "a line" or "a late delivery" means the same thing to all three.

## A tiny example: a neighborhood bakery

Camille runs a bakery with two ovens. Every evening she plans tomorrow's baking from the orders.

### Step 1. The things (object types)

| Object type | One example (instance) |
|---|---|
| Product | Baguette |
| Order | Order 1042: 40 baguettes for the Café du Port, by 7:00 |
| Customer | Café du Port |
| Oven | Oven A |
| Batch | Batch 7: 60 baguettes in oven A at 5:10 |

A **type** is the kind of thing (Order); an **instance** is one real thing (order 1042). The ontology defines types; the data fills in instances.

### Step 2. The facts about each thing (properties)

| Object type | Properties |
|---|---|
| Product | name, baking time (minutes), oven temperature (°C) |
| Order | quantity, due time, status (open, baked, delivered) |
| Oven | capacity (pieces per batch), current temperature |
| Batch | start time, quantity, oven |

Units are part of the definition: "baking time in minutes", not "baking time".

### Step 3. The links

- An **order** is placed by one **customer** and asks for one **product**.
- A **batch** bakes one **product** in one **oven**.
- A **batch** serves one or more **orders**.

Now a question that crosses several things has an answer: "Which customers are late if oven A breaks at 5:00?" Follow the links: oven A → its batches → their orders → their customers.

### Step 4. The rules

| Id | Rule | Source | Owner |
|---|---|---|---|
| R1 | Croissants and baguettes cannot share an oven: 180 °C against 250 °C | Camille | Camille |
| R2 | An oven needs 20 minutes to change temperature | Oven manual | Camille |
| R3 | Café orders must be ready by 7:00 | Customer contracts | Camille |

Every rule has an id, a source and an owner, so it can be checked, tested and changed by the right person. A rule that lives only in Camille's head is the first thing an FDE writes down.

### Step 5. The events and actions

- **Events** change the plan after it is made: "Café du Port adds 20 baguettes at 5:30", "oven B is down".
- **Actions** are what a person or the system is allowed to do: move a batch to the other oven, split an order, tell a customer the order will be late.

### What it buys you

- **People** recognize their bakery in it and correct it: "R2 is 30 minutes in winter."
- **Code** uses it as types: a planner cannot schedule a batch with no oven, and a solver can respect R1 to R3.
- **A language model** uses it as vocabulary: it turns the café's 5:30 text message into an event with fields that already exist (customer, product, quantity, time), instead of free prose.

## The same five steps at Lyon (Days 3 and 4)

| Step | Bakery | Lyon planning at Polymex |
|---|---|---|
| Things | Product, order, customer, oven, batch | Product, family, order, customer, line, shift, campaign |
| Facts | Baking time, due time | Run rate, color, due date, quantity, line capability |
| Links | A batch bakes one product in one oven | An order is for a product; a product belongs to a family; a line can or cannot run a family |
| Rules | R1: croissants and baguettes never share an oven | R07: black to natural takes 240 minutes and only on Saturday morning; each rule with a source (Corinne's notebook) and an owner |
| Events and actions | "Add 20 baguettes", move a batch | A date change by email, a breakdown, a quality hold; move an order, freeze a day, override with a reason |

On Day 4 you saw the consequence: when you scale to a new plant, **the core is reused** (product, order, line, rule, event) and **the edge is rebuilt** (local rules, local data sources, local language).

## Do it yourself in 20 minutes

Pick one process you know (a hospital ward, a warehouse, your own team's weekly planning) and fill in, on one page:

1. Five object types, with one real instance each.
2. Three properties per type, with units.
3. Four links, each written as a sentence ("an X has one Y").
4. Three rules, each with an id, a source and an owner.
5. Two events that change the plan, and two actions people may take.

Then ask one question that crosses at least three types, and check you can answer it by following the links.

## A real ontology, shown

- **Palantir ontology overview** (video, Palantir): the same objects, properties, links and actions, in a production platform. On the Resources page, under Further reading, "Ontology and data".
- **The ontology in a real case: oil and gas infrastructure** (video, Palantir): an ontology for an industrial network of assets.
- **Palantir Foundry documentation, "The ontology"**: object types, properties, link types and action types, defined precisely.
- **Sequeda, Allemang and Jacob (2023)**: on enterprise SQL databases, giving a language model a knowledge graph of the business multiplies the share of correct answers.
