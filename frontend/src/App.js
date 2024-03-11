import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import RestaurantContainer from "./components/RestaurantContainer/RestaurantContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
// import Grocery from "./components/Grocery/Grocery";
import { Provider, useDispatch } from "react-redux";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import FAQ from "./components/FAQ/FAQ";
import Activation from "./components/Activation/Activation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { server } from "./server";
import { loadUser } from "./utils/store/thunks/userUtils";

const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ loggedInUser: "Default User" }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserContext.Provider>
  );
};

// routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/activate/:token",
        element: <Activation />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
