import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidestate",
  initialState: {
    show: true,
  },
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
    closeSide: (state) => {
      state.show = true;
    },
  },
});

export const { toggle, closeSide } = sidebarSlice.actions;
export default sidebarSlice.reducer;