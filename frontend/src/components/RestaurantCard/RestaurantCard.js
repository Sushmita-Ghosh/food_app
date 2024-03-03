import React from "react";
import ReactDOM from "react-dom";
import "./RestaurantCard.css";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    rating,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = restaurant.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[300px] shadow-lg hover:bg-gray-50 rounded-lg overflow-hidden">
      <div>
        <img
          className="w-full h-[150px] rounded-lg"
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt={name}
        />
      </div>
      <h3 className="font-bold text-sm uppercase my-1 px-4 py-1">{name}</h3>
      <h4 className="text-sm rounded-full bg-gray-50 px-4 py-1 my-1">
        {cuisines.slice(0, 2).join(" ,")}
      </h4>

      <div className="flex items-center justify-around">
        <h4 className="text-sm rounded-full bg-gray-50 px-4 py-1 my-1">
          {avgRating} stars
        </h4>
        <h4 className="text-sm rounded-full bg-green-500 text-gray-50 px-4 py-1 my-1">
          {costForTwo}
        </h4>
      </div>

      {/* <h4 className="text-sm rounded-full bg-gray-50 px-4 py-1 my-1">
        {deliveryTime} minutes
      </h4> */}
    </div>
  );
};

// Higher Order Component
// input restaurant card => returns restaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  // components are func so when we want to return components we will have return funcs
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
