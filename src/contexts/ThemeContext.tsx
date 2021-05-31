import { createContext, useState, ReactNode, useEffect } from "react";

type Theme = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as Theme);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (localStorage.getItem("theme") === "light") {
      localStorage.theme = "dark";
      document.getElementById("ToggleTheme").classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.getElementById("ToggleTheme").classList.remove("dark");
      setTheme("light");
    }
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
