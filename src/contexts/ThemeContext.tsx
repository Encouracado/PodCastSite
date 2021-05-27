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

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
      setTheme("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      setTheme("light");
    }
    console.log(theme);
  }, []);

  function toggleTheme() {
    if (
      !localStorage.getItem("theme") ||
      localStorage.getItem("theme") === "light"
    ) {
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
