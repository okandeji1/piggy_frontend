import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import router from "next/router";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    logout: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.logout = false;
    },
    setWallet: (state, action) => {
      state.user.wallet = action.payload && action.payload;
      state.logout = false;
    },

    setLogout: (state) => {
      router.push("/sign-in");
      state.user = null;
      state.logout = true;
    },

    refresh: (state) => {
      router.push("/sign-in");
      state.user = null;
      state.logout = true;
    },
  },
});

export const selectUser = (state) => state.user?.user;

export const selectLogout = (state) => {
  state.user.logout;
};

export const {setUser, setWallet, setLogout} = userSlice.actions;

export default userSlice.reducer;
