import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ToogleTheme = () => {
  const SystemPrefferences = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const PageClass = document.documentElement.classList;

  useEffect(() => {
    SystemPrefferences && PageClass.add("dark");
  });

  const Toogle = () => {
    PageClass.toggle("dark");
  };

  return (
    <div className="hidden sm:block ">
      <MoonIcon
        className="h-8 text-gray-100 dark:hidden  cursor-pointer"
        onClick={Toogle}
      />
      <SunIcon
        className="hidden  h-8 text-gray-100 dark:block  cursor-pointer"
        onClick={Toogle}
      />
    </div>
  );
};

export default ToogleTheme;
