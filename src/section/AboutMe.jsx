import React, { useState } from "react";
import Decoration from "../components/commons/Decoration";
import SwiperCarousel from "../components/SwiperCarousel";

export default function AboutMe() {
  const [slide, setSlide] = useState(0);

  const buttonSwipeCss =
    "border-custom-white cursor-pointer flex rounded-full border-2";

  const handleOnClickLeft = () => {
    setSlide((prev) => (prev - 1 + 3) % 3);
  };
  const handleOnClickRight = () => {
    setSlide((prev) => (prev + 1 + 3) % 3);
  };

  return (
    <section
      className="w-full p-2 lg:h-screen lg:min-h-screen"
      id="aboutme-section"
    >
      {/* Container */}
      <div className="bg-custom-black relative flex h-full flex-col gap-6 rounded-xl p-5 pt-20 md:p-15 md:pt-20 lg:max-h-full lg:min-h-full">
        {/* Top */}
        <div className="text-custom-white md:flex md:justify-between">
          <h2 className="font-family-title text-3xl uppercase md:w-100 md:text-6xl">
            A propos de moi
          </h2>
          <div className="flex flex-col justify-between gap-5 md:w-120">
            <p className="font-1.25 md:text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            {/* Buttons for swipe */}
            <div className="flex items-center justify-end gap-3">
              <button onClick={handleOnClickLeft} className={buttonSwipeCss}>
                <box-icon name="left-arrow-alt" color="#ffffff"></box-icon>
              </button>
              <button onClick={handleOnClickRight} className={buttonSwipeCss}>
                <box-icon name="right-arrow-alt" color="#ffffff"></box-icon>
              </button>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <SwiperCarousel slideSelected={slide} />

        <Decoration
          position="bottom"
          bottom={1}
          texts={["the future", "developer"]}
        />
      </div>
    </section>
  );
}
