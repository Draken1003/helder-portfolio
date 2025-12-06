import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent, Box } from "@mui/material";
import Presentation from "./Presentation";
import Parcours from "./Parcours";
import Competences from "./Competences";
import CornerDeco from "./commons/CornerDeco";

export default function SwiperCarousel() {
  const swiperRef = useRef(null);
  const [selectedId, setSelectedId] = useState(0);
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
      components: <Competences />,
    },
  ];

  const handleNavigation = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index); // Naviguer vers le slide correspondant
      setSelectedId(index);
    }
  };

  // Cette fonction sera appelée lorsque le slide change
  const handleSlideChange = (swiper) => {
    setSelectedId(swiper.realIndex); // Met à jour l'ID du slide sélectionné
  };
  return (
    <div className="mb-10 flex w-full flex-1 flex-col items-center justify-center gap-4">
      {/* Navigation Buttons */}
      <nav className="text-custom-white flex">
        {slides.map((slide, index) => (
          <button
            className={`cursor-pointer px-2 py-1 sm:px-5 ${selectedId === index ? "bg-custom-red text-custom-gray font-bold" : ""}`}
            key={index}
            onClick={() => {
              handleNavigation(index);
            }}
          >
            {slide.title}
          </button>
        ))}
      </nav>

      {/* Slider */}
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "70%",
          },
          margin: 0,
          bgcolor: "transparent",
        }}
      >
        <Swiper
          ref={swiperRef}
          pagination={{ clickable: true }}
          loop={false}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
          autoHeight={true}
        >
          <CornerDeco />
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  bgcolor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {slide.components}
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
}
