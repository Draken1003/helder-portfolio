import { useEffect, useRef, useState } from "react";
import Section, { SectionHeader } from "../components/global/Section";
import Grid from "../components/Grid";
import aboutData from "../data/AboutData.json";
import { ArrowUpRight, Plus, X } from "lucide-react";
import Quote from "../components/global/Decorations";
import TechIcon from "../components/global/TechIcon";
import Lenis from "lenis";
import { useLenis } from "lenis/react";

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
          <p className="text-xl">
            Intéressé par tous les aspects du développement (logique, front-end,
            UX), je vise à devenir un développeur polyvalent capable de
            s’adapter à différents projets et technologies. Attentif à
            l’ergonomie et au visuel, je cherche à créer des applications à la
            fois efficaces et agréables. Actuellement à la recherche d’un stage
            pour appliquer mes compétences, progresser sur le terrain et
            contribuer à des projets concrets au sein d’une équipe.
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
  const [selectedAC, setSelectedAC] = useState(null);

  const lenis = useLenis();

  useEffect(() => {
    if (selectedAC) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
  }, [selectedAC, lenis]);

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

      {/*Change que a partir dici*/}

      {/* Expand */}
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        {/* Description compétence */}
        <div className="border-gray2 border-b p-5">
          <p className="text-gray1 text-sm leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Liste des AC */}
        <div className="flex flex-col">
          {data.ac?.map((ac, index) => (
            <div
              key={index}
              className="border-gray2 group/ac flex cursor-pointer items-center justify-between border-b p-4 px-5 transition-colors duration-200 hover:bg-black"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAC(ac);
              }}
            >
              <span className="text-gray1 truncate text-sm">{ac.title}</span>

              <div className="ml-4 flex shrink-0 items-center gap-3">
                <span
                  className={`font-general-medium px-2 py-0.5 text-xs ${
                    ac.acquired
                      ? "text-orange border-gray2 border"
                      : "border-gray2 text-gray2 border"
                  }`}
                >
                  {ac.acquired ? "Acquis" : "En cours"}
                </span>
                <ArrowUpRight
                  strokeWidth={1}
                  className="text-gray2 group-hover/ac:text-orange transition-colors duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup AC */}
      {selectedAC && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedAC(null)}
        >
          <div
            className="border-gray2 flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden border bg-black/50"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Popup Header */}
            <div className="border-gray2 flex shrink-0 items-start justify-between border-b p-5">
              <div className="min-w-0 flex-1">
                <h3 className="text-gray1 font-general-regular mt-1 mb-2 text-base leading-snug uppercase">
                  {selectedAC.title}
                </h3>
                <span
                  className={`font-general-regular px-3 py-1.5 text-xs uppercase ${
                    selectedAC.acquired
                      ? "text-orange border-gray2 border"
                      : "border-gray2 text-gray2 border"
                  }`}
                >
                  {selectedAC.acquired ? "Acquis" : "En cours d'acquisition"}
                </span>
              </div>
              <button
                onClick={() => setSelectedAC(null)}
                className="text-orange mt-0.5 ml-4 shrink-0 transition-colors duration-200"
              >
                <X strokeWidth={1} size={20} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="scrollbar-content overflow-y-auto">
              {/* Description */}
              <div className="border-gray2 border-b p-5">
                <p className="text-gray1 text-sm leading-relaxed">
                  {selectedAC.description}
                </p>
              </div>

              {/* Éléments acquis */}
              {selectedAC.acquiredElements?.length > 0 && (
                <div className="border-gray2 border-b p-5">
                  <h4 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
                    Éléments acquis
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {selectedAC.acquiredElements.map((el, i) => (
                      <li
                        key={i}
                        className="text-gray1 flex-center gap-1 text-sm"
                      >
                        <span className="text-orange shrink-0">&&</span>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* À consolider */}
              {selectedAC.toConsolidate?.length > 0 && (
                <div className="border-gray2 border-b p-5">
                  <h4 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
                    À développer
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {selectedAC.toConsolidate.map((el, i) => (
                      <li
                        key={i}
                        className="text-gray1 flex items-center gap-1 text-sm"
                      >
                        <span className="text-orange shrink-0">&&</span>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outils & exemples */}
              {selectedAC.examples?.length > 0 && (
                <div className="border-gray2 border-b p-5">
                  <h4 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
                    Outils & exemples
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAC.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="border-gray2 text-gray1 font-general-medium border px-3 py-1 text-xs tracking-wider uppercase"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Projets */}
              {selectedAC.projects?.length > 0 && (
                <div className="p-5">
                  <h4 className="text-gray2 font-general-medium mb-3 text-xs tracking-wider uppercase">
                    Projets
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAC.projects.map((project, i) => (
                      <a
                        key={i}
                        href={project.link}
                        target="_blank"
                        className="border-gray2 text-gray1 hover:bg-orange hover:border-orange font-general-medium flex items-center gap-2 border px-3 py-2 text-sm tracking-wider uppercase transition-colors duration-200 hover:text-black"
                      >
                        {project.name}
                        <ArrowUpRight strokeWidth={1} size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// const Skill = ({ data, isOpen, onClick }) => {
//   return (
//     <div className="border-gray2 font-general-regular w-full gap-2 border-b text-black">
//       <div
//         className={`group hover:bg-orange flex cursor-pointer items-center justify-between p-3 px-5 ${isOpen ? "bg-orange" : "bg-transparent"}`}
//         onClick={onClick}
//       >
//         <h2
//           className={`text-2xl group-hover:text-black ${isOpen ? "text-black" : "text-gray1"}`}
//         >
//           {data.title}
//         </h2>

//         <Plus
//           strokeWidth={1}
//           className={`text-gray1 transition-all duration-400 group-hover:text-black ${isOpen ? "rotate-45 text-black!" : ""}`}
//         />
//       </div>

//       {/* Expend */}
//       <div
//         className={`bg-gray1 overflow-hidden transition-all duration-400 ${isOpen ? "max-h-400" : "max-h-0"}`}
//       >
//         {/* Description */}
//         <div className="flex gap-2 p-4">
//           <Quote />
//           <div>{data.description}</div>
//         </div>

//         {/* Skills */}
//         <div className="flex flex-col">
//           {data.parts.map((part, index) => (
//             <div key={index} className="border-gray2 mt-1 border-t">
//               <div className="border-gray2 font-general-medium border-b p-3 uppercase">
//                 {part.title}
//               </div>
//               <div className="flex flex-wrap">
//                 {part.dev.map((element, i) => (
//                   <div
//                     key={i}
//                     className="border-gray2 flex-center h-fit w-fit border-r border-b p-2"
//                   >
//                     <TechIcon name={element} />
//                   </div>
//                 ))}
//                 {part.other.map((element, i) => (
//                   <div
//                     key={i}
//                     className="border-gray2 flex h-fit w-fit border-r border-b p-2"
//                   >
//                     {element}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Projects */}
//         <div className="mt-1 flex flex-wrap">
//           {data.projects.map((project, index) => (
//             <div
//               className="border-gray2 flex-1 border-t border-r p-2"
//               key={index}
//             >
//               <a
//                 href={project.link}
//                 target="_blanck"
//                 className="flex justify-center uppercase"
//               >
//                 {project.name}{" "}
//                 <ArrowUpRight strokeWidth={1} name="up-arrow-alt" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

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
