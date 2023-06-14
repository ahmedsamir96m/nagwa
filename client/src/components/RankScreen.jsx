import React, { useEffect, useState } from "react";
import { sendAnswers } from "../helpers/sendAnswers";

const RankScreen = ({ score, words }) => {
  const url = process.env.REACT_APP_BASE_URL;
  const [rank, setRank] = useState({ rankPercentile: 0 });

  useEffect(() => {
    // multi by 10 as the backend scores starts from 0 to 100, i decided to do it from here instead of server side
    sendAnswers({ answer: score * 10 }, url, setRank);
  }, [score, url, rank?.rankPercentile]);

  console.log(rank);

  return (
    <div>
      <h2>Final Result</h2>
      <h3>
        {score} out of {words?.length} correct
      </h3>
      <div>
        <h4>Your Rank</h4>
        <p>{rank?.rankPercentile}</p>
      </div>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default RankScreen;
