import { useContext } from "react";
import TasksContext from "../context/TasksContext";

export default function AddTask() {
  const {
    listId,
    setList,
    allList,
    setAllList,
    setName,
    name,
    isCompleted,
    setListId,
    list,
  } = useContext(TasksContext);

  return (
    <div className="dobox-light">
      <button
        onClick={() => {
          setListId(listId + 1);
          setAllList([...list, { id: listId, name, isCompleted }]);
          setList(allList);
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
            setAllList([...list, { id: listId, name, isCompleted }]);
            setList([...list, { id: listId, name, isCompleted }]);
            setName("");
          }
        }}
      />
    </div>
  );
}
