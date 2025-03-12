import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
const SlideIn = ({ bg = "bg-[var(--bg-color)]" }) => {
  const [ref, inView] = useScrollAnimation();
  return (
    <motion.span
      ref={ref}
      initial={!inView ? { width: "100%" } : { width: 0 }}
      // variants={{
      //   slide: { width: 0 },
      // }}
      animate={inView ? { width: 0 } : { width: "100%" }}
      // viewport={{ margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`absolute top-0 right-0 h-full bg-[var(--bg-color)] z-20 ${bg}`}
    />
  );
};

export default SlideIn;
