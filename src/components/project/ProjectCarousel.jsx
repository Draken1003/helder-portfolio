import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import ProjectCard from "./ProjectCard";
import projectData from "../../data/projects.json";

export default function ProjectCarousel() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  });
  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      breakpoints={{
        0: { slidesPerView: 1, loop: true },
        640: { slidesPerView: 3, loop: false },
      }}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      }}
      slideToClickedSlide={true}
      style={{ height: "100%", position: "relative", overflow: "visible" }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard key={index} project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
