import { useEffect, useState } from "react";
import { ArrowUpRight, Plus, X } from "lucide-react";
import { useLenis } from "lenis/react";
import Grid from "../components/Grid";
import Quote from "../components/global/Decorations";
import Section, { SectionHeader } from "../components/global/Section";
import aboutData from "../data/AboutData.json";

const ABOUT_BACKGROUNDS = [
  { src: "/assets/svg/shape2.svg", className: "top-1/4 -left-50" },
  { src: "/assets/svg/shape3.svg", className: "top-1/2 -right-50!" },
  { src: "/assets/svg/shape4.svg", className: "top-4/5 -left-50!" },
];

const ABOUT_DESCRIPTION = `Intéressé par tous les aspects du développement (logique, front-end, UX), je vise à devenir un développeur polyvalent capable de s’adapter à différents projets et technologies. Attentif à l’ergonomie et au visuel, je cherche à créer des applications à la fois efficaces et agréables. Actuellement à la recherche d’un stage pour appliquer mes compétences, progresser sur le terrain et contribuer à des projets concrets au sein d’une équipe.`;

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
  const [activeSkillIndex, setActiveSkillIndex] = useState(null);
  const { skills, parcours } = aboutData;

  const toggleSkill = (index) => {
    setActiveSkillIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

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
        <div className="w-full">
          {skills.map((skill, index) => (
            <SkillAccordion
              key={skill.title}
              skill={skill}
              isOpen={activeSkillIndex === index}
              onClick={() => toggleSkill(index)}
            />
          ))}
        </div>
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
              isHighlighted={index === 1}
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

function SkillAccordion({ skill, isOpen, onClick }) {
  const [selectedAc, setSelectedAc] = useState(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!selectedAc) {
      lenis?.start();
      document.body.style.overflow = "";
      return;
    }

    lenis?.stop();
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [selectedAc, lenis]);

  return (
    <div className="border-gray2 font-general-regular w-full gap-2 border-b text-black">
      <button
        type="button"
        className={`group hover:bg-orange! flex w-full cursor-pointer items-center justify-between p-3 px-5 ${isOpen ? "bg-orange!" : "bg-transparent"}`}
        onClick={onClick}
      >
        <h2
          className={`text-2xl group-hover:text-black ${isOpen ? "text-black" : "text-gray1"}`}
        >
          {skill.title}
        </h2>
        <Plus
          strokeWidth={1}
          className={`text-gray1 transition-all duration-400 group-hover:text-black ${isOpen ? "rotate-45 text-black!" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="border-gray2 border-b p-5">
          <p className="text-gray1 text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>

        <div className="flex flex-col">
          {skill.ac?.map((ac) => (
            <SkillAcRow
              key={ac.id ?? ac.title}
              ac={ac}
              onSelect={setSelectedAc}
            />
          ))}
        </div>
      </div>

      {selectedAc && (
        <SkillAcModal ac={selectedAc} onClose={() => setSelectedAc(null)} />
      )}
    </div>
  );
}

function SkillAcRow({ ac, onSelect }) {
  return (
    <button
      type="button"
      className="border-gray2 group/ac flex w-full cursor-pointer items-center justify-between border-b p-4 px-5 text-left transition-colors duration-200 hover:bg-black"
      onClick={(event) => {
        event.stopPropagation();
        onSelect(ac);
      }}
    >
      <span className="text-gray1 truncate text-sm">{ac.title}</span>

      <div className="ml-4 flex shrink-0 items-center gap-3">
        <SkillStatusBadge acquired={ac.acquired} />
        <ArrowUpRight
          strokeWidth={1}
          className="text-gray2 group-hover/ac:text-orange transition-colors duration-200"
        />
      </div>
    </button>
  );
}

function SkillStatusBadge({ acquired, isDetailed = false }) {
  const label = acquired
    ? "Acquis"
    : isDetailed
      ? "En cours d'acquisition"
      : "En cours";

  return (
    <span
      className={`border-gray2 border px-2 py-0.5 text-xs ${
        isDetailed
          ? "font-general-regular px-3 py-1.5 uppercase"
          : "font-general-medium"
      } ${acquired ? "text-orange" : "text-gray2"}`}
    >
      {label}
    </span>
  );
}

function SkillAcModal({ ac, onClose }) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div
        className="border-gray2 flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden border bg-black/50"
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}
      >
        <div className="border-gray2 flex shrink-0 items-start justify-between border-b p-5">
          <div className="min-w-0 flex-1">
            <h3 className="text-gray1 font-general-regular mt-1 mb-2 text-base leading-snug uppercase">
              {ac.title}
            </h3>
            <SkillStatusBadge acquired={ac.acquired} isDetailed />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-orange mt-0.5 ml-4 shrink-0 transition-colors duration-200"
            aria-label="Fermer la popup"
          >
            <X strokeWidth={1} size={20} />
          </button>
        </div>

        <div className="scrollbar-content overflow-y-auto">
          <ModalDescription>{ac.description}</ModalDescription>
          <ModalList title="Éléments acquis" items={ac.acquiredElements} />
          <ModalList title="À développer" items={ac.toConsolidate} />
          <ModalTags title="Outils & exemples" items={ac.examples} />
          <ModalProjects projects={ac.projects} />
        </div>
      </div>
    </div>
  );
}

function ModalDescription({ children }) {
  return (
    <div className="border-gray2 border-b p-5">
      <p className="text-gray1 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function ModalList({ title, items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className="border-gray2 border-b p-5">
      <h4 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
        {title}
      </h4>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="text-gray1 flex items-center gap-1 text-sm">
            <span className="text-orange shrink-0">&&</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ModalTags({ title, items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className="border-gray2 border-b p-5">
      <h4 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
        {title}
      </h4>
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

function ModalProjects({ projects = [] }) {
  if (projects.length === 0) return null;

  return (
    <div className="p-5">
      <h4 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
        Projets
      </h4>
      <div className="flex flex-wrap gap-2">
        {projects.map((project) => (
          <a
            key={`${project.name}-${project.link}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-gray2 text-gray1 hover:bg-orange hover:border-orange font-general-medium flex items-center gap-2 border px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200 hover:text-black"
          >
            {project.name}
            <ArrowUpRight strokeWidth={1} size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}

function ParcoursCard({ isHighlighted, year, name, place }) {
  const mainColor = isHighlighted ? "text-black" : "text-orange";
  const secondaryColor = isHighlighted ? "text-black" : "text-gray1";

  return (
    <div
      className={`border-gray2 flex aspect-square flex-col justify-center border-b p-3 sm:aspect-auto md:aspect-square ${isHighlighted ? "bg-orange" : ""}`}
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
