"use client";
import { createContext, Dispatch, SetStateAction } from "react";

export interface ListArrayTypes {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface TasksTypes {
  filter: string;
  list: ListArrayTypes[];
  allList: ListArrayTypes[];
  name: string;
  listId: number;
  isCompleted: boolean;
  setFilter: Dispatch<SetStateAction<string>>;
  setList: Dispatch<SetStateAction<ListArrayTypes[]>>;
  setAllList: Dispatch<SetStateAction<ListArrayTypes[]>>;
  setName: Dispatch<SetStateAction<string>>;
  setListId: Dispatch<SetStateAction<number>>;
}

const TasksContext = createContext({} as TasksTypes);

export default TasksContext;
