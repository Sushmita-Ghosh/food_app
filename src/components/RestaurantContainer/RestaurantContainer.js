import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./RestaurantContainer.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurants from "../../utils/mock-data";
import { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
