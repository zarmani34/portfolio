import React from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import SlideIn from "./reusable components/SlideIn";
import SkillContainer from "./reusable components/SkillContainer";
import { motion } from "framer-motion";

const Skills = () => {
  const [ref, inView] = useScrollAnimation();
  return (
    <section
      ref={ref}
      className="px-8 md:px-[8%] py-[2%] w-full text-[var(--text-color)] bg-[var(--second-bg-color)] "
    >
      <h2 className="relative w-fit m-auto text-center flex-wrap text-4xl font-bold text-[var(--text-color)] py-[4%]">
        My <span className="text-[var(--main-color)]">Skills</span>
        <SlideIn bg={"bg-[var(--second-bg-color)]"} inView={inView} />
      </h2>
      <div className="flex flex-wrap items-start justify-center gap-8 md:gap-16 py-4 relative">
        <motion.div
          whileHover="hover"
          className="relative w-full md:w-[45%] min-w-xs max-w-lg grow-1 shrink-1 z-10 overflow-hidden"
        >
          <div className="rounded-md border-2 border-[var(--main-color)] space-y-4  md:p-4 p-2">
              <h3 className="relative text-2xl font-bold text-[var(--text-color)]">
                Coding Skills
                <SlideIn bg={"bg-[var(--second-bg-color)]"} inView={inView} />
              </h3>
              <SkillContainer skill="Html" percentage="90%" />
              <SkillContainer skill="Css" percentage="75%" />
              <SkillContainer skill="JavaScript" percentage="65%" />
              <SkillContainer skill="Python" percentage="65%" />
          </div>
          <SlideIn bg={"bg-[var(--second-bg-color)]"} inView={inView} />
          <motion.span
            initial={{ width: 0 }}
            variants={{
              hover: { width: "100%" },
            }}
            transition={{ duration: 0.4 }}
            className={`absolute top-0 left-0 h-full bg-[var(--main-color)]/10 -z-10`}
          />
        </motion.div>
        <motion.div
        whileHover="hover" className="w-full md:w-[45%] min-w-xs max-w-lg grow-1 shrink-1 z-10 relative">
          <div className="rounded-md border-2 border-[var(--main-color)] space-y-4  md:p-4 p-2">
              <h3 className="relative text-2xl font-bold text-[var(--text-color)]">
                Professional Skills
                <SlideIn bg={"bg-[var(--second-bg-color)]"} inView={inView} />
              </h3>
              <SkillContainer skill="Web design" percentage="90%" />
              <SkillContainer skill="Web development" percentage="85%" />
              <SkillContainer skill="UI/UX" percentage="60%" />
              <SkillContainer skill="SEO Marketing" percentage="50%" />
          </div>
          <SlideIn bg={"bg-[var(--second-bg-color)]"} inView={inView} />
          <motion.span
            initial={{ width: 0 }}
            variants={{
              hover: { width: "100%" },
            }}
            transition={{ duration: 0.4 }}
            className={`absolute top-0 left-0 h-full bg-[var(--main-color)]/10 -z-10`}
          />
          
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
