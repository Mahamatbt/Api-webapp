async function fetchNews() {
    const query = document.getElementById('searchInput').value;
    const response = await fetch(`/news/${query}`);
    const articles = await response.json();
    
    const resultsDiv = document.getElementById('newsResults');
    resultsDiv.innerHTML = articles.map(article => `
      <div class="article">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      </div>
    `).join('');
  }