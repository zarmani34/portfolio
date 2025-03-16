import React from "react";
import SkillBar from "./SkillBar";

const SkillContainer = ({ skill, percentage }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between font-bold text-md">
        <p>{skill}</p>
        <p>{percentage}</p>
      </div>
      <SkillBar percentage={percentage} />
    </div>
  );
};

export default SkillContainer;
