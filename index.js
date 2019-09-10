"use strict";

const otherPlayer = player => (player === "A" ? "B" : "A");

const isGameWon = (scoreboard, lastPlayerToScore) =>
  scoreboard[lastPlayerToScore].score >= 4 &&
  scoreboard[lastPlayerToScore].score >
    scoreboard[otherPlayer(lastPlayerToScore)].score + 1;

const calcScore = str => {
  const scoreboard = str.split("").reduce(
    (scoreboard, player) => {
      scoreboard[player].score++;
      if (isGameWon(scoreboard, player)) {
        scoreboard[player].games++;
        scoreboard.A.score = 0;
        scoreboard.B.score = 0;
      }
      return scoreboard;
    },
    {
      A: { score: 0, games: 0 },
      B: { score: 0, games: 0 }
    }
  );
  return prettyScore(scoreboard);
};

const prettyScore = scoreboard => {
  const scoreMap = ["love", "15", "30", "40"];
  const { A, B } = scoreboard;
  if (A.score === B.score && A.score >= 3) {
    A.score = B.score = "deuce";
  } else if (A.score > 3 && A.score === B.score + 1) {
    A.score = "advantage";
    B.score = "";
  } else if (B.score > 3 && A.score + 1 === B.score) {
    A.score = "";
    B.score = "advantage";
  } else {
    A.score = scoreMap[A.score];
    B.score = scoreMap[B.score];
  }
  return scoreboard;
};

module.exports = { calcScore };
