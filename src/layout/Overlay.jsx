import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileUser } from "lucide-react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: "Accueil", sectionId: "accueil" },
  { label: "A propos", sectionId: "a_propos" },
  { label: "Projets", sectionId: "projets" },
  { label: "Contact", sectionId: "contact" },
];

const SOCIAL_LINKS = [
  {
    iconName: "github-original",
    href: "https://github.com/Draken1003?tab=repositories",
    label: "GitHub",
  },
  {
    iconName: "linkedin-plain",
    href: "https://www.linkedin.com/in/helder-esteves-b45088338/",
    label: "LinkedIn",
  },
];

const SCROLL_DURATION = 1.2;

export default function Overlay() {
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].sectionId);
  const lenis = useLenis();

  const scrollToSection = (sectionId) => {
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`, {
        offset: 0,
        duration: SCROLL_DURATION,
      });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const triggers = NAV_ITEMS.map(({ sectionId }) => {
      const section = document.getElementById(sectionId);
      if (!section) return null;

      return ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(sectionId),
        onEnterBack: () => setActiveSection(sectionId),
      });
    }).filter(Boolean);

    return () => triggers.forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="absolute-center pointer-events-none fixed! z-100 flex h-dvh w-full flex-col justify-between">
      <div className="overlay-fade absolute -top-2 left-0 -z-5 h-70 w-full" />
      <div className="flex justify-between p-7.5 md:p-15">
        <div className="font-clash-semibold text-gray1 h-fit text-xl uppercase">
          Esteves Helder
        </div>

        <nav className="pointer-events-auto">
          <ul className="flex flex-col items-end">
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`font-general-medium ${
                    activeSection === item.sectionId
                      ? "text-gray1 font-general-semibold!"
                      : "text-gray2"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="pointer-events-auto mb-30 ml-15 hidden w-fit md:block">
        <ul className="flex w-fit flex-col gap-5">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-center"
                aria-label={link.label}
              >
                <i className={`devicon-${link.iconName} text-gray1 text-2xl`} />
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}/assets/pdf/ESIEE_PARIS_CV_ESTEVES_Helder_2026.pdf`}
              className="flex-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
            >
              <FileUser className="fill-gray1" size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
