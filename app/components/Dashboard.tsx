"use client";
import { useContext } from "react";
//next imports

//context

//components
import List from "./List";
import TasksContext from "../context/TasksContext";

export default function Dashboard() {
  const { setList, setName, isCompleted, list, listId, name, setListId } =
    useContext(TasksContext);
  return (
    <section className="w-full mt-10 ">
      <div className="dobox-light">
        <button
          onClick={() => {
            setListId(listId + 1);
            setList([...list, { id: listId, name, isCompleted }]);
            setName("");
          }}
          className="text-darkGrayishBlue hover:text-veryLightGray hover:bg-veryDarkGrayishBlue rounded-full flex items-center justify-center border-[1px] border-darkGrayishBlue h-[22px] w-6"
        >
          <p>+</p>
        </button>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Create a new todo..."
          className=" bg-transparent focus:placeholder:text-veryDarkBlue w-full"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setListId(listId + 1);
              setList([...list, { id: listId, name, isCompleted }]);
              setName("");
            }
          }}
        />
      </div>
      <List />
    </section>
  );
}
