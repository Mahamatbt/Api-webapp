// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

// Correct route with parameter
app.get('/news/:query', async (req, res) => {
  try {
    const { query } = req.params; // Get query from URL parameter
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});