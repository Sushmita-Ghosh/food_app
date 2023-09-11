import React from "react";
import ReactDOM from "react-dom";
import "./RestaurantContainer.css";
// import RestaurantCard from '../RestaurantCard/RestaurantCard'

const RestaurantContainer = () => {
  return (
    <div className="restaurant-container">
      <div className="search">Search</div>
      <div className="res-card"></div>
    </div>
  );
};

export default RestaurantContainer;
