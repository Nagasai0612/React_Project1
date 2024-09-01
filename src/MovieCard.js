
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, release_date, vote_average } = movie;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} className="movie-image" />
      <div className="movie-content">
        <h3>{title}</h3>
        <p className="movie-overview">{overview}</p>
        <p className="movie-info">
          <span>Release Date: {release_date}</span> | <span>Rating: {vote_average}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
