"use client";
//context
import { useContext } from "react";
import TaskProvider from "../context/TaskProvider";
import ThemeContext from "../context/ThemeContext";
//components
import Header from "./Header";
import Dashboard from "./Dashboard";

export default function MainContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={theme === "light" ? "bg-veryLightGray" : "bg-veryDarkBlue"}
    >
      <div
        className={theme === "light" ? "background-light" : "background-dark"}
      />
      <div className="sm:px-[400px] px-8 -mt-48 h-screen">
        <Header />
        <TaskProvider>
          <Dashboard />
        </TaskProvider>
        {
          //<p className=" text-darkGrayishBlue text-sm flex justify-center mt-10">
          // Drag and drop to record list
          //</p>
        }
      </div>
    </main>
  );
}
