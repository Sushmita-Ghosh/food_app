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
    <div className="m-4 p-4 w-[250px] h-[370px] bg-gray-100 hover:bg-gray-200 rounded-lg overflow-hidden">
      <div>
        <img
          className="w-full h-[150px] rounded-lg"
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt={name}
        />
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.slice(0, 2).join(" ,")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
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
