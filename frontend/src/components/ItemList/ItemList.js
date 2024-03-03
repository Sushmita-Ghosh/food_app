import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card?.info?.name}</span>
              <span>
                - ₹
                {item.card?.info?.price
                  ? item.card?.info?.price / 100
                  : item.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="relative w-3/12 mx-4">
            <div className="absolute top-0 right-0">
              <button
                className="p-2 bg-green-500 text-white font-semibold shadow-lg ease-in-out transition-all duration-300 active:scale-50"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card?.info?.imageId}
              className="object-fit object-top w-full h-28 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
