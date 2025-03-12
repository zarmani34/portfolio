import React from "react";
import { motion } from "framer-motion";

const ButtonSlideIn = ({ bg='bg-[var(--main-color)]'}) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      variants={{
        hover: { width: "100%" },
      }}
      transition={{ duration: 0.4 }}
      className={`absolute top-0 left-0 h-full ${bg} -z-10`}
    />
  );
};

export default ButtonSlideIn;