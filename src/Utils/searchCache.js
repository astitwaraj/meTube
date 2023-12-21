import { createSlice } from "@reduxjs/toolkit";

const searchCache = createSlice({
  name: "cache",
  initialState: {
    cacheResult: {},
  },
  reducers: {
    saveChache: (state, action) => {
      state.cacheResult = Object.assign(state.cacheResult, action.payload);
    },
  },
});

export const { saveChache } = searchCache.actions;

export default searchCache.reducer;
