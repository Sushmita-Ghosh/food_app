import React from "react";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card?.card?.info?.id}></div>
      ))}
    </div>
  );
};

export default ItemList;
