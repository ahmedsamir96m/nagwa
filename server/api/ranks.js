import express from "express";
import wordsJSON from "../TestData.json" assert { type: "json" };

const router = express.Router();

let scoresList = wordsJSON.scoresList;

// FUNCTION TO CALC RANK PERCENTILE
const calcPercentile = async (answer) => {
  const userScore = answer?.answer;
  let belowScoresOccur = 0;
  for (let index = 0; index < scoresList.length; index++) {
    if (userScore > scoresList[index]) {
      belowScoresOccur += 1;
    }
  }
  let finalScore;
  finalScore =
    ((belowScoresOccur / scoresList.length) * 100).toFixed(2) % 1 > 0
      ? +((belowScoresOccur / scoresList.length) * 100).toFixed(2)
      : Math.round(((belowScoresOccur / scoresList.length) * 100).toFixed(2));
  console.log(userScore);
  return {
    rankPercentile: finalScore,
  };
};

router.get("/ranks", (req, res) => {
  res.send("ranks");
});

router.post("/ranks", async (req, res) => {
  let answer = req.body;
  let rankPercentile = await calcPercentile(answer);
  res.status(200).send(rankPercentile);
});

export default router;
