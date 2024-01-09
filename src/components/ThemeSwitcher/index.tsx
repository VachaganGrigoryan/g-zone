"use client";

import { useTheme } from "next-themes";
import Icons from "@/components/Icons";

const ThemeSwitcher = ({ className }: { className: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      role="button"
      aria-label="Change theme"
      className={`${
        className || ""
      } p-2 rounded-lg dark:text-sky-500 dark:hover:bg-gray-800`}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      {theme == "light" ? (
        <Icons.SunMedium className="text-orange-500" />
      ) : (
        <Icons.Moon className="text-sky-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;