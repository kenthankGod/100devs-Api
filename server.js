const express = require("express");
const app = express();
const PORT = 3000;

const players = {
  "cristiano ronaldo": {
    "age": 37,
    "place of birth": "Portugal",
    "position": "foward",
    "skill": "knuckle ball",
  },
  "david de gea": {
      "age": 34,
      "place of birth": "Spain",
      "position": "Goalkeeper",
      "skill": "foot catcher"
  },
  "jadon sancho": {
      "age": 23,
      "place of birth": "England",
      "position": "winger",
      "skill": "flip dribble"
  },
  "harry maguire": {
      "age": 28,
      "place of birth": "England",
      "position": "Defender",
      "skill": "aerial duel"
  },
  "raphael varane": {
      "age": 28,
      "place of birth": "France",
      "position": "Defender",
      "skill": "speed recovery "
  },
  "diego dalot": {
      "age": 28,
      "place of birth": "portugal",
      "position": "Defender",
      "skill": "speed recovery "
  },
  "unknown": {
        "error": "unknown"
  }
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const playerName  = request.params.name.toLowerCase().trim()
  if (players[playerName]) {
      response.json(players[playerName])
  } else {
    response.json(players["unknown"])
  }
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
