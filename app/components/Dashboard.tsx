import Analythics from "./Analythics";
import List from "./List";

export default function Dashboard() {
  return (
    <section className="w-full mt-10 ">
      <div className="dobox-light">
        <div className="rounded-full flex items-center justify-center border-[1px] border-darkGrayishBlue h-5 w-6" />
        <input
          type="text"
          placeholder="Create a new todo..."
          className=" bg-transparent focus:placeholder:text-veryDarkBlue w-full"
        />
      </div>
      <List />
    </section>
  );
}
