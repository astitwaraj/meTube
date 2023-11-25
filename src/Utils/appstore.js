import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
const appstore = configureStore(
  {
    reducer: {
      sidebar:sidebarReducer
    }
  }
)

export default appstore;