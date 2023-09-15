import React from "react";
import ReactDOM from "react-dom";
import "./RestaurantContainer.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurants from "../../utils/mock-data";
import { useState } from "react";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  return (
    <div className="restaurant-container">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.rating.aggregate_rating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-cards">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
