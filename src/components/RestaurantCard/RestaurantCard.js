import React from "react";
import ReactDOM from "react-dom";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  const { name, image, rating } = restaurant.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={image.url} alt={name} />
      </div>
      <h3 className="res-heading">{name}</h3>
    </div>
  );
};

export default RestaurantCard;
