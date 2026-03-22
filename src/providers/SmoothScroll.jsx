import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const onClick = (e) => {
      const link = e.currentTarget;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    };

    // Add click event for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", onClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", onClick));
      lenis.destroy();
    };
  }, []);

  return children;
}
