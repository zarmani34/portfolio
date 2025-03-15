import React from "react";
import { motion } from "framer-motion";
const SlideIn = ({ bg = "bg-[var(--bg-color)]", inView }) => {
  return (
    <motion.span
      initial={!inView ? { width: "100%" } : { width: 0 }}
      animate={inView ? { width: 0 } : { width: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`absolute top-0 right-0 h-full bg-[var(--bg-color)] z-20 ${bg}`}
    />
  );
};

export default SlideIn;
