import React from "react";
import SlideIn from "./reusable components/SlideIn";
import { FaCalendar } from "react-icons/fa";
import JourneyContent from "./reusable components/JourneyContent";

const MyJOurney = () => {
  return (
    <section className="px-8 md:px-[8%] py-[8%] w-full h-[90vh] bg-[var(--bg-color)] text-[var(--text-color)] ">
      <h2 className="relative w-fit m-auto text-center text-4xl font-bold text-[var(--text-color)]">
        My <span className="text-[var(--main-color)]">Journey</span>
        <SlideIn />
      </h2>

      <div className="flex items-center justify-center flex-col md:flex-row gap-8 md:gap-16 py-4 relative">
        <div className="w-1/2">
          <h3 className="relative text-2xl font-bold text-[var(--text-color)] p-4">
            Education
            <SlideIn />
          </h3>
          <div className="pl-3 relative">
            <SlideIn />
            <div className="border-l-2 border-[var(--main-color)] pl-8 flex flex-col gap-4 relative">
              {/* <SlideIn /> */}
              <div className="relative">
                <JourneyContent
                  date={"2014-2019"}
                  tittle={"Bsc Food, Sci and Technology"}
                  institute={"Kwara state University"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-11 w-6 h-6 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2014-2019"}
                  tittle={"Bsc Food, Sci and Technology"}
                  institute={"Kwara state University"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-11 w-6 h-6 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2014-2019"}
                  tittle={"Bsc Food, Sci and Technology"}
                  institute={"Kwara state University"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-11 w-6 h-6 bg-[var(--main-color)] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="relative text-2xl font-bold text-[var(--text-color)] p-4">
            Experience
            <SlideIn />
          </h3>
          <div className="pl-3 relative">
          <SlideIn />
            <div className="border-l-2 border-[var(--main-color)] pl-8 flex flex-col gap-4 relative">
              <div className="relative">
                <JourneyContent
                  date={"2017-2019"}
                  tittle={"Front End Developer"}
                  institute={"Bismak Excel Technical Service"}
                  content={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita accusamus natus repellat repudiandae aliquam nemo culpa cum repellendus! Amet!"
                  }
                />
                <div className="absolute top-0 -left-11 w-6 h-6 bg-[var(--main-color)] rounded-full" />
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
                <div className="absolute top-0 -left-11 w-6 h-6 bg-[var(--main-color)] rounded-full" />
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
                <div className="absolute top-0 -left-11 w-6 h-6 bg-[var(--main-color)] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJOurney;
