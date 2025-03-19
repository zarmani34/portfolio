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

const Home = ({setActiveSection}) => {
  const [ref, inView] = useScrollAnimation();
  useEffect(() => {
    if (inView) {
      setActiveSection('home')
    }
  },[inView, setActiveSection])
  return (
    <section
      ref={ref}
      id="home"
      className="px-8 md:px-[8%] w-full h-[90vh] bg-[var(--bg-color)] text-[var(--text-color)] text-center md:text-left flex items-center justify-center md:justify-start relative"
    >
      <div className="max-w-[35rem] py-2">
        <h1 className="text-4xl font-bold relative">
          Hi, i'm ZARMANI <SlideIn inView={inView} />
        </h1>
        <h3 className="text-2xl font-bold py-2 relative">
          FullStack Developer <SlideIn inView={inView} />
        </h3>
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
              Hire me
            </InverseButton>
          </div>
          <div className="relative">
            <SlideIn inView={inView} />
            <Button>Let's talk</Button>
          </div>
          <div className="absolute bottom-8 md:bottom-14 left-8 right-0 md:left-[8%] md:right-auto flex items-center justify-center gap-4">
            <SocialContainer fa={<FaInstagram />} />
            <SocialContainer fa={<FaTwitter />} />
            <SocialContainer fa={<FaLinkedin />} />
            <SocialContainer fa={<FaGithub />} />
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
