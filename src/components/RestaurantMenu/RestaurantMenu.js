import React from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

function RestaurantMenu() {
  // getting the resId from our params so as to make a dynamic call for menudetails
  const { resId } = useParams();

  console.log(resId);

  // custom hook to fetch data
  const resInfo = useRestaurantMenu(resId);

  // we are writing the below condition not as ternary operator in return and over here as we need to destructor
  // the info & if we write as a ternary operator it will throw error
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // for some restaurant we will not have itemCards in swiggy api for  REGULAR.cards[1]
  // we need to use REGULAR.card`[2]
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[1]?.card?.card.itemCards
    ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;

  // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {/* for all the items we will not have price in swiggy api , hence used defaultPrice 
              & all price is in paise so divide by 100 */}
              {item.card.info.name} -{" Rs. "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
