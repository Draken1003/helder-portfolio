import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Section, { SectionHeader } from "../components/global/Section";
import projects from "../data/Projects.json";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  return (
    <Section
      id="projets"
      className="relative flex w-full flex-col items-center px-7"
    >
      <img
        src={`${import.meta.env.BASE_URL}/assets/svg/shape5.svg`}
        className="bg-shape top-2/3 -right-50"
        alt=""
      />

      <SectionHeader iconSrc="/assets/svg/shape6.svg" title="Mes projets">
        <div className="border-gray2 border">
          {projects.map((project) => (
            <ProjectTitleLink key={project.title} project={project} />
          ))}
        </div>
      </SectionHeader>
    </Section>
  );
}

function ProjectTitleLink({ project }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return undefined;

    const animation = gsap.to(titleElement, {
      backgroundSize: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: titleElement,
        start: "40% 90%",
        end: "60% 50%",
        scrub: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div className="group border-gray3 relative flex border-b p-3 sm:justify-start">
      <div className="animated-text-wrapper" />
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <h1
          ref={titleRef}
          className="animated-text font-clash-bold text-gray2/60 text-4xl uppercase sm:text-6xl md:ml-10 md:text-7xl"
        >
          {project.title}{" "}
          <span className="flex text-black">{project.date}</span>
        </h1>
      </a>
    </div>
  );
}
