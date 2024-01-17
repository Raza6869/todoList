//next imports
import Image from "next/image";
//media
import themeSunIcon from "@/images/icon-sun.svg";
import themeMoonIcon from "@/images/icon-moon.svg";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="flex w-full justify-between items-start">
      <h1 className="text-veryLightGray tracking-widest font-bold text-3xl">
        T O D O
      </h1>
      <Image
        src={theme === "light" ? themeMoonIcon : themeSunIcon}
        alt="theme icon"
        className="cursor-pointer hover:scale-110"
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      />
    </header>
  );
}
