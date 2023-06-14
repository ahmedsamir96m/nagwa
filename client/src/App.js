import React, { useEffect, useState } from "react";
import RankScreen from "./components/RankScreen";
import PracticeScreen from "./components/PracticeScreen";
import ProgressBar from "./components/ProgressBar";
import { fetchWords } from "./helpers/fetchWords";

const App = () => {
  const url = process.env.REACT_APP_BASE_URL;
  const [words, setWords] = useState([]);
  const [answers, setAnswers] = useState([
    "verb",
    "adverb",
    "noun",
    "adjective",
  ]);

  let [score, setScore] = useState(0);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [currentWord, setCurrentWord] = useState({});

  // I Fetched words in here instead of practice screen because i'm passing the words array to RankScreen
  useEffect(() => {
    fetchWords(url, setWords);
  }, [url]);

  useEffect(() => {
    setCurrentWord(words[0]);
  }, [words]);

  return (
    <section>
      <h1>Nagwa Quiz</h1>
      
      <div>
        <h2>Progress</h2>
        <ProgressBar
          width={((words?.indexOf(currentWord) + 1) / words?.length) * 100}
        />
      </div>

      <div id="words">
        {/* <button onClick={() => sendAnswers({ answer: 50 })}>
          Submit
        </button> */}
        {!showFinalResult ? (
          <PracticeScreen
            words={words}
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
            answers={answers}
            score={score}
            setScore={setScore}
            setShowFinalResult={setShowFinalResult}
          />
        ) : (
          <RankScreen score={score} words={words} />
        )}
      </div>
    </section>
  );
};

export default App;
