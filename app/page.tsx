//next imports
import Image from "next/image";
//components
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <main className=" bg-veryLightGray">
      <div className="background-light"></div>
      <div className="px-[400px] -mt-48 h-screen">
        <Header />
        <Dashboard />
        <p className=" text-darkGrayishBlue text-sm flex justify-center mt-10">
          Drag and drop to record list
        </p>
      </div>
    </main>
  );
}
