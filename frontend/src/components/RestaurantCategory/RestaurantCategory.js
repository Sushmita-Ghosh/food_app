import React, { useState } from "react";
import ItemList from "../ItemList/ItemList.js";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // console.log("clicked");
    // setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
