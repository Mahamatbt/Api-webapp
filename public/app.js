async function fetchNews() {
    const query = document.getElementById('searchInput').value || 'technology';
    const resultsDiv = document.getElementById('newsResults');
    
    resultsDiv.innerHTML = '<div class="loading">Loading latest news...</div>';

    try {
        const response = await fetch(`http://localhost:3000/news/${query}`);
        if (!response.ok) throw new Error('Failed to fetch news');
        
        const articles = await response.json();
        
        resultsDiv.innerHTML = articles.length > 0 
            ? articles.map(article => `
                <div class="article">
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available'}</p>
                    <div class="meta">
                        ${article.source?.name ? `<small>Source: ${article.source.name}</small>` : ''}
                        ${article.publishedAt ? `<small>• ${new Date(article.publishedAt).toLocaleDateString()}</small>` : ''}
                    </div>
                    <a href="${article.url}" target="_blank" rel="noopener">
                        Read Full Article <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
              `).join('')
            : '<div class="error">No articles found for your search</div>';

    } catch (error) {
        console.error('Error:', error);
        resultsDiv.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${error.message}
            </div>
        `;
    }
}

// Initial load
fetchNews();