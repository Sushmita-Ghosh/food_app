import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./RestaurantContainer.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurants from "../../utils/mock-data";
import { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurants from "../../utils/useRestaurants";

const RestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");

  // using custom hook to fetch the data for restaurants
  const { filteredRestaurants, listOfRestaurants, setFilteredRestaurants } =
    useRestaurants();

  // using onlineStatus custom hook
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length == [] ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      <div className="res-search">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating >= 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>

      <div className="res-cards">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant.info.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
