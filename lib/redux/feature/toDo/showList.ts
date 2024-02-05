"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: boolean } = { value: false };

export const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    showList: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showList } = list.actions;
export default list.reducer;