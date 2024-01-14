//next imports
import Image from "next/image";
//components
import Header from "./components/Header";
//media
import bgDesktopLight from "@/images/bg-desktop-light.jpg";

export default function Home() {
  return (
    <main className="bg-veryLightGray">
      <Image src={bgDesktopLight} alt="background" className="" />
      <div className="-mt-56 px-[400px]">
        <Header />
      </div>
    </main>
  );
}
