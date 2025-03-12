import React from "react";
import { motion } from "framer-motion";
import HoverSlideIn from "./HoverSlideIn";

const Button = ({ children, handleClick }) => {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`relative w-32 p-[.5rem] md:h-12 font-bold text-[var(--main-color)] border-2 border-[var(--main-color)] hover:text-[var(--bg-color)] rounded-lg my-4 cursor-pointer z-10 overflow-hidden transition-colors duration-400`}
    >
      {children}
      <HoverSlideIn />
    </motion.button>
  );
};

export default Button;
