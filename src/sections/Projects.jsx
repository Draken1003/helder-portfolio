import { useRef, useEffect } from "react";
import Section, { SectionHeader } from "../components/global/Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import projects from "../data/Projects.json";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  return (
    <Section
      id="projets"
      className={"relative flex w-full flex-col items-center px-7"}
    >
      <img
        src={`${import.meta.env.BASE_URL}/assets/svg/shape5.svg`}
        className="bg-shape top-2/3 -right-50"
        alt=""
      />

      <SectionHeader iconSrc={"/assets/svg/shape6.svg"} title={"Mes projets"}>
        <div className="border-gray2 border">
          {projects.map((projet, i) => (
            <TextEffect
              key={i}
              text={projet.title}
              hiddenText={projet.date}
              github={projet.github}
            />
          ))}
        </div>{" "}
      </SectionHeader>
    </Section>
  );
}

const TextEffect = ({ text, hiddenText, github }) => {
  const textRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    gsap.to(element, {
      backgroundSize: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "40% 90%",
        end: "60% 50%",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div className="group border-gray3 relative flex border-b p-3 sm:justify-start">
      <div className="animated-text-wrapper" />
      <a href={github} target="_blank">
        <h1
          ref={textRef}
          className="animated-text font-clash-bold text-gray2/60 text-4xl uppercase sm:text-6xl md:ml-10 md:text-7xl"
        >
          {text} <span className="text-black">{hiddenText}</span>
        </h1>
      </a>
    </div>
  );
};
