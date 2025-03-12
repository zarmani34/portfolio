import { motion } from "framer-motion";
import React from "react";
import { FaCalendar } from "react-icons/fa";

const JourneyContent = ({ date, tittle, institute, content }) => {
  return (
    <motion.div
      whileHover="hover"
      className="border-2 border-[var(--main-color)] text-[var(--text-color)] bg-transparent p-2 rounded-2xl md:h-40 relative z-10 overflow-hidden"
    >
      <small className="text-[var(--main-color)] flex items-center justify-left pt-2 gap-2 ">
        <span>{<FaCalendar />}</span>
        {date}
      </small>
      <h3 className="text-xl font-bold">
        {tittle} - {institute}
      </h3>
      <p className="">{content}</p>
      <motion.span
        initial={{ width: 0 }}
        variants={{
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.4 }}
        className={`absolute top-0 left-0 h-full bg-[var(--main-color)]/20 -z-10`}
      />
    </motion.div>
  );
};

export default JourneyContent;
