import { motion } from "framer-motion";
import React from "react";
import { FaCalendar } from "react-icons/fa";

const JourneyContent = ({ date, tittle, institute, content }) => {
  return (
    <motion.div
      whileHover="hover"
      className="border-2 border-[var(--main-color)] text-[var(--text-color)] bg-transparent p-2 rounded-md  relative z-10 overflow-hidden"
    >
      <small className="text-[var(--main-color)] flex items-center justify-left gap-2 ">
        <span>{<FaCalendar />}</span>
        {date}
      </small>
      <h3 className="text-lg font-medium">
        {tittle} - {institute}
      </h3>
      <p className="leading-4 font-normal">{content}</p>
      <motion.span
        initial={{ width: 0 }}
        variants={{
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.4 }}
        className={`absolute top-0 left-0 h-full bg-[var(--main-color)]/10 -z-10`}
      />
    </motion.div>
  );
};

export default JourneyContent;
