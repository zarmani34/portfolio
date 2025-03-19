import React, { useEffect, useState } from "react";
import SlideIn from "./reusable components/SlideIn";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Button from "./reusable components/Button";
import { motion } from "framer-motion";
import AnimatedInput from "./reusable components/AnimatedInput";
import AnimatedTextarea from "./reusable components/AnimatedTextArea";

const ContactMe = ({ setActiveSection }) => {
  const [ref, inView] = useScrollAnimation();

  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection]);
  return (
    <section
      ref={ref}
      id="contact"
      className="px-8 md:px-[8%] py-[2%] w-full text-[var(--text-color)] "
    >
      <h2 className="relative w-fit m-auto text-center flex-wrap text-4xl font-bold text-[var(--text-color)] py-[4%]">
        Contact <span className="text-[var(--main-color)]">Me</span>
        <SlideIn inView={inView} />
      </h2>
      <form className="max-w-sm sm:max-w-xl m-auto space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <div className="w-full sm:w-1/2">
            <AnimatedInput type="text" placeholder="Full Name" />
          </div>
          <div className="w-full sm:w-1/2">
            <AnimatedInput type="email" placeholder="Email Address" />
          </div>
          <SlideIn inView={inView} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <div className="w-full sm:w-1/2">
            <AnimatedInput type="number" placeholder="Mobile Number" />
          </div>
          <div className="w-full sm:w-1/2">
            <AnimatedInput type="text" placeholder="Subject" />
          </div>
          <SlideIn inView={inView} />
        </div>
        <div className="relative flex items-center justify-center">
          <AnimatedTextarea />
          <SlideIn inView={inView} />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" className="">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
