// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '8d660e70afa9f1a6769cf02c8821699c'; // Replace with your OpenWeatherMap API key

  // Function to fetch weather data
  const fetchWeather = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeatherData(weatherResponse.data);

      // Extract coordinates for AQI fetch
      const { lat, lon } = weatherResponse.data.coord;
      fetchAQI(lat, lon);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
      setAqiData(null);
    }
  };

  // Function to fetch AQI data
  const fetchAQI = async (lat, lon) => {
    try {
      const aqiResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setAqiData(aqiResponse.data.list[0]);
    } catch (err) {
      setError('Error fetching AQI data.');
    }
  };

  // Function to determine AQI status based on index value
  const getAqiStatus = (aqi) => {
    switch (aqi) {
      case 1:
        return 'Good';
      case 2:
        return 'Fair';
      case 3:
        return 'Moderate';
      case 4:
        return 'Poor';
      case 5:
        return 'Very Poor';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="app">
      <div className="image-container">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/019/989/658/small/weather-and-meteorology-icon-set-sun-clouds-rain-symbol-isolated-png.png" 
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
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          {aqiData && (
            <div className="aqi-info">
              <p>AQI: {aqiData.main.aqi} ({getAqiStatus(aqiData.main.aqi)})</p>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
