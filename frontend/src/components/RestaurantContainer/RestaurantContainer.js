import React, { useEffect } from "react";
import RestaurantCard, {
  withPromotedLabel,
} from "../RestaurantCard/RestaurantCard";
import { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurants from "../../utils/useRestaurants";
import hero from "../../assets/hero.jpg";
import "./RestaurantContainer.css";

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

  return listOfRestaurants?.length == [] ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      <section className="hero py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-6/12 md:w-1/2">
            <h6 className="text-sm md:text-lg">
              <em>Order food from favourite restaurants near you</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't miss out!</h1>
            <button className="rounded-full px-6 py-2 border-2 border-green-500 text-gray-50 font-bold mt-4 bg-green-500 hover:bg-gray-50  hover:border-green-500 hover:text-gray-900">
              Order Now
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={hero} alt="hero" className="rounded-full" />
          </div>
        </div>
      </section>

      <section className="menu-container mx-auto py-8 px-8">
        <h1 className="text-xl font-bold mb-8">All Restaurants</h1>
        <div className="res-search flex items-center justify-center">
          <div className="pt-2 relative text-gray-600">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="absolute right-0 top-0 mt-5 mr-4"
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
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
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

        <div className="grid grid-cols-1 place-items-center md:grid-cols-4 md:col-gap-12 md:row-gap-16">
          {filteredRestaurants?.map((restaurant) => {
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
      </section>
    </div>
  );
};

export default RestaurantContainer;
