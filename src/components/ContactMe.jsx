import React, { useEffect, useState } from "react";
import SlideIn from "./reusable components/SlideIn";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { motion } from "framer-motion";
import Button from "./reusable components/Button";
import AnimatedInput from "./reusable components/AnimatedInput";
import AnimatedTextarea from "./reusable components/AnimatedTextArea";

const ContactMe = ({ setActiveSection }) => {
  const [ref, inView] = useScrollAnimation();
  const [loading, setLoading] = useState(false); // To handle loading state
  const [responseMessage, setResponseMessage] = useState(""); // To handle success/failure message

  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Get form data

    setLoading(true); // Set loading state to true while submitting

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        body: formData, // Send form data to the backend
      });

      const result = await response.json(); // Get the response in JSON format

      if (response.ok) {
        setResponseMessage("Message sent successfully!"); // Success message
      } else {
        setResponseMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setResponseMessage("There was an error submitting the form.");
    } finally {
      setLoading(false); // Reset loading state after the submission
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="px-8 md:px-[8%] py-[2%] w-full text-[var(--text-color)]"
    >
      <h2 className="relative w-fit m-auto text-center flex-wrap text-4xl font-bold text-[var(--text-color)] py-[4%]">
        Contact <span className="text-[var(--main-color)]">Me</span>
        <SlideIn inView={inView} />
      </h2>

      <form
        onSubmit={handleSubmit} // Handle form submission with JavaScript
        className="max-w-sm sm:max-w-xl m-auto space-y-4 relative"
      >
        {responseMessage && (
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, x: "-100%" }} // Start off-screen to the left
            animate={{ opacity: 1, x: 0 }} // Slide in from the left
            exit={{ opacity: 0, x: "100%" }} // Slide out to the right
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            onAnimationComplete={() =>
              setTimeout(() => setResponseMessage(""), 3000)
            } // Hide message after 3 seconds
          >
            <p>{responseMessage}</p>
          </motion.div>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <div className="w-full sm:w-1/2">
            <AnimatedInput type="text" name="name" placeholder="Full Name" />
          </div>
          <div className="w-full sm:w-1/2">
            <AnimatedInput
              type="email"
              name="mail"
              placeholder="Email Address"
            />
          </div>
          <SlideIn inView={inView} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <div className="w-full sm:w-1/2">
            <AnimatedInput
              type="number"
              name="number"
              placeholder="Mobile Number"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <AnimatedInput type="text" name="subject" placeholder="Subject" />
          </div>
          <SlideIn inView={inView} />
        </div>

        <div className="relative flex items-center justify-center">
          <AnimatedTextarea name="message" placeholder="Your Message" />
          <SlideIn inView={inView} />
        </div>

        <div className="flex items-center justify-center">
          <Button type="submit" disabled={loading} className="">
            {loading ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
