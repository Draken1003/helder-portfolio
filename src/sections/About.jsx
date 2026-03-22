import { useState } from "react";
import Section, { SectionHeader } from "../components/global/Section";
import Grid from "../components/Grid";
import aboutData from "../data/AboutData.json";
import { ArrowUpRight, Plus } from "lucide-react";
import Quote from "../components/global/Decorations";
import TechIcon from "../components/global/TechIcon";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const competences = aboutData.skills;
  const parcours = aboutData.parcours;

  return (
    <Section
      id="a_propos"
      className="relative flex flex-col items-center gap-30 px-7 pt-50"
    >
      {/* Background */}
      <img
        src={`${import.meta.env.BASE_URL}/assets/svg/shape2.svg`}
        className="parallax-bg bg-shape top-1/4 -left-50"
        alt=""
        data-speed="0.3"
      />
      <img
        src={`${import.meta.env.BASE_URL}/assets/svg/shape3.svg`}
        className="parallax-bg bg-shape top-1/2 -right-50!"
        alt=""
        data-speed="0.3"
      />
      <img
        src={`${import.meta.env.BASE_URL}/assets/svg/shape4.svg`}
        className="parallax-bg bg-shape top-4/5 -left-50!"
        alt=""
        data-speed="0.3"
      />

      {/* Header*/}
      <SectionHeader
        iconSrc={"/assets/svg/shape1.svg"}
        title="A propos de moi"
        number={1}
      >
        {/* Content */}
        <div className="border-gray2 flex gap-2 border p-3">
          <Quote />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </SectionHeader>

      {/* Skills */}
      <Grid
        title={
          <>
            Mes <br /> compétences
          </>
        }
        number={2}
        className={"border-b-0"}
      >
        <div className="w-full">
          {competences.map((competence, index) => (
            <Skill
              key={index}
              data={competence}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </Grid>

      {/* Parcours */}
      <Grid
        title={
          <>
            Mon <br /> parcours
          </>
        }
        number={3}
        className={"border-b-0"}
      >
        <div className="grid w-full grid-cols-1 sm:grid-cols-2">
          {parcours.map((item, index) => (
            <Parcours
              key={index}
              name={item.name}
              year={item.year}
              place={item.place}
              isLight={index === 1}
            />
          ))}
        </div>
      </Grid>
    </Section>
  );
}

const Skill = ({ data, isOpen, onClick }) => {
  return (
    <div className="border-gray2 font-general-regular w-full gap-2 border-b text-black">
      <div
        className={`group hover:bg-orange flex cursor-pointer items-center justify-between p-3 px-5 ${isOpen ? "bg-orange" : "bg-transparent"}`}
        onClick={onClick}
      >
        <h2
          className={`text-2xl group-hover:text-black ${isOpen ? "text-black" : "text-gray1"}`}
        >
          {data.title}
        </h2>

        <Plus
          strokeWidth={1}
          className={`text-gray1 transition-all duration-400 group-hover:text-black ${isOpen ? "rotate-45 text-black!" : ""}`}
        />
      </div>

      {/* Expend */}
      <div
        className={`bg-gray1 overflow-hidden transition-all duration-400 ${isOpen ? "max-h-400" : "max-h-0"}`}
      >
        {/* Description */}
        <div className="flex gap-2 p-4">
          <Quote />
          <div>{data.description}</div>
        </div>

        {/* Skills */}
        <div className="flex flex-col">
          {data.parts.map((part, index) => (
            <div key={index} className="border-gray2 mt-1 border-t">
              <div className="border-gray2 font-general-medium border-b p-3 uppercase">
                {part.title}
              </div>
              <div className="flex flex-wrap">
                {part.dev.map((element, i) => (
                  <div
                    key={i}
                    className="border-gray2 flex-center h-fit w-fit border-r border-b p-2"
                  >
                    <TechIcon name={element} />
                  </div>
                ))}
                {part.other.map((element, i) => (
                  <div
                    key={i}
                    className="border-gray2 flex h-fit w-fit border-r border-b p-2"
                  >
                    {element}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-1 flex flex-wrap">
          {data.projects.map((project, index) => (
            <div
              className="border-gray2 flex-1 border-t border-r p-2"
              key={index}
            >
              <a
                href={project.link}
                target="_blanck"
                className="flex justify-center uppercase"
              >
                {project.name}{" "}
                <ArrowUpRight strokeWidth={1} name="up-arrow-alt" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Parcours = ({ isLight, year, name, place }) => {
  const textColor = isLight ? "text-black" : "text-orange";
  const subTextColor = isLight ? "text-black" : "text-gray1";

  return (
    <div
      className={`border-gray2 flex aspect-square flex-col justify-center border-b p-3 sm:aspect-auto md:aspect-square ${isLight ? "bg-orange" : ""}`}
    >
      <div className={`${textColor} text-8xl`}>{year}</div>

      <div className="mt-5 flex flex-1 gap-2">
        <Quote className={`${textColor}!`} />

        <div className={`uppercase sm:text-xl ${subTextColor}`}>
          <div className="font-general-bold">{name}</div>
          <div className="font-general-regular">{place}</div>
        </div>
      </div>
    </div>
  );
};
