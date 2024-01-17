import { Dispatch, SetStateAction, createContext } from "react";

interface ThemeContextTypes {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext({} as ThemeContextTypes);

export default ThemeContext;
