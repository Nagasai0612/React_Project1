
import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  return (
    <div className="news-card">
      {urlToImage && <img src={urlToImage} alt={title} className="news-image" />}
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-description">{description}</p>
        <p className="news-info">
          <span>Source: {source.name}</span> | <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="news-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
