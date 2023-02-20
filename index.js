

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv').config();


const app = express()
const port = 5000

// const query="top-headlines?country=de";



app.use(cors());
app.use(express.json());
// app.use('*', (req, res)=>{res.status(404).json({error:"page not found"})})



app.get('/news/:query', async (req, res) => {
  try {
    console.log(req);
    const query=decodeURIComponent(req.params.query);
    const response = await axios.get(`https://newsapi.org/v2/${query}&apiKey=${process.env.NEWS_API_KEY}`);
    const news = response.data.articles;
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error yo', error);
  }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/bbc', (req, res) => {
    res.send('Hello bbc!')
  })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

