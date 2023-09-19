import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./RestaurantContainer.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurants from "../../utils/mock-data";
import { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
            <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;