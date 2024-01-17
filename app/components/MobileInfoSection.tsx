import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import TasksContext from "../context/TasksContext";
import { DeviceSize } from "../utils/DeviceSize";

export default function MobileInfoSection() {
  const { allList, list, setList, setAllList } = useContext(TasksContext);

  const { theme } = useContext(ThemeContext);

  const taskAmount = allList.length;

  return (
    <div
      className={
        theme === "light"
          ? "infoMobile-section-light"
          : "infoMobile-section-dark"
      }
    >
      <p>{taskAmount} items left</p>
      <p
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
