// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './Movies.css';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const API_KEY = '0f68b449c98129b39baeedc1be752980'; // Replace with your TMDb API key

  // Fetch movies based on the search query
  const fetchMovies = async (searchQuery) => {
    setError('');
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      setMovies(response.data.results);
    } catch (err) {
      setError('Error fetching movies. Please try again later.');
    }
  };

  useEffect(() => {
    fetchMovies('popular'); // Fetch popular movies on initial load
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="app">
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZw5h_XFAGeG4x9fVrNt4o7jqt3c6Y2Np_w&s" 
          alt="Sample"
          className="background-image"
        />
        <div className="text-overlay">
          <h2>Movies API</h2>

        </div>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
