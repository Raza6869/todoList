//components
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TaskProvider from "./context/TaskProvider";

export default function Home() {
  return (
    <main className=" bg-veryLightGray">
      <div className="background-light"></div>
      <div className="px-[400px] -mt-48 h-screen">
        <Header />
        <TaskProvider>
          <Dashboard />
        </TaskProvider>
        <p className=" text-darkGrayishBlue text-sm flex justify-center mt-10">
          Drag and drop to record list
        </p>
      </div>
    </main>
  );
}
