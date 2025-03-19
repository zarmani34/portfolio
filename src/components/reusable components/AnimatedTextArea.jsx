import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedTextarea = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Your Message"
        required
        className="w-full resize-none p-2 border-2 border-[var(--main-color)] rounded-md placeholder:text-[var(--text-color)] relative z-10 bg-transparent outline-0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      ></textarea>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: isFocused ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full bg-[var(--main-color)]/10 rounded-md"
      />
    </div>
  );
};

export default AnimatedTextarea;