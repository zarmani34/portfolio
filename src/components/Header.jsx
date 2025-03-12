import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Harmburger from "./Harmburger";
import NavBar from "./NavBar";
import SlideIn from "./reusable components/SlideIn";

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
    <header className="py-4 px-8 md:px-[8%] sticky top-0 left-0 w-full z-50 flex items-center justify-between bg-[var(--bg-color)]">
      <motion.a
        // whileInView="slide"
        href="#"
        className="relative text-2xl font-extrabold text-[var(--text-color)]"
      >
        Zarmani
        <SlideIn />
      </motion.a>
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
