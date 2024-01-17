"use client";
//components
import Task from "./Task";
import AddTask from "./AddTask";

export default function Dashboard() {
  return (
    <section className="w-full mt-10 ">
      <AddTask />
      <Task />
    </section>
  );
}
