"use client";

import { showList } from "@/lib/redux/feature/toDo/showList";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [count, changeCount] = useState(0);
  setInterval(
    () => changeCount(JSON.parse(localStorage.getItem("toDoList")).length),
    1000
  );
  return (
    <header className="bg-green-500 h-20 w-full rounded-3xl flex items-center justify-between p-10 shadow-2xl shadow-gray-500">
      <i
        className={`fa-solid fa-bars cursor-pointer`}
        onClick={() => dispatch(showList())}
      ></i>
      <h1>To Do</h1>
      <i
        className={`fa-solid fa-arrow-down cursor-pointer transition-all duration-500 animate-bounce ${
          count >= 5 ? "opacity-80" : "opacity-0"
        }`}
      ></i>
    </header>
  );
};

export default Header;
