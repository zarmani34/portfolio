import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = ({ showMenu, toggleDarkMode, darkMode, harmburgerRef }) => {
  return (
    <motion.nav
      initial={{ left: "-100%", opacity: 0, visibility: "hidden" }}
      animate={
        showMenu
          ? {
              left: 0,
              opacity: 1,
              visibility: "visible",
              transition: { duration: 0.2, delay: 0 },
            }
          : {
              left: "-100%",
              opacity: 0,
              visibility: "hidden",
              transition: { duration: 0.2, delay: 0.2 },
            }
      }
      className={`
      p-2 font-bold md:!p-0 z-10
      absolute md:!relative 
      top-[100%] md:!top-0
      w-full md:!w-auto
      bg-[var(--main-color)]
      md:!bg-transparent md:!justify-center
      md:!flex md:!items-center md:!gap-2
      md:!opacity-100 md:!visible md:!left-0
    `}
    >
      <motion.div
        initial={{ left: "-100%" }}
        animate={
          showMenu
            ? {
                left: 0,
                opacity: 1,
                visibility: "visible",
                transition: { duration: 0.2, delay: 0.2 },
              }
            : {
                left: "-100%",
                opacity: 0,
                visibility: "hidden",
                transition: { duration: 0.2, delay: 0 },
              }
        }
        className="absolute top-0 left-0 w-full h-full bg-[var(--bg-color)] -z-10 border-t-1 border-[var(--main-color)] text-[var(--text-color)] md:!border-none"
      />

      <motion.div
        initial={harmburgerRef.current ? { x: "-20rem", opacity: 0 } : { x: 0, opacity: 1 }}
        animate={harmburgerRef.current && showMenu &&{
          x: showMenu ? 0 : "-20rem",
          opacity: showMenu ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          delay: showMenu ? 0.2 : 0,
        }}
        className="md:!opacity-100 md:translate-x-[0] md:flex md:flex-row md:gap-2 text-base md:text-lg"
      >
        <button
          onClick={toggleDarkMode}
          className="pt-2 amber-200 text-[var(--text-color)] hover:text-[var(--main-color)] mr-4 cursor-pointer transition-all duration-500"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <span className="flex flex-row-reverse md:flex-row items-center justify-center gap-2">
              <span className="">
                <FaSun />
              </span>
              <span className="">Light Mode</span>
            </span>
          ) : (
            <span className="flex flex-row-reverse md:flex-row items-center justify-center gap-2">
              <span className="">
                <FaMoon />
              </span>
              <p className="">Dark Mode</p>
            </span>
          )}
        </button>
      {["Home", "About", "Education", "Skills", "Contact"].map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="block text-[var(--text-color)] hover:text-[var(--main-color)] transition-colors duration-500 cursor-pointer pt-2 md:!opacity-100 md:!translate-x-0"
        >
          {item}
        </motion.a>
      ))}
      </motion.div>

    </motion.nav>
  );
};

export default NavBar;
