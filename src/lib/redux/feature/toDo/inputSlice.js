"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState= { value: false };

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeStatus } = inputSlice.actions;
export default inputSlice.reducer;
