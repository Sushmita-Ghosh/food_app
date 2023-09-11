import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import RestaurantContainer from "./src/components/RestauranttContainer/RestaurantContainer";

/***
 *
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact Information
 *
 *
 *
 *
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <RestaurantContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
