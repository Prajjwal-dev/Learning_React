import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // update <html> class
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
