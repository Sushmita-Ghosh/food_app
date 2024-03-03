// This is a custom hook to simplify the process of fetching RestaurantMenus
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  // to store the menu details
  const [resInfo, setResInfo] = useState(null);

  // make a api call to fetch the details of each restaurant

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log(json);
    setResInfo(json.data); // set the data
  };

  return resInfo;
};

export default useRestaurantMenu;
