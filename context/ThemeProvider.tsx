"use client";

import React, { createContext, useEffect, useState, useContext } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("dark"); // Setting 'dark' as the default mode

  const handleThemeChange = (newMode: string) => {
    setMode(newMode);
    document.documentElement.classList.add(newMode);
    document.documentElement.classList.remove(
      newMode === "dark" ? "light" : "dark"
    );
  };

  useEffect(() => {
    // Setup logic can go here if needed; currently, it assumes 'dark' is the default
    return () => {
      // Cleanup logic to remove class from html element
      document.documentElement.classList.remove("dark", "light");
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
