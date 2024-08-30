// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState(''); 

  const API_KEY = '4cb3c2dbca864f8aa6a7c19a2ae7998c'; 

  const fetchNews = async (searchQuery) => {
    setError('');
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
    } catch (err) {
      setError('Error fetching news articles. Please try again later.');
    }
  };

  useEffect(() => {
    fetchNews('latest'); 
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  return (
    <div className="app">
<div className="image-container">
        <img
          src="https://www.shutterstock.com/shutterstock/videos/1047616033/thumb/1.jpg?ip=x480" 
          alt="Sample"
          className="background-image"
        />
        <div className="text-overlay">
          <h2>News API</h2>

        </div>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="news-container">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;
