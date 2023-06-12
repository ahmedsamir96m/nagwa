import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import wordsJSON from './TestData.json' assert { type: "json" };
import router from './api/ranks.js'

const app = express()
const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(cors({
  origin: "http://localhost:3000"
}))


let randomizedWords = wordsJSON.wordList

let randomWords = []
for (let i = 0; i < randomizedWords.length; i++) {
  if (!randomWords.includes(randomizedWords[i]) && randomWords[i]?.pos !== randomizedWords[i].pos) {
    randomWords.push(randomizedWords[i])
  }
}

app.get('/words', (req, res) => {
  res.json(randomWords.sort(() => Math.random() - Math.random()).slice(0, 10))
})

app.get('/ranks', (req, res) => {
  res.status(200).send('lool')
})


app.post('/ranks', router)


const port = 3001

app.listen(port, () => {
})
