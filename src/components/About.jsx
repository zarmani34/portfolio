import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./reusable components/Button";

const About = () => {
  const [desc, setDesc] = useState(false);
  const handleDescription = () => {
    setDesc(!desc);
  };
  return (
    <section className="bg-[var(--second-bg-color)] w-full text-center p-[10%]">
      <h2 className="text-center text-4xl font-bold text-[var(--text-color)] ">
        About <span className="text-[var(--main-color)]">Me</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="w-48 h-48 relative m-auto flex items-center justify-center rounded-full my-4">
        <img
          src="/img/about.jpg"
          alt="About me"
          className="w-[90%] h-[90%] object-cover  border-2 border-[var(--main-color)] rounded-full"
        />
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full border-x-2 border-x-[var(--main-color)] border-y-2 border-y-[var(--second-bg-color)] rounded-full"
        />
        {/* <span className="animate scroll" style={{ "--i": 2 }}></span> */}
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[var(--text-color)] my-4">
          Frontend Developer
          {/* <span className="animate scroll" style={{ "--i": 3 }}></span> */}
        </h2>
        <p className="text-[var(--text-color)] md:w-[70%]">
          I'm a Frontend Developer turned Full Stack Enthusiast, on a journey
          from crafting visually stunning interfaces to building powerful
          backends. With a love for clean code and smooth user experiences, I've
          spent years refining my frontend expertise, and now, I'm diving deep
          into the backend world to round out my skill set and develop seamless,
          end-to-end solutions.{" "}
          {desc && (
            <span>
              Driven by a passion for creating efficient, user-centric
              applications. Over the years, I've honed my frontend skills,
              focusing on clean, elegant code and intuitive user experiences.
              Now, I'm expanding my expertise to the backend, eager to build
              robust, scalable solutions that bring both sides of development
              together. My journey is fueled by a relentless curiosity and a
              love for solving complex problems—from designing sleek, responsive
              interfaces to engineering powerful, under-the-hood systems.
            </span>
          )}
        </p>

        <Button handleClick={handleDescription}>
          {desc ? "Show less" : "Read More"}
        </Button>
      </div>
    </section>
  );
};

export default About;
