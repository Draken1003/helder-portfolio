import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_PARALLAX_SPEED = 0.5;
const TICKER_TIME_TO_MS = 1000;

export default function BackgroundParallax() {
  useEffect(() => {
    const lenis = new Lenis();
    const updateLenis = (time) => lenis.raf(time * TICKER_TIME_TO_MS);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const animations = gsap.utils.toArray(".parallax-bg").map((element) => {
      const speed = Number.parseFloat(
        element.dataset.speed ?? DEFAULT_PARALLAX_SPEED,
      );
      const section = element.closest("section");
      if (!section) return null;

      return gsap.fromTo(
        element,
        { y: 0 },
        {
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
      animations.forEach((animation) => {
        animation?.scrollTrigger?.kill();
        animation?.kill();
      });
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return null;
}
