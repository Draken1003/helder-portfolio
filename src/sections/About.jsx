import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import Grid from "../components/Grid";
import Quote from "../components/global/Decorations";
import Section, { SectionHeader } from "../components/global/Section";
import aboutData from "../data/AboutData.json";
import skillsData from "../data/SkillsData.json";
import projectsData from "../data/Projects.json";

const EXTRA_PROJECT_LINKS = {
  Portfolio: "https://github.com/Draken1003/helder-portfolio",
};

const PROJECT_LINKS = Object.fromEntries(
  projectsData.map((project) => [project.title, project.github]),
);

function getProjectLink(projectName) {
  return PROJECT_LINKS[projectName] ?? EXTRA_PROJECT_LINKS[projectName] ?? null;
}
const ABOUT_BACKGROUNDS = [
  { src: "/assets/svg/shape2.svg", className: "top-1/4 -left-50" },
  { src: "/assets/svg/shape3.svg", className: "top-1/2 -right-50!" },
  { src: "/assets/svg/shape4.svg", className: "top-4/5 -left-50!" },
];

const ABOUT_DESCRIPTION = `Passionné par le développement web et les jeux vidéo, j'aime transformer des idées en expériences interactives. Ce qui me motive, c'est autant la réflexion derrière le code que la création d'interfaces dynamiques et agréables à utiliser. Curieux et autonome, j'aime découvrir de nouvelles technologies, relever de nouveaux défis et proposer des solutions adaptées. Aujourd'hui, je recherche une alternance en développement web ou en développement de jeux vidéo afin de continuer à progresser au sein d'une équipe et contribuer à des projets concrets.`;

function AssetImage({ src, className, ...props }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}${src}`}
      className={className}
      alt=""
      {...props}
    />
  );
}

export default function About() {
  const { parcours } = aboutData;

  return (
    <Section
      id="a_propos"
      className="relative flex flex-col items-center gap-30 px-7 pt-50"
    >
      {ABOUT_BACKGROUNDS.map((background) => (
        <AssetImage
          key={background.src}
          src={background.src}
          className={`parallax-bg bg-shape ${background.className}`}
          data-speed="0.3"
        />
      ))}

      <AboutIntro />

      <Grid
        title={
          <>
            Mes <br /> compétences
          </>
        }
        number={2}
        className="border-b-0"
      >
        <SkillsAccordion skills={skillsData} />
      </Grid>

      <Grid
        title={
          <>
            Mon <br /> parcours
          </>
        }
        number={3}
        className="border-b-0"
      >
        <div className="grid w-full grid-cols-1 sm:grid-cols-2">
          {parcours.map((item, index) => (
            <ParcoursCard
              key={`${item.year}-${item.name}`}
              name={item.name}
              year={item.year}
              place={item.place}
              isHighlighted={index === 0}
              isWide={index === 0}
            />
          ))}
        </div>
      </Grid>
    </Section>
  );
}

function AboutIntro() {
  return (
    <SectionHeader
      iconSrc="/assets/svg/shape1.svg"
      title="A propos de moi"
      number={1}
    >
      <div className="border-gray2 flex gap-2 border p-3">
        <Quote />
        <p className="text-xl">{ABOUT_DESCRIPTION}</p>
      </div>
    </SectionHeader>
  );
}

function SkillsAccordion({ skills }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkill = (index) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {skills.map((skill, index) => (
        <SkillDropdown
          key={skill.title}
          skill={skill}
          isOpen={activeIndex === index}
          onClick={() => toggleSkill(index)}
        />
      ))}
    </div>
  );
}

function SkillDropdown({ skill, isOpen, onClick }) {
  return (
    <article className="border-gray2 font-general-regular w-full border-b text-black">
      <button
        type="button"
        className={`group hover:bg-orange! flex w-full cursor-pointer items-center justify-between gap-5 p-4 px-5 text-left ${isOpen ? "bg-orange!" : "bg-transparent"}`}
        onClick={onClick}
      >
        <h3
          className={`text-2xl uppercase group-hover:text-black ${isOpen ? "text-black" : "text-gray1"}`}
        >
          {skill.title}
        </h3>
        <Plus
          strokeWidth={1}
          className={`shrink-0 transition-all duration-400 group-hover:text-black ${isOpen ? "rotate-45 text-black!" : "text-gray1"}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-275" : "max-h-0"}`}
      >
        <div className="border-gray2 border-t">
          <SkillDescription description={skill.description} />
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            <ConceptList title="Savoir-faire" items={skill.savoirFaire} />
            <ToolsAndSoftware tools={skill.tools} software={skill.software} />
            <ProjectList projects={skill.projects} />
          </div>
        </div>
      </div>
    </article>
  );
}
function SkillDescription({ description }) {
  if (!description) return null;

  return (
    <div className="border-gray2 border-b p-5">
      <p className="text-gray1 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
function ToolsAndSoftware({ tools = [], software = [] }) {
  if (tools.length === 0 && software.length === 0) return null;

  return (
    <div className="border-gray2 flex flex-col gap-5 border-b p-5 md:border-r md:border-b-0">
      <TagGroup title="Outils" items={tools} />
      <TagGroup
        title="Logiciels"
        items={software}
        className="border-gray2 border-t pt-5"
      />
    </div>
  );
}

function TagGroup({ title, items = [], className = "" }) {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      <SectionLabel>{title}</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="border-gray2 text-gray1 font-general-medium border px-3 py-1 text-xs tracking-wider uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ConceptList({ title, items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className="border-gray2 border-b p-5 md:border-r md:border-b-0">
      <SectionLabel>{title}</SectionLabel>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-gray1 flex items-start gap-2 text-sm">
            <span className="text-orange shrink-0">&&</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
function ProjectList({ projects = [] }) {
  if (projects.length === 0) return null;

  return (
    <div className="p-5">
      <SectionLabel>Projets</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {projects.map((project) => {
          const projectLink = getProjectLink(project);

          if (!projectLink) {
            return (
              <span
                key={project}
                className="border-gray2 text-gray1 font-general-medium flex items-center gap-2 border px-3 py-2 text-sm tracking-wider uppercase"
              >
                {project}
              </span>
            );
          }

          return (
            <a
              key={project}
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-gray2 text-gray1 hover:bg-orange hover:border-orange font-general-medium flex items-center gap-2 border px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200 hover:text-black"
            >
              {project}
              <ArrowUpRight strokeWidth={1} size={16} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <h5 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
      {children}
    </h5>
  );
}

function ParcoursCard({ isHighlighted, isWide = false, year, name, place }) {
  const mainColor = isHighlighted ? "text-black" : "text-orange";
  const secondaryColor = isHighlighted ? "text-black" : "text-gray1";
  const layoutClass = isWide
    ? "sm:col-span-2 sm:aspect-[2/1]"
    : "sm:aspect-auto md:aspect-square sm:border-r";

  return (
    <div
      className={`border-gray2 flex aspect-square flex-col justify-center border-b p-3 ${layoutClass} ${isHighlighted ? "bg-orange" : ""}`}
    >
      <div className={`${mainColor} text-8xl`}>{year}</div>

      <div className="mt-5 flex flex-1 gap-2">
        <Quote className={`${mainColor}!`} />

        <div className={`uppercase sm:text-xl ${secondaryColor}`}>
          <div className="font-general-bold">{name}</div>
          <div className="font-general-regular">{place}</div>
        </div>
      </div>
    </div>
  );
}
