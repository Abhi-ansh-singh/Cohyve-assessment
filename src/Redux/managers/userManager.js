import { createSlice } from "@reduxjs/toolkit";

const defaultUserState = {
  userInfo: null,
  loggedIn: false,
};

const userManager = createSlice({
  name: "authentication",
  initialState: defaultUserState,
  reducers: {
    updateUser(state, action) {
      state.userInfo = action.payload;
    },
    logIn(state, action) {
      state.loggedIn = action.payload;
    },
    logOut(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const { updateUser, logIn, logOut } = userManager.actions;

export const selectUser = (state) => state.authentication.userInfo;
export const selectLoggedInStatus = (state) => state.authentication.loggedIn;

export default userManager.reducer;
