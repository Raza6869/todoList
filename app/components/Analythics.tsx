import { useContext } from "react";
import TasksContext from "../context/TasksContext";

export default function Analythics() {
  const { list, setFilter, filter } = useContext(TasksContext);

  const taskAmount = list.length;
  return (
    <div className="h-10 text-sm flex items-center justify-between px-4 text-darkGrayishBlue bg-veryLightGray shadow-lg shadow-darkGrayishBlue/30">
      <p>{taskAmount} items left</p>
      <ul className="flex gap-2">
        <li
          className={filter === "All" ? "filter-li-active" : "filter-li"}
          onClick={() => setFilter("All")}
        >
          All
        </li>
        <li
          className={filter === "Active" ? "filter-li-active" : "filter-li"}
          onClick={() => setFilter("Active")}
        >
          Active
        </li>
        <li
          className={filter === "Completed" ? "filter-li-active" : "filter-li"}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </li>
      </ul>
      <p>Clear Completed</p>
    </div>
  );
}
