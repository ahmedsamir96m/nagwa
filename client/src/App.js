import React, { useEffect, useState } from 'react'

const App = () => {
  const url = 'http://localhost:3001/'
  const [words, setWords] = useState([])

  useEffect(() => {
    try {
      fetch(`${url}words`).then(res => {
        return res.json()
      }).then(data => {
        setWords(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log(words)

  const sendAnswers = async (data = {}) => {
    const response = await fetch(`${url}ranks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    console.log(JSON.stringify(data))

    return response
  }

  return (
    <section>
      <div id='words'>
        <button onClick={() => sendAnswers({ answer: 50 })}>
          Submit
        </button>
        {words?.map((word, index) => {
          return <div>

          </div>
        })}
      </div>
    </section>
  )
}

export default App