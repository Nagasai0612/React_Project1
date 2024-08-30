// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '8d660e70afa9f1a6769cf02c8821699c'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <div className="image-container">
        <img
          src="https://www.shutterstock.com/image-vector/bad-weather-icons-vector-dark-600nw-2411536035.jpg" 
          alt="Sample"
          className="background-image"
        />
        <div className="text-overlay">
          <h2>Weather API</h2>

        </div>
      </div>
      <form onSubmit={fetchWeather} className="form">
        <input
          type="text"
          placeholder="Enter City Name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-card">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <h3>{Math.round(weatherData.main.temp)}°C</h3>
          <p>{weatherData.weather[0].description.toUpperCase()}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
