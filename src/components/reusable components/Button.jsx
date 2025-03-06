import React from "react";
import { color, motion } from "framer-motion";

const Button = ({ children, handleClick }) => {
  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="relative w-30 p-[.5rem] m-auto text-[.9rem] font-medium hover:text-[var(--main-color)] text-[var(--bg-color)] bg-[var(--main-color)] rounded-lg my-4 cursor-pointer z-10 overflow-hidden transition-colors duration-400"
    >
      {children}
      <motion.span
        initial={{ width: 0 }}
        variants={{
          hover: { scale: 1.05, width: "100%" },
        }}
        transition={{ duration: .4 }}
        className="absolute top-0 left-0 h-full bg-[var(--bg-color)]  -z-10"
      />
    </motion.button>
  );
};

export default Button;
