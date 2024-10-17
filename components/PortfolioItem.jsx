import React from "react";

const PortfolioItem = ({ title, image, onClick }) => {
  return (
    <div className="portfolio-item" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
        <p className="highlight-text">More Info</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
