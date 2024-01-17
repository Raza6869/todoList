import { useContext } from "react";
import TasksContext from "../context/TasksContext";
import ThemeContext from "../context/ThemeContext";

export default function InfoSection() {
  const { allList, setAllList, setFilter, filter, setList, list } =
    useContext(TasksContext);
  const { theme } = useContext(ThemeContext);

  const taskAmount = allList.length;

  return (
    <div className="h-10 text-sm flex items-center justify-between px-4 text-darkGrayishBlue bg-veryLightGray shadow-lg shadow-darkGrayishBlue/30">
      <p>{taskAmount} items left</p>
      <ul className="flex gap-2">
        <li
          className={filter === "All" ? "filter-li-active" : "filter-li"}
          onClick={() => {
            setFilter("All");
            setList(allList);
          }}
        >
          All
        </li>
        <li
          className={filter === "Active" ? "filter-li-active" : "filter-li"}
          onClick={() => {
            setFilter("Active");
            setList(allList.filter((l) => l.isCompleted === false));
          }}
        >
          Active
        </li>
        <li
          className={filter === "Completed" ? "filter-li-active" : "filter-li"}
          onClick={() => {
            setFilter("Completed");
            setList(allList.filter((l) => l.isCompleted === true));
          }}
        >
          Completed
        </li>
      </ul>
      <p
        className="hover:font-bold hover:cursor-pointer"
        onClick={() => {
          setList(list.filter((l) => l.isCompleted === false));
          setAllList(list.filter((l) => l.isCompleted === false));
        }}
      >
        Clear Completed
      </p>
    </div>
  );
}
