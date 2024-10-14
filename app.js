const newsContainer = document.getElementById('news-container');

const interests = ['AI', 'Web Development', 'IoT'];
let selectedInterests = [];

const NEWS_API_ENDPOINT = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${config.NEWS_API_KEY}`;

async function fetchNews() {
    try {
        const response = await axios.get(NEWS_API_ENDPOINT);
        displayNews(response.data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = '<p>Failed to fetch news. Please try again later.</p>';
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h2>${article.title || 'No title'}</h2>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url || '#'}" target="_blank" rel="noopener noreferrer">Read more</a>
        `;
        newsContainer.appendChild(newsItem);
    });
}
fetchNews();
