import React from "react";
import Button from "./reusable components/Button";
import InverseButton from "./reusable components/InverseButton";
import SlideIn from "./reusable components/SlideIn";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import SocialContainer from "./reusable components/SocialContainer";

const Home = () => {
  return (
      <section className="px-8 md:px-[8%] w-full h-[90vh] bg-[var(--bg-color)] text-[var(--text-color)] text-center md:text-left flex items-center justify-center md:justify-start relative">
        <div className="max-w-[35rem] py-2">
          <h1 className="text-4xl font-bold relative">Hi, i'm ZARMANI <SlideIn /></h1>
          <h3 className="text-2xl font-bold py-2 relative">FullStack Developer <SlideIn /></h3>
          <p className="pb-4 relative">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur ex veritatis, quidem repudiandae at, maiores saepe
            praesentium ratione cum nihil numquam, exercitationem aut incidunt
            vitae. Perferendis impedit mollitia vel saepe.
            <SlideIn />
          </p>
          <div className="inline-flex gap-8">
            <div className="relative">
              <SlideIn />
              <InverseButton bg='bg-[var(--text-color)]' textColor='text-[var(--bg-color)]'>
                Hire me
              </InverseButton>
            </div>
            <div className="relative">
              <SlideIn />
              <Button>
                Let's talk
              </Button>
            </div>
            <div className="absolute bottom-8 md:bottom-14 left-8 right-0 md:left-[8%] md:right-auto flex items-center justify-center gap-4">
              <SocialContainer fa={<FaInstagramSquare />}/>
              <SocialContainer fa={<FaTwitterSquare />}/>
              <SocialContainer  fa={<FaLinkedin />} />
              <SocialContainer  fa={<FaGithubSquare />} />
              <SlideIn />
            </div>

          </div>
        </div>
      </section>
  );
};

export default Home;
