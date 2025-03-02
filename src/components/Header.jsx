import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    <header className="p-2 relative flex items-center justify-between bg-[var(--bg-color)]">
      <a href="#" className="text-2xl font-extrabold text-[var(--text-color)]">
        Zarmani
      </a>

      {/* Updated Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-lg  text-[var(--text-color)] hover:opacity-80 transition-all duration-300 mr-4 text-2xl cursor-pointer" // Increased padding and font size
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* Switched icons - show Sun in dark mode, Moon in light mode */}
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Menu Icon */}
      <div
        className="sm:hidden transition-all duration-500 z-10 cursor-pointer"
        id="menu-icon"
        onClick={handleMenuToggle}
      >
        <div
          className={`w-8 h-1.5 bg-[var(--text-color)] my-1.5 transition-all duration-500 
            ${showMenu ? "transform translate-y-[10px] rotate-[-45deg]" : ""}`}
        ></div>
        <div
          className={`w-8 h-1.5 bg-[var(--text-color)] my-1.5 transition-all duration-500 
            ${showMenu ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-8 h-1.5 bg-[var(--text-color)] my-1.5 transition-all duration-500 
            ${showMenu ? "transform translate-y-[-10px] rotate-[45deg]" : ""}`}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`
          absolute md:relative 
          top-[100%] md:top-0
          -left-[100%] md:left-auto
          w-full md:w-auto
          bg-[var(--second-bg-color)]
          md:bg-[var(--bg-color)]
          transition-all duration-300
          
          ${
            showMenu
              ? "opacity-100 visible left-0"
              : "opacity-0 invisible md:opacity-100 md:visible "
          }
          md:flex md:items-center md:justify-center
        `}
      >
        
        {["Home", "About", "Education", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block m-2 text-xl font-bold  text-[var(--text-color)] hover:text-[var(--main-color)] transition-colors duration-300 cursor-pointer"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
