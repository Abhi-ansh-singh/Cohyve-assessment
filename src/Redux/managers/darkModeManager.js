import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  isDarkMode: true,
};

const darkModeManager = createSlice({
  name: "theme",
  initialState: defaultState,
  reducers: {
    changeTheme(state, action) {
      state.isDarkMode = action.payload;
    },
  },
});

export const { changeTheme } = darkModeManager.actions;

export const selectDarkMode = (state) => state.darkMode;

export default darkModeManager.reducer;
