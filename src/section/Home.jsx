import React from "react";
import Button from "../components/commons/Button.jsx";
import Decoration from "../components/commons/Decoration";

export default function Home() {
  return (
    <div
      id="home"
      className="mx-3 flex h-screen flex-col items-center justify-center gap-4 md:gap-6"
    >
      <h1 className="section-title mb-2 text-5xl md:mb-0 md:text-7xl">
        Esteves &nbsp;
        <span className="text-custom-white bg-custom-red rounded-2xl px-4 py-2">
          Helder.
        </span>
      </h1>
      <h2 className="text-center text-2xl">Étudiant en BUT Informatique</h2>
      <p className="max-w-200 text-center">
        Développeur polyvalent et motivé, je conçois des applications
        performantes et ergonomiques. Maîtrisant Python, JavaScript, PHP, React,
        Java, SQL et C, je cherche un stage pour contribuer à des projets
        concrets et continuer à développer mes compétences techniques.
      </p>
      <Button text="Voir mes projets" link="#projects-section"></Button>
      <Decoration
        position="bottom"
        bottom={5}
        texts={["the future", "developer"]}
      />
    </div>
  );
}
