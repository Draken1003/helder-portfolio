import { ReactLenis } from "lenis/react";
import "devicon/devicon.min.css";

// Components
import Overlay from "./layout/Overlay";
import BackgroundParalax from "./components/animation/BackgroundParalax";

// Section
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative">
      <ReactLenis root />

      {/* <BackgroundParalax /> */}
      <Overlay />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
