import React, { Children, useEffect, useState } from "react";

const App = () => {
  const url = "http://localhost:3001/";
  const [words, setWords] = useState([]);
  const [answers, setAnswers] = useState([
    "verb",
    "adverb",
    "noun",
    "adjective",
  ]);
  const [score, setScore] = useState(0);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    try {
      fetch(`${url}words`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWords(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setCurrentQuestion(words[0]);
  }, [words]);

  const sendAnswers = async (data = {}) => {
    const response = await fetch(`${url}ranks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  };

  return (
    <section>
      <h1>Nagwa Quiz</h1>
      <div id="words">
        {/* <button onClick={() => sendAnswers({ answer: 50 })}>
          Submit
        </button> */}
        {!showFinalResult ? (
          <div>
            <h2>Question 1 of 5</h2>
            <h3>Chose the correct answer of the following</h3>

            {/* Question Card */}
            {currentQuestion?.word}

            {/* Answers */}
            <form>
              <ul>
                {answers?.map((answer, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name="answer"
                      id={answer}
                      value={answer}
                      onClick={(e) =>
                        console.log(e.target.value === currentQuestion.pos)
                      }
                    />
                    <label htmlFor={answer}>{answer}</label>
                  </li>
                ))}
              </ul>
            </form>
          </div>
        ) : (
          <div>
            <h2>Final Result</h2>
            <h3>1 out of 5 correct</h3>
            <button>Restart </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
