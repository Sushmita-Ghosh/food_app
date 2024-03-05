import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";

const CartItem = ({ items }) => {
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
          className="px-2 py-4 m-2  text-left flex justify-between "
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
            <img
              src={CDN_URL + item.card?.info?.imageId}
              className="object-fit object-top w-full h-28 rounded-md"
            />
          </div>
        </div>
      ))}

      <div className="text-right py-4">
        <div>
          <span className="font-bold text-lg">Total Amount</span>
          <span className="text-2xl ml-2 font-bold text-green-500">₹ 300</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
