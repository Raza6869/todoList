"use client";
import { useState } from "react";
import ThemeContext from "./ThemeContext";

interface ProviderTypes {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ProviderTypes) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
