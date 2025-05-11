import React, { useEffect, useRef } from "react";
import Button from "./reusable components/Button";
import InverseButton from "./reusable components/InverseButton";
import SlideIn from "./reusable components/SlideIn";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import SocialContainer from "./reusable components/SocialContainer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Home = ({ setActiveSection }) => {
  const [ref, inView] = useScrollAnimation();
  useEffect(() => {
    if (inView) {
      setActiveSection("home");
    }
  }, [inView, setActiveSection]);
  return (
    <section
      ref={ref}
      id="home"
      className="px-8 md:px-[8%] w-full h-[90vh] bg-[var(--bg-color)] text-[var(--text-color)] text-center sm:text-left flex items-center justify-center sm:justify-start relative"
    >
      <div className="max-w-[35rem] py-2">
        <h1 className="text-4xl relative font-extrabold">
          Hi, i'm ZARMANI <SlideIn inView={inView} />
        </h1>
        <div className="relative">
          <motion.h3
            initial={{ backgroundPosition: "-20rem" }}
            animate={{ backgroundPosition: "0" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative w-fit m-auto sm:m-0 text-3xl text-transparent font-extrabold py-2 text-stroke bg-linear-to-r from-[var(--main-color)] to-[var(--main-color)] text-clip bg-no-repeat"
          >
            FullStack Developer
            <SlideIn inView={inView} />
            {/* <motion.div
              initial={{ left: "0", opacity: 1 }}
              animate={{
                left: "18rem",
                opacity: [
                  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-[2px] h-full absolute top-0 left-o bg-[var(--main-color)] z-20"
            ></motion.div> */}
          </motion.h3>
        </div>
        <p className="pb-4 relative">
          Crafting powerful web applications that make an impact. Whether you
          need a stunning frontend, scalable backend, or both – I deliver
          high-performance solutions that help your business thrive in the
          digital landscape.
          <SlideIn inView={inView} />
        </p>
        <div className="inline-flex gap-8">
          <div className="relative">
            <SlideIn inView={inView} />
            <InverseButton
              bg="bg-[var(--text-color)]"
              textColor="text-[var(--bg-color)]"
            >
              <a href="mailto:idowuabdulazeez39@gmail.com">Hire me</a>
            </InverseButton>
          </div>
          <div className="relative">
            <SlideIn inView={inView} />
            <Button><a href="#contact">Let's talk</a></Button>
          </div>
          <div className="absolute bottom-8 md:bottom-14 left-8 right-0 md:left-[8%] md:right-auto flex items-center justify-center gap-4">
            <a href="https://github.com/zarmani34">
              <SocialContainer fa={<FaInstagram />} />
            </a>
            <a href="https://github.com/zarmani34">
              <SocialContainer fa={<FaTwitter />} />
            </a>
            <a href="https://github.com/zarmani34">
              <SocialContainer fa={<FaLinkedin />} />
            </a>
            <a href="https://github.com/zarmani34">
              <SocialContainer fa={<FaGithub />} />
            </a>
            {/* <SocialContainer fa={<FaHtml5 />} />
            <SocialContainer fa={<FaCss3 />} />
            <SocialContainer fa={<FaReact />} />
            <SocialContainer fa={<FaNodeJs />} />
            <SocialContainer fa={<FaPython />} />
            <SocialContainer fa={<FaJsSquare />} /> */}
            <SlideIn inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
