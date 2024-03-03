import React, { useState } from "react";
import ItemList from "../ItemList/ItemList.js";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  rounded-lg">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="text-lg font-bold capitalize">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">🔽</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
