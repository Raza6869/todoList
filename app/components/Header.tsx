//next imports
import Image from "next/image";
//media
import themeSunIcon from "@/images/icon-sun.svg";
import themeMoonIcon from "@/images/icon-moon.svg";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-start">
      <h1 className="text-veryLightGray tracking-widest font-bold text-3xl">
        T O D O
      </h1>
      <Image src={themeMoonIcon} alt="theme icon" />
    </header>
  );
}
