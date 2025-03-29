# News Aggregator

## Features
- Search for news articles by keyword
- Display titles, descriptions, and links

## Setup
1. Clone repo: `git clone https://github.com/your-repo`
2. Install dependencies: `npm install`
3. Add NewsAPI key to `.env`
4. Start server: `node server.js`

## Deployment
- Web servers: Node.js + PM2
- Load balancer: HAProxy (round-robin)
- API: NewsAPI (https://newsapi.org)