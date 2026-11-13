"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-lg shadow-sm transition hover:scale-105 dark:border-stone-700 dark:bg-stone-900"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
