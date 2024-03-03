// This is a custom hook - we are extracting the logic of fetching restaurants from Swiggy API
//  we will set the value of filteredRestaurants and listofRestaurants

import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // fetching the restaurants
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );

    console.log(json);

    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {
    filteredRestaurants,
    listOfRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurants;
