"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

const List = () => {
  const [refresh, changeRefresh] = useState(false);

  //get todos from local storage
  const saved = [JSON.parse(localStorage.getItem("toDoList") || "")];

  // click on complete
  const handleComplete = (id) => {
    // get items from local storage map on them and change is complete property and save new list on a variable
    const newToDoList = [JSON.parse(localStorage.getItem("toDoList") || "")][0].map(
      (toDo) => {
        if (toDo.id === id) return { ...toDo, isComplete: !toDo.isComplete };
        else return toDo;
      }
    );
    // set the new list to the local storage
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
    // re-render the component :)
    changeRefresh(!refresh);
  };

  // click on delete
  const handleDelete = (id) => {
    const newToDoList = [
      JSON.parse(localStorage.getItem("toDoList") || ""),
    ][0].filter((toDo) => toDo.id !== id);

    // set the new list to the local storage
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
    localStorage.getItem("toDoList").length === 2 &&
      localStorage.setItem(
        "toDoList",
        JSON.stringify([
          {
            value: "Your ToDos Comes Here",
            id: 1,
          },
        ])
      );
    // re-render the component :)
    changeRefresh(!refresh);
  };

  const showList = useSelector((state) => state.list.value);

  return (
    <main
      className={`w-full overflow-scroll scroll-smooth px-5 bg-slate-300 shadow-xl shadow-gray-500 rounded-xl absolute top-24 transition-all duration-1000 ${
        showList ? "h-4/5 opacity-100" : "h-0 opacity-0"
      }`}
    >
      {saved[0].map((toDo, index) => {
        // show the title without complete or delete icon
        if (toDo.id === 1) {
          return (
            <div
              className={`flex justify-center mt-10 w-full py-2 px-5 rounded-lg ${
                toDo.isComplete ? "bg-gray-400" : "bg-gray-500"
              } transition-all duration-700`}
              key={index}
            >
              <p
                className={`${
                  toDo.isComplete ? "line-through text-gray-600" : ""
                } transition-all duration-700 select-none`}
              >
                {toDo.value}
              </p>
            </div>
          );
        } else {
          return (
            <div
              className={`flex justify-between mt-10 w-full py-2 px-5 rounded-lg ${
                toDo.isComplete ? "bg-gray-400" : "bg-gray-500"
              } transition-all duration-700`}
              key={index}
            >
              <p
                className={`${
                  toDo.isComplete ? "line-through text-gray-600" : ""
                } transition-all duration-700 text-center`}
              >
                {toDo.value}
              </p>
              <div>
                <i
                  className={`fa-regular fa-circle-check mr-5 cursor-pointer text-lg hover:text-green-500 ${
                    toDo.isComplete ? "text-green-400" : "text-black"
                  } transition-all duration-700`}
                  onClick={() => handleComplete(toDo.id)}
                ></i>
                <i
                  className={`fa-regular fa-trash-can cursor-pointer text-lg hover:text-red-500 ${
                    toDo.isComplete ? "text-red-300" : "text-black"
                  } transition-all duration-700`}
                  onClick={() => handleDelete(toDo.id)}
                ></i>
              </div>
            </div>
          );
        }
      })}
    </main>
  );
};

export default List;
