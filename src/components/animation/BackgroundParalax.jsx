import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundParallax() {
  useEffect(() => {
    // 1. Init Lenis
    const lenis = new Lenis();

    // 2. Connecter Lenis à ScrollTrigger — INDISPENSABLE
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // 3. Parallax sur chaque .parallax-bg
    const elements = gsap.utils.toArray(".parallax-bg");

    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.speed ?? 0.5);
      const section = el.closest("section");

      gsap.fromTo(
        el,
        { y: 0 },
        {
          // déplacement proportionnel à la hauteur de la section
          y: () => section.offsetHeight * speed * -1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return <></>;
}
