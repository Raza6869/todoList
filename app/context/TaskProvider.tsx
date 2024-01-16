"use client";
import { useContext, useState } from "react";
//context
import TasksContext from "./TasksContext";
import { ListArrayTypes } from "./TasksContext";

interface ProviderTypes {
  children: React.ReactNode;
}

export default function TaskProvider({ children }: ProviderTypes) {
  const [filter, setFilter] = useState("All");
  const [allList, setAllList] = useState<Array<ListArrayTypes>>([]);
  const [list, setList] = useState<Array<ListArrayTypes>>([...allList]);
  const [name, setName] = useState("");
  let isCompleted = false;
  const [listId, setListId] = useState(0);
  return (
    <TasksContext.Provider
      value={{
        allList,
        filter,
        list,
        listId,
        name,
        isCompleted,
        setAllList,
        setFilter,
        setList,
        setName,
        setListId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
