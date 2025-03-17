import React from "react";
import SlideIn from "./reusable components/SlideIn";
import { FaCalendar } from "react-icons/fa";
import JourneyContent from "./reusable components/JourneyContent";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const MyJOurney = () => {
  const [ref, inView] = useScrollAnimation( 0.4);
  return (
    <section
      ref={ref}
      className="px-8 md:px-[8%] py-[2%] w-full text-[var(--text-color)] "
    >
      <h2 className="relative w-fit m-auto text-center flex-wrap text-4xl font-bold text-[var(--text-color)] py-[4%]">
        My <span className="text-[var(--main-color)]">Journey</span>
        <SlideIn inView={inView} />
      </h2>

      <div className="flex flex-wrap items-start justify-center gap-8 md:gap-16 py-4 relative">
        <div className="w-full md:w-[45%] min-w-sm grow-1 max-w-lg">
          <h3 className="relative text-2xl font-bold text-[var(--text-color)] p-4">
            Education
            <SlideIn inView={inView} />
          </h3>
              <div className="pl-4 pr-4 md:pl-3 md:pr-0 relative">
            <SlideIn inView={inView} />
            <div className="border-l-2 border-[var(--main-color)] pl-4 md:pl-8 flex flex-col gap-4 relative">
              <div className="relative">
                <JourneyContent
                  date={"2014 - 2019"}
                  tittle={"Bsc Food, Sci and Technology"}
                  institute={"Kwara state University"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2014 - 2019"}
                  tittle={"Bsc Food, Sci and Technology"}
                  institute={"Kwara state University"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2014 - 2019"}
                  tittle={"Bsc Food, Sci and Technology"}
                  institute={"Kwara state University"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] min-w-sm grow-1 max-w-lg">
          <h3 className="relative text-2xl font-bold text-[var(--text-color)] p-4">
            Experience
            <SlideIn inView={inView} />
          </h3>
          <div className="pl-3 pr-2 md:pr-0 relative">
            <SlideIn inView={inView} />
            <div className="border-l-2 border-[var(--main-color)] pl-4 md:pl-8 flex flex-col gap-4 relative">
              <div className="relative">
                <JourneyContent
                  date={"2017-2019"}
                  tittle={"Front End Developer"}
                  institute={"Bismak Excel Technical Service"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2017-2019"}
                  tittle={"Front End Developer"}
                  institute={"Bismak Excel Technical Service"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2017-2019"}
                  tittle={"Front End Developer"}
                  institute={"Bismak Excel Technical Service"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJOurney;
