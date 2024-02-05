import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "@/lib/redux/feature/toDo/inputSlice"
import showList from "./feature/toDo/showList";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    list: showList
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
