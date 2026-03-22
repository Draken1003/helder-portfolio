import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Presentation from "./Presentation";
import Parcours from "./Parcours";
import Competences from "./Competences";

export default function SwiperCarousel({ slideSelected }) {
  const swiperRef = useRef(null);
  const slides = [
    {
      title: "Présentation",
      components: <Presentation />,
    },
    {
      title: "Parcours",
      components: <Parcours />,
    },
    {
      title: "Compétences",
      components: <></>,
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(slideSelected);
    }
  }, [slideSelected]);

  return (
    <div className="mx-auto h-full w-full md:w-[90%]">
      {/* Slider */}
      <Swiper
        ref={swiperRef}
        loop={false}
        spaceBetween={20}
        className="h-full w-full border border-blue-500"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="h-full" key={index}>
            {slide.components}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
