"use client";

import { changeStatus } from "../lib/redux/feature/toDo/inputSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";

const GetInput = () => {
  const [newToDo, changeNewToDo] = useState([]);
  const inputStatus = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  // get items in localStorage
  const saved = JSON.parse(localStorage.getItem("toDoList") || "");
  // get last ID
  const lastID = saved.length > 1 ? saved[saved.length - 1].id : saved[0].id;

  return (
    <>
      <List />

      <div
        className={`fixed ${
          inputStatus ? "top-0" : "-top-[100%]"
        } w-full h-full flex justify-center z-20 transition-all duration-1000 items-center bg-green-500 bg-opacity-40`}
      >
        <input
          type="text"
          maxLength={20}
          className="animate-width h-16 border-none outline-none shadow-gray-500 shadow-inner rounded-xl text-center text-xl"
          placeholder="Write & Enter"
          // save changes to the state
          onChange={(e) => {
            changeNewToDo({
              value: e.target.value,
              id: lastID + 1,
              isComplete: false,
            });
          }}
          onKeyDown={(e) => {
            // submit with enter
            if (e.keyCode === 13) {
              if (e.target.value) {
                // owerride at the first time
                if (lastID === 1) {
                  localStorage.setItem("toDoList", JSON.stringify([newToDo]));
                } else {
                  const newToDoList = [...saved, newToDo];
                  localStorage.setItem("toDoList", JSON.stringify(newToDoList));
                }

                // clear the input
                e.target.value = "";

                // close the input
                dispatch(changeStatus());
              }
            }
          }}
        />
      </div>
    </>
  );
};

export default GetInput;
