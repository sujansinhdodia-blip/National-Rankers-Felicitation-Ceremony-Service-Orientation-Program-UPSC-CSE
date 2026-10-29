"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("mitwpu_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mitwpu_theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mitwpu_theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-slate-300 dark:border-navy-700 bg-white/80 dark:bg-navy-800 text-navy-900 dark:text-gold-400 hover:bg-gold-50 dark:hover:bg-navy-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
    >
      {isDark ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-navy-800" />}
    </button>
  );
};
