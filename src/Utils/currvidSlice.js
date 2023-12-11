import { createSlice } from "@reduxjs/toolkit";

const currvidSlice = createSlice({
  name: "nowplaying",
  initialState: {
    currentVideo: {
      loading: true,
      videoData: null,
    },
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.currentVideo.videoData = action.payload;
      state.currentVideo.loading = false;
    },
  },
});

export const { addNowPlaying } = currvidSlice.actions;
export default currvidSlice.reducer;
