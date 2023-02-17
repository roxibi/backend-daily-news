import cors from 'cors'

const express = require('express')

const app = express()
const port = 5000

app.use(cors());
app.use(express.json());
app.use('*', (req, res)=>{appres.status(404).json({error:"not found"})})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tech', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/bbc', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

export default app