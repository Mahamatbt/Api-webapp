const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/news/:query', async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${req.params.query}&apiKey=${process.env.API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});