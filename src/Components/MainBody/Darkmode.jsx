"use client";

import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(false);

 
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("dark-mode");
      if (stored !== null) {
        setDark(stored === "true");
      } else {
        setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark-mode", "false");
      }
    }
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
