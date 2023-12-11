import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./currvidSlice";
import sidebarReducer from "./sidebarSlice";
const appstore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    video: videoReducer,
  },
});

export default appstore;