import React from "react";
import { CDN_URL } from "../../utils/constants";

const CartItem = ({ items }) => {
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
          </div>
          <div className="relative w-3/12 mx-4">
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

export default CartItem;
