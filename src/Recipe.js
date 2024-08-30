import React, { useState } from 'react';
import Products from './Products';
import './Recipe.css';
import { Router } from 'react-router-dom';
const Recipe = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "b0ed6a6b";
  const YOUR_APP_KEY = "95f18839ee21d9d0da6a4988141587fd";

  const submitHandler = (e) => {
    e.preventDefault();
    if (!search) {
      alert('Please enter a search term');
      return;
    }

    // Fetch data from the API
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setData(data.hits || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert('There was an error fetching the recipes. Please try again.');
      });
  };

  return (
    <div className="recipe-container">
      <div className="image-container">
        <img
          src="https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg" // Replace with your image URL
          alt="Sample"
          className="background-image"
        />
        <div className="text-overlay">
          <h2>Recipe Finder API</h2>

        </div>
      </div>
      <div className="form-section">
        <form onSubmit={submitHandler} className="recipe-form">
          <input
            type="text"
            className="input-field"
            placeholder="Search for recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" className="submit-btn" value="Search" />
        </form>
        {data.length ? <Products data={data} /> : <p>No recipes found. Try searching again!</p>}
      </div>
    </div>
  );
};

export default Recipe;
