import React, { useState } from "react";

const PracticeScreen = ({
  words,
  currentWord,
  setCurrentWord,
  answers,
  score,
  setScore,
  setShowFinalResult,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  return (
    <div>
      <h3>Chose the correct answer of the following</h3>

      {/* Question Card */}
      {currentWord?.word}

      {/* Answers */}
      <form>
        <ul>
          {answers?.map((answer, index) => (
            <li key={index}>
              <button
                name="answer"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentAnswer(answer);
                  console.log(answer === currentWord?.pos);
                  if (answer !== currentWord?.pos) {
                    setWrongAnswer(true);
                    setCorrectAnswer(false);
                  } else {
                    setWrongAnswer(false);
                    setCorrectAnswer(true);
                  }
                }}
                disabled={wrongAnswer}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={(e) => {
            e.preventDefault();
            let wordIndex = words.indexOf(currentWord);
            if (wordIndex > 0 && wordIndex === words.length - 1) {
              setShowFinalResult(true);
            } else {
              let nextWord = words[words.indexOf(currentWord) + 1];
              setCurrentWord(nextWord);
            }
            if (currentAnswer === currentWord?.pos) setScore((score += 1));
            setWrongAnswer(false);
            setCorrectAnswer(false);
          }}
        >
          Next
        </button>
      </form>
      {wrongAnswer ? <div>Wrong Answer</div> : null}
      {correctAnswer ? <div>Correct Answer</div> : null}
    </div>
  );
};

export default PracticeScreen;
