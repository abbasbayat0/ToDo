import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./feature/toDo/inputSlice"
import showList from "./feature/toDo/showList";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    list: showList
  },
});