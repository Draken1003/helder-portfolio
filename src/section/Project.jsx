import React from "react";
import ProjectCarousel from "../components/project/ProjectCarousel";

export default function Project() {
  return (
    <div
      className="flex h-screen flex-col overflow-x-hidden bg-transparent pt-20"
      id="projects-section"
    >
      <h1 className="section-title text-title-black text-3xl md:text-5xl">
        Mes Projets
      </h1>
      <div className="mx-auto flex max-w-full flex-1 items-center sm:h-[80%] sm:max-w-[80%]">
        <div className="h-contain mx-auto h-[80%] w-[90%]">
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
}
