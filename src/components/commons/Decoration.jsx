import React from "react";

export default function Decoration({ position, texts, section, absolute }) {
  return (
    <div
      className={
        absolute
          ? "absolute right-0 left-0 z-10"
          : position === "top"
            ? "relative min-h-30"
            : ""
      }
    >
      <div
        className={`absolute right-[5%] left-[5%] h-fit ${position === "top" ? "top-[25%]" : " bottom-[8%] md:bottom-[5%] "} text-decoration-gray z-1 mr-auto ml-auto grid auto-cols-fr grid-flow-col grid-rows-1 pt-5 pb-5 font-bold uppercase`}
      >
        {texts.map((text, index) =>
          section === "contact" ? (
            <DecorationContact key={index} index={index} text={text} />
          ) : (
            <DecorationOther key={index} index={index} text={text} />
          ),
        )}
      </div>
    </div>
  );
}

const DecorationContact = ({ index, text }) => {
  return (
    <div
      className={`text-xs sm:text-lg ${index == 0 ? "text-start" : index == 1 ? "text-center text-orange-800" : "text-end"}`}
    >
      {text}
    </div>
  );
};
const DecorationOther = ({ index, text }) => {
  return (
    <div
      className={`text-xs sm:text-lg ${index == 0 ? "text-start" : "text-end"}`}
    >
      {text}
    </div>
  );
};
