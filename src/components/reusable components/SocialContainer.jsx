import React from "react";
import { motion } from "framer-motion";
import HoverSlideIn from "./HoverSlideIn";

const SocialContainer = ({ fa }) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative text-lg md:text-2xl text-[var(--main-color)] hover:text-[var(--bg-color)] p-2 border-2 rounded-full border-[var(--main-color)] z-10 cursor-pointer overflow-hidden"
    >
      {fa}
      <HoverSlideIn />
    </motion.div>
  );
};

export default SocialContainer;
