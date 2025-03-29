const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static('public'));

// News endpoint
app.get('/news/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    );
    
    res.json(response.data.articles);

  } catch (error) {
    console.error("NewsAPI Error:", error.message);
    res.status(500).json({ 
      error: "Failed to fetch news",
      details: error.response?.data?.message || "Unknown error"
    });
  }
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});