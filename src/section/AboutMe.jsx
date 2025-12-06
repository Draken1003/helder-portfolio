import React from "react";
import Decoration from "../components/commons/Decoration";
import SwiperCarousel from "../components/SwiperCarousel";

export default function AboutMe() {
  return (
    <div
      className="bg-custom-gray relative flex min-h-screen w-full flex-col"
      id="aboutme-section"
    >
      <Decoration position="top" texts={["the future", "developper"]} />
      <div className="flex flex-1 flex-col items-center gap-6">
        <h2 className="section-title text-title-gray text-3xl md:text-5xl">
          A propos de moi
        </h2>
        <div className="w-full flex-1">
          <SwiperCarousel />
        </div>
      </div>
    </div>
  );
}
