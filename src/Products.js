import React from 'react';
import './Products.css'
const Products = ({ data }) => {
  if (!data || !data.length) {
    return <p>No products to display</p>; 
  }

  return (
    <div className="products-container">
      <div className="products-grid">
        {data.map((item, index) => (
          <div className="product-card" key={index}>
            <img
              className="product-image"
              src={item.recipe.image}
              alt={item.recipe.label}
            />
            <div className="product-info">
              <h5 className="product-title">{item.recipe.label}</h5>
              <p className="product-calories">
                Total Calories: {Math.round(item.recipe.calories)}
              </p>
              <a
                href={item.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
