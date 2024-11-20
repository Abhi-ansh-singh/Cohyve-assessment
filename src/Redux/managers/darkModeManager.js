import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  isDarkMode: true,  // Default dark mode enabled
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

export const selectDarkMode = (state) => state.theme.isDarkMode;  

export default darkModeManager.reducer;
