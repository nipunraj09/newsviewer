import React, { useState, useEffect } from 'react';

const NewsAPI = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data from the API
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.example.com/news');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {news.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsAPI;
