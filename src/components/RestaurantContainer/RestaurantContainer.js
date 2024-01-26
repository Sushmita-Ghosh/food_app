import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import RestaurantCard, {
  withPromotedLabel,
} from "../RestaurantCard/RestaurantCard";
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

  // restaurant with Promoted Label

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
      <div className="res-search flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-500 text-white font-bold rounded-lg"
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
        <div className="filter m-2 p-4">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 border-green-500 border-5 rounded-lg"
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

      <div className="flex flex-wrap mx-5 justify-center items-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {/* if the restaurant is promoted then add a promoted label to it. */}
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant.info.id + restaurant.info.name}
              />
              {restaurant?.info.avgRating > 4.3 ? (
                <RestaurantCardPromoted
                  restaurant={restaurant}
                  key={restaurant.info.id}
                />
              ) : (
                <RestaurantCard
                  restaurant={restaurant}
                  key={restaurant.info.id}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
