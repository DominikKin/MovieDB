import React from "react";
import { useGlobalContext } from "./context";

function ToggleButton() {
  const { theme, setTheme } = useGlobalContext();
  function handleToggle() {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  }
  return (
    <button className="toggle-button btn" onClick={handleToggle}>
      {theme === "light-theme" ? "dark" : "light"}
    </button>
  );
}

export default ToggleButton;
