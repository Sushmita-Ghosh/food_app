import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../../server";
import {
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
} from "../userSlice";

export const loadUser = createAsyncThunk(
  "user/getUser",
  async (_, thunkApi) => {
    thunkApi.dispatch(loadUserRequest());
    try {
      const { data } = await axios.get(`${server}/user/get-user`, {
        withCredentials: true,
      });
      thunkApi.dispatch(loadUserSuccess(data.user));
    } catch (error) {
      thunkApi.dispatch(loadUserFailure(error.response.data.message));
    }
  }
);
