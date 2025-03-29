# News Aggregator

The News Aggregator is a web application that allows users to search for news articles on any topic. It fetches real-time data from NewsAPI, displays articles in a clean interface, and supports filtering by keywords. The app is deployed on AWS infrastructure with HAProxy load balancing for high availability.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Links](#links)
- [How It Works](#how-it-works)
- [Setup Instructions](#setup-instructions)
  - [Local Setup](#local-setup)
  - [Server Setup](#server-setup)
- [Deployment](#deployment)
  - [Web Servers (Nginx)](#web-servers-nginx)
  - [Load Balancer (HAProxy)](#load-balancer-haproxy)
- [Development Challenges](#development-challenges)
- [Acknowledgments](#acknowledgments)

---

## Features
- **Search Articles**: Search for news by keyword (e.g., "technology", "sports").
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Article Details**: Display titles, descriptions, sources, and publication dates.
- **HTTPS Support**: Secure connections with SSL/TLS encryption.
- **Load Balancing**: Traffic distributed across two web servers for reliability.
- **Error Handling**: Graceful error messages for API failures.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **APIs**: [NewsAPI](https://newsapi.org/)  
- **Web Servers**: Nginx  
- **Load Balancer**: HAProxy  
- **Process Manager**: PM2  
- **Security**: Let's Encrypt SSL, CORS policies  

---

## Links
- **Live Site**: [https://www.mahamatbt.tech](https://www.mahamatbt.tech)  
- **GitHub Repository**: [Mahamatbt/Api-webapp](https://github.com/Mahamatbt/Api-webapp)  
- **Demo Video**: [News Aggregator Demo](https://youtu.be/your-demo-link)  

---

## How It Works
1. **User Interaction**: Enter a search term (e.g., "technology") and click "Search".
2. **API Request**: The frontend sends a request to the Node.js backend.
3. **NewsAPI Integration**: The backend queries NewsAPI for articles matching the search term.
4. **Data Display**: Results are rendered as cards with titles, descriptions, and links to full articles.
5. **Load Balancing**: HAProxy distributes traffic between two Nginx web servers.

---

## Setup Instructions

### Local Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Mahamatbt/Api-webapp.git
   cd Api-webapp
2. **Install Dependencies**:
bash
Copy
npm install express axios cors dotenv


Development Challenges

CORS Configuration:
Resolved by adding CORS middleware in Express and proper Nginx proxy headers.
SSL/TLS Setup:
Generated Let's Encrypt certificates and configured HAProxy for HTTPS termination.
Load Balancing Issues:
Fixed HAProxy health checks to ensure traffic distribution between web servers.
Environment Variables:
Secured API keys using .env and restricted file permissions.

Acknowledgments

NewsAPI: For providing free news data.
Let's Encrypt: For SSL/TLS certificates.
HAProxy Community: Load balancing documentation and support.
