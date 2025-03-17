import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedInput = ({ type, placeholder, required = true }) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
      <div className="relative w-full">
        <input
          type={type}
          className="w-full p-2 border-2 border-[var(--main-color)] rounded-md placeholder:text-[var(--text-color)] relative z-10 bg-transparent"
          placeholder={placeholder}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isFocused ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full bg-[var(--main-color)]/10 rounded-md"
        />
      </div>
    );
  };

  export default AnimatedInput;