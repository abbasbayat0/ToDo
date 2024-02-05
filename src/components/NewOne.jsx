"use client";

import { changeStatus } from "../lib/redux/feature/toDo/inputSlice";
import { useDispatch, useSelector } from "react-redux";

const NewOne = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.list.value);

  if (!localStorage.getItem("toDoList"))
    localStorage.setItem(
      "toDoList",
      JSON.stringify([
        {
          value: "Your ToDos Comes Here",
          id: 1,
        },
      ])
    );
  return (
    <button
      className={`h-14 bg-green-500 text-xl select-none hover:text-gray-200 rounded-xl absolute -bottom-7 z-10 shadow-xl shadow-gray-700 transition-all duration-1000 text-nowrap overflow-hidden ${
        show ? "w-1/2 opacity-100" : "w-0 opacity-0"
      }`}
      onClick={() => {
        dispatch(changeStatus());
        document.querySelector("input")?.focus();
      }}
    >
      New One
    </button>
  );
};

export default NewOne;
