/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface WebUtilState {
  fullLoading: boolean;
}

const initialState: WebUtilState = {
  fullLoading: false,
};

const webUtilSlice = createSlice({
  name: "webUtil",
  initialState,
  reducers: {
    fullLoadingOn(state: WebUtilState) {
      state.fullLoading = true;
    },
    fullLoadingOff(state: WebUtilState) {
      state.fullLoading = false;
    },
  },
});

export const { fullLoadingOn, fullLoadingOff } = webUtilSlice.actions;
export default webUtilSlice.reducer;
