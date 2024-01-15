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
  const [list, setList] = useState<Array<ListArrayTypes>>([]);
  const [name, setName] = useState("");
  let isCompleted = false;
  const [listId, setListId] = useState(0);
  return (
    <TasksContext.Provider
      value={{
        filter,
        list,
        listId,
        name,
        isCompleted,
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
