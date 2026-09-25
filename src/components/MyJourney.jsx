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
                  date={"2024"}
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
                  date={"2023"}
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
                  date={"2023"}
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
                  date={"Jul 2026 - Present"}
                  tittle={"Freelance Web Developer"}
                  institute={"Self-employed"}
                  content={
                    "Delivering custom websites and web applications for clients, end to end from requirements to deployment. Maintaining long-term client relationships through responsive support and ongoing iteration."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"Jun 2024 - Jul 2026"}
                  tittle={"Full Stack Developer"}
                  institute={"BISMAK Excel Technical Services"}
                  content={
                    "Developed a full-stack business management portal with separate client, staff, and administrator workflows, role-based access control, real-time SSE notifications, and JWT authentication. Built RESTful APIs with Django REST Framework for invoices, certificates, document uploads, and technical reports, and deployed the frontend on Vercel and backend on Railway with production-ready configuration."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"Sep 2023 - Jan 2024"}
                  tittle={"Buzz It \u2013 Social Shout-Out Platform"}
                  institute={"Project"}
                  content={
                    "Designed a full-stack social platform for creating and viewing user shout-outs. Developed REST APIs with Django REST Framework for authentication and application data, protected dashboard flows using serializers and permissions, and built the frontend with reusable React components and API-driven state management."
                  }
                />
                <div className="absolute top-0 -left-6 md:-left-10 w-4 h-4 bg-[var(--main-color)] rounded-full" />
              </div>
              <div className="relative">
                <JourneyContent
                  date={"Sep 2023"}
                  tittle={"Developer Portfolio"}
                  institute={"Project"}
                  content={
                    "Built a full-stack personal portfolio showcasing software projects, technical skills, and professional experience. Built a Django/DRF backend to serve portfolio data through RESTful APIs, connected it to a responsive React frontend, and deployed the frontend on GitHub Pages with backend services on Railway."
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