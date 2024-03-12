import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CartItem = ({ item }) => {
  const [value, setValue] = useState(1);
  console.log(item);

  return (
    <div>
      <div
        key={item.card?.info?.id}
        className="px-2 py-4 m-2  text-left flex justify-between "
      >
        <div className="border-b w-full">
          <div className="py-7 px-2 flex justify-between flex-wrap gap-4 items-center">
            <span>{item.card?.info?.name}</span>
            <div className="flex items-center border-gray-100">
              <span
                onClick={() => setValue(value === 1 ? 1 : value - 1)}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-blue-50"
              >
                -
              </span>
              <span className="py-1.5 px-3 border  bg-white text-center text-xs  outline-none">
                {value}
              </span>
              <span
                onClick={() => setValue(value + 1)}
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-500 hover:text-blue-50"
              >
                +
              </span>
            </div>
            <span className="text-green-500 font-bold">
              ₹
              {(item.card?.info?.price
                ? item.card?.info?.price / 100
                : item.card?.info?.defaultPrice / 100) * value}
            </span>
          </div>
        </div>
        <div className="flex justify-end items-start">
          <AiOutlineClose
            size={13}
            className="cursor-pointer font-bold  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
