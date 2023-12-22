import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    conversation: [],
  },
  reducers: {
    saveChat: (state, action) => {
      state.conversation.splice(20, 1);
      state.conversation.unshift(action.payload);
    },
  },
});

export const { saveChat } = chatSlice.actions;
export default chatSlice.reducer;
