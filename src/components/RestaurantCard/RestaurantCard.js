import React from "react";
import ReactDOM from "react-dom";
import "./RestaurantCard.css";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, rating } = restaurant.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={`${CDN_URL}${cloudinaryImageId}`} alt={name} />
      </div>
      <h3 className="res-heading">{name}</h3>
    </div>
  );
};

export default RestaurantCard;
