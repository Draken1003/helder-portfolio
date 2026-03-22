import { useEffect } from "react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Overlay() {
  const navItems = ["Accueil", "A propos", "Projets", "Contact"];
  const links = [
    {
      name: "github",
      href: "https://github.com/Draken1003?tab=repositories",
      type: "logo",
    },

    {
      name: "linkedin-square",
      href: "https://www.linkedin.com/in/helder-esteves-b45088338/",
      type: "logo",
    },
    {
      name: "file",
      href: "/assets/pdf/CV_Esteves_Helder.pdf",
      type: "solid",
    },
  ];
  const lenis = useLenis();

  const handleScrollTo = (item) => {
    lenis.scrollTo(`#${item.toLowerCase().replaceAll(" ", "_")}`, {
      offset: 0,
      duration: 1.2,
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(section.id),
        onEnterBack: () => setActive(section.id),
      });
    });

    function setActive(id) {
      document.querySelectorAll("nav ul li a").forEach((link) => {
        link.classList.remove("font-general-semibold!");
        link.classList.remove("text-gray1!");
        if (link.dataset.section === id) {
          link.classList.add("font-general-semibold!");
          link.classList.add("text-gray1!");
        }
      });
    }
  }, []);
  return (
    <div className="absolute-center pointer-events-none fixed! z-1000 flex h-dvh w-full flex-col justify-between">
      {/* Top */}
      <div className="overlay-fade absolute -top-2 left-0 -z-5 h-70 w-full" />
      <div className="flex justify-between p-7.5 md:p-15">
        <div className="font-clash-semibold text-gray1 h-fit text-xl uppercase">
          Esteves Helder
        </div>

        {/* Sections */}
        <nav className="pointer-events-auto">
          <ul className="flex flex-col items-end">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item);
                  }}
                  data-section={item.toLowerCase().replaceAll(" ", "_")}
                  className="text-gray2 font-general-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Links */}
      <div className="pointer-events-auto mb-30 ml-15 hidden w-fit md:block">
        <ul className="flex w-fit flex-col gap-5">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank">
                <box-icon
                  type={link.type}
                  name={link.name}
                  className="fill-gray1"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
