import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Harmburger from "./Harmburger";
import NavBar from "./NavBar";
import SlideIn from "./reusable components/SlideIn";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const Header = ({ activeSection }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const harmburgerRef = useRef(null);
  const navRef = useRef(null);
  const [ref, inView] = useScrollAnimation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        harmburgerRef.current &&
        !harmburgerRef.current.contains(event.target) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    const handleScroll = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {

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
    <header
      ref={ref}
      id="header"
      className="py-4 px-8 md:px-[4%] lg:px-[8%] sticky top-0 left-0 w-full z-50 flex items-center justify-between bg-[var(--bg-color)]"
    >
      <motion.a
        href="#"
        className="relative text-2xl font-extrabold text-[var(--text-color)]"
      >
        Zarmani
        <SlideIn inView={inView} />
      </motion.a>
      <Harmburger
        showMenu={showMenu}
        handleMenuToggle={handleMenuToggle}
        harmburgerRef={harmburgerRef}
        inView={inView}
      />

      {/* Navigation */}
      <NavBar
        navRef={navRef}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        inView={inView}
        activeSection={activeSection}
      />
    </header>
  );
};

export default Header;
