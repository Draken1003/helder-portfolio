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
        Esteves{" "}
        <span className="text-custom-white bg-custom-red rounded-2xl">
          &nbsp;Helder&nbsp;
        </span>
      </h1>
      <h2 className="text-center text-2xl">Étudiant en Informatique</h2>
      <p className="text-center">
        Passionné par le développement et l'apprentissage constant. Spécialisé
        en Java, C, Python, HTML/CSS et PHP. <br /> Créateur de solutions
        innovantes et projets créatifs.
      </p>
      <Button text="Voir mes projets" link="#projects-section"></Button>
      <Decoration
        position="bottom"
        texts={["the future", "developper"]}
      ></Decoration>
    </div>
  );
}
