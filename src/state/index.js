import postsSlice from "./postsSlice";
import { configureStore } from "@reduxjs/toolkit";

const setupStore = (preloadedState) => {
  return configureStore({
    reducer: { postsReducer: postsSlice },
  });
};

export default setupStore;
