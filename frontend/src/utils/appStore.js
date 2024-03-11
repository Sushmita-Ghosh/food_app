import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import userReducer from "./store/userSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
