//next imports
import { useContext } from "react";
import Image from "next/image";
//context
import TasksContext from "../context/TasksContext";
//media
import deleteIcon from "@/images/icon-cross.svg";
import checkIcon from "@/images/icon-check.svg";

export default function Task() {
  const { list, setList, allList, setAllList } = useContext(TasksContext);

  function handleToggleList(taskId: number, completed: boolean) {
    const myList = [...allList];
    const task: any = myList.find((t) => t.id === taskId);
    task.isCompleted = completed;
    setAllList(myList);
  }

  return (
    <ul className="mt-6 flex flex-col gap-1">
      {list.map((l) => (
        <li key={l.id}>
          <label className="dobox-light group/taskBox">
            <div className="flex items-center justify-start gap-6">
              <input
                type="checkbox"
                name="list"
                className="peer/task hidden"
                checked={l.isCompleted}
                onChange={(e) => {
                  handleToggleList(l.id, e.target.checked);
                }}
              />
              <div className="rounded-full flex items-center justify-center border-[1px] border-darkGrayishBlue h-[22px] w-[22px] hover:cursor-pointer peer-checked/task:bg-gradient-to-br from-checkBackground1 to-checkBackground2">
                <Image
                  src={checkIcon}
                  alt="checked icon"
                  className="invisble peer-checked:/task:visible"
                />
              </div>
              <p className="peer-checked/task:line-through peer-checked/task:text-darkGrayishBlue cursor-pointer">
                {l.name}
              </p>
            </div>
            <Image
              src={deleteIcon}
              alt="delete icon"
              onClick={() => setList(list.filter((f) => f.id !== l.id))}
              className="h-4 w-fit invisible group-hover/taskBox:visible cursor-pointer"
            />
          </label>
        </li>
      ))}
    </ul>
  );
}
