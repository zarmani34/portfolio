import React from "react";
import { motion, MotionConfig } from "framer-motion";
import SlideIn from "./reusable components/SlideIn";

const Harmburger = ({ showMenu, handleMenuToggle, harmburgerRef, inView }) => {
  return (
    <motion.div
      ref={harmburgerRef}
      className="md:hidden z-10 cursor-pointer"
      id="menu-icon"
      onClick={() => {
        handleMenuToggle();
      }}
    >
      <SlideIn inView={inView} />
      <MotionConfig transition={{ duration: 0.3 }}>
        <motion.div
          animate={
            showMenu
              ? {
                  y: 8,
                  rotate: -45,
                }
              : {
                  y: 0,
                  rotate: 0,
                }
          }
          className="w-7 h-1 bg-[var(--text-color)] my-1.5 rounded-xl"
        />
        <motion.div
          animate={
            showMenu
              ? {
                  opacity: 0,
                }
              : {
                  opacity: 1,
                }
          }
          className="w-7 h-1 bg-[var(--text-color)] my-1.5 rounded-xl"
        />
        <motion.div
          animate={
            showMenu
              ? {
                  y: -8,
                  rotate: 45,
                }
              : {
                  y: 0,
                  rotate: 0,
                }
          }
          className="w-7 h-1 bg-[var(--text-color)] my-1.5 rounded-xl"
        />
      </MotionConfig>
    </motion.div>
  );
};

export default Harmburger;
