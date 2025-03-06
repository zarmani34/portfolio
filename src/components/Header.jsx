import React, { useState, useEffect, useRef } from "react";
import Harmburger from "./Harmburger";
import NavBar from "./NavBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const harmburgerRef = useRef(null);

  // Check system preference on mount
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
    // Save preference
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <header className="p-4 md:px-[5%] relative flex items-center justify-between bg-[var(--bg-color)]">
      <a href="#" className="text-2xl font-extrabold text-[var(--text-color)]">
        Zarmani
      </a>
      <Harmburger
        showMenu={showMenu}
        handleMenuToggle={handleMenuToggle}
        harmburgerRef={harmburgerRef}
      />

      {/* Navigation */}
      <NavBar
        showMenu={showMenu}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        harmburgerRef={harmburgerRef}
      />
    </header>
  );
};

export default Header;
