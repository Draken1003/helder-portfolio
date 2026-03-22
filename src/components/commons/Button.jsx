import React from "react";
export default function Button({ text, link, section }) {
  return (
    <a
      className="bg-custom-red flex w-max cursor-pointer items-center gap-1 rounded-md p-1"
      href={link}
    >
      <div className="bg-custom-black rounded-xl px-8 py-2 font-bold text-white">
        {text}
      </div>
      {section !== "contact" && <Arrow />}
    </a>
  );
}

const Arrow = () => {
  return (
    <div className="bg-custom-black flex rounded-xl p-2">
      <box-icon name="right-arrow-alt" color="white" />
    </div>
  );
};
