import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./RestaurantContainer.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurants from "../../utils/mock-data";
import { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length == [] ? (
    <Shimmer />
  ) : (
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
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
