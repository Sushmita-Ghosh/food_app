import React from "react";
import ReactDOM from "react-dom";
import "./RestaurantContainer.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurants from "../../utils/mock-data";

const RestaurantContainer = () => {
  return (
    <div className="restaurant-container">
      <div className="search">Search</div>
      <div className="res-cards">
        {restaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
