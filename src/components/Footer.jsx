import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import SlideIn from "./reusable components/SlideIn";

const Footer = () => {
  const [ref, inView] = useScrollAnimation();
  return (
    <footer
      ref={ref}
      id="footer"
      className="px-8 md:px-[8%] py-[2%] flex flex-col-reverse gap-2 items-center justify-between sm:flex-row bg-[var(--second-bg-color)]"
    >
      <div className="relative">
        <SlideIn bg="bg-[var(--second-bg-color)]" inView={inView} />
        <p>Copyright &copy; 2024 by Abdulazeez Idowu | All Rights Reserved</p>
      </div>
      <a href="#">
        <div className="text-xl bg-[var(--main-color)] px-1 py-2 rounded-sm cursor-pointer relative">
          <FaArrowUp />
          <SlideIn bg="bg-[var(--second-bg-color)]" inView={inView} />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
