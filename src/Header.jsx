import React, { useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="p-2 relative flex items-center justify-between ">
      <a href="#" className="text-2xl font-extrabold">
        Zarmani
      </a>
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg bg-[var(--second-bg-color)] text-[var(--text-color)] hover:opacity-80 transition-opacity duration-300"
      >
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>
      <div
        className="sm:hidden transition-all duration-500 z-10 cursor-pointer"
        id="menu-icon"
        onClick={handleMenuToggle}
      >
        <div
          className={`w-8 h-1.5 bg-black my-1.5 transition-all duration-500
            ${showMenu ? "transform translate-y-[10px] rotate-[-45deg]" : ""}`}
        ></div>
        <div
          className={`w-8 h-1.5 bg-black my-1.5 transition-all duration-500
            ${showMenu ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-8 h-1.5 bg-black my-1.5 transition-all duration-500
            ${showMenu ? "transform translate-y-[-10px] rotate-[45deg]" : ""}`}
        ></div>
      </div>
      <nav
        className={`
        absolute sm:relative 
        top-[100%] sm:top-0
        -left-[100%] sm:left-auto
        w-full sm:w-auto
        bg-white sm:bg-transparent
        transition-all duration-500  sm:flex
        ${
          showMenu
            ? "opacity-100 visible left-0"
            : "opacity-0 invisible sm:opacity-100 sm:visible "
        }
      `}
      >
        <a href="#home" className="block m-2 text-xl font-bold">
          Home
        </a>
        <a href="#about" className="block m-2 text-xl font-bold">
          About
        </a>
        <a href="#education" className="block m-2 text-xl font-bold">
          Education
        </a>
        <a href="#skills" className="block m-2 text-xl font-bold">
          Skills
        </a>
        <a href="#contact" className="block m-2 text-xl font-bold">
          Contact
        </a>

        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

export default Header;
