import { configureStore } from "@reduxjs/toolkit";
import darkModeManager from "./managers/darkModeManager";

const appStore = configureStore({
  reducer: {
    theme: darkModeManager,
  },
});

export default appStore;
