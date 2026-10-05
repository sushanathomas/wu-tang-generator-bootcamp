# 🎤 Week08 Bootcamp2019a Project: Wu-Tang Name Generator

### Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and, based on those answers, randomly generate their name. The name doesn't have to be an exact name, but a Wu-Tang-sounding name. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

## Project Preview

<img width="1115" height="907" alt="Screenshot 2026-10-05 at 3 20 04 PM" src="https://github.com/user-attachments/assets/37514dee-29f6-448d-a49a-f4de71dd3dd1" />

# Wu-Tang of Westeros

A Game of Thrones-themed name generator built for the Resilient Coders Wu-Tang name generator challenge.
Answer five survey questions to discover a randomly generated Wu-Tang-style name inspired by Westeros.

## How it works

1. Select one answer for each of the five questions.
2. Click **Generate a name**.
3. Your answers are sent to the Node.js server.
4. The server finds the most selected answer letter and randomly combines a first and last name from that group.
5. Your generated name appears below the button.

If any questions are unanswered, the page displays **PROTECT YA NECK!**

## Built with

- HTML
- CSS
- JavaScript
- Node.js built-in modules: `http`, `fs`, `url`, and `querystring`

## Run locally

You need Node.js installed.

From the project folder, run:

```sh
node server.js
```

Open **http://localhost:8000** in your browser. If you changed the port in `server.js`, use that port instead.

No additional packages are required.

## Project structure

```text
wu-tang-generator-bootcamp/
├── index.html
├── server.js
├── CSS/
│   └── wuTang.css
├── JS/
│   └── wuTang.js
└── README.md
```

## Challenge

Create a name generator that asks five survey questions and randomly generates a Wu-Tang-style name based on the answers.

Assignment: [Resilient Labs Wu-Tang Generator](https://github.com/Resilient-Labs/wu-tang-generator-bootcamp)


