import { createSlice } from "@reduxjs/toolkit";

export const popUpSlice = createSlice({
  name: "popUp",
  initialState: {
    share: true,
    send: false,
  },
  reducers: {
    openSharePopUp: (state) => {
      state.share = true;
    },
    closeSharePopUp: (state) => {
      state.share = false;
    },
    openSendPopUp: (state) => {
      state.send = true;
    },
    closesendPopUp: (state) => {
      state.send = false;
    },
  },
});

export const {
  openSharePopUp,
  closeSharePopUp,
  openSendPopUp,
  closesendPopUp,
} = popUpSlice.actions;

export const selectShare = (state) => state.share.share;

export default popUpSlice.reducer;
