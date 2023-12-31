import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import videoReducer from "./currvidSlice";
import searchCacheReducer from "./searchCache";
import sidebarReducer from "./sidebarSlice";
const appstore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    video: videoReducer,
    cache: searchCacheReducer,
    chat: chatReducer,
  },
});

export default appstore;