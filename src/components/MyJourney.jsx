import React, { useEffect } from "react";
import SlideIn from "./reusable components/SlideIn";
import { FaCalendar } from "react-icons/fa";
import JourneyContent from "./reusable components/JourneyContent";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const MyJourney = ({setActiveSection}) => {
  const [ref, inView] = useScrollAnimation(0.25);
  useEffect(() => {
      if (inView) {
        setActiveSection('education')
      }
    },[inView, setActiveSection])
  return (
    <section
      ref={ref}
      id="education"
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
                  date={"2023"}
                  tittle={"Certificate in Full Stack Web Development"}
                  institute={"TechAffrica"}
                  content={
                    "Comprehensive training in modern web development technologies and practices, with a focus on building production-ready applications using React, Node.js, and related technologies."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2022"}
                  tittle={"Diploma in Backend Development (Python)"}
                  institute={"HiiT Training Institute"}
                  content={
                    "Specialized training in server-side development with Python, focusing on Django framework, REST API development, database design, and backend architecture."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2022"}
                  tittle={"Diploma in Frontend Development"}
                  institute={"HiiT Training Institute"}
                  content={
                    "Intensive training in frontend technologies including HTML5, CSS3, JavaScript, and modern frameworks like React. Emphasis on responsive design, accessibility, and user experience."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"2016 - 2020"}
                  tittle={"B.Sc. in Food Science and Technology"}
                  institute={"Kwara State University"}
                  content={
                    "Foundational education in scientific principles, analytical thinking, and problem-solving methodologies. Developed strong research and documentation skills applicable to technical projects."
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
                  date={"Nov 2023 - Present"}
                  tittle={"Freelance Web Developer"}
                  institute={"Self-employed"}
                  content={
                    "Collaborating with multiple clients to develop custom websites and web applications. Transforming client requirements into functional specifications and technical solutions while maintaining ongoing client relationships."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"Jun 2023 - Nov 2023"}
                  tittle={"Web Developer"}
                  institute={"BISMAK EXCEL TECHNICAL SERVICES"}
                  content={
                    "Developed and maintained the company's website using Django and Python. Designed and implemented RESTful APIs for third-party service integration. Improved website loading speed by 45% through code optimization."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"May 2023 - Jun 2023"}
                  tittle={"Full Stack Developer"}
                  institute={"ShopDrop (Project)"}
                  content={
                    "Engineered a React-based e-commerce platform with dynamic product listings and filter functionality. Built a comprehensive shopping cart system with Redux and implemented secure checkout flow with payment gateway integration."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"Aug 2022 - Oct 2022"}
                  tittle={"Frontend Developer"}
                  institute={"StreamHaven (Project)"}
                  content={
                    "Developed a streaming platform using React, Tailwind CSS, and Firebase. Integrated OpenAI GPT API to create a personalized recommendation engine, increasing user engagement by 25%."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
               <div className="relative">
                <JourneyContent
                  date={"Jun 2022 - Jul 2022"}
                  tittle={"Frontend Developer"}
                  institute={"Buzz-It (Project)"}
                  content={
                    "Transformed complex Figma UI designs into a pixel-perfect, fully responsive web application. Implemented responsive design principles and reduced initial load time by 30% through code optimization."
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

export default MyJourney;