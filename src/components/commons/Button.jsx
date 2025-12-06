import React from "react";
export default function Button({ text, link, section }) {
  return (
    <a
      className="bg-custom-red flex w-max cursor-pointer items-center gap-1 rounded-md p-1.5"
      href={link}
    >
      <div className="bg-custom-gray rounded-xl px-8 py-2 font-bold text-white">
        {text}
      </div>
      {section !== "contact" && <Arrow />}
    </a>
  );
}

const Arrow = () => {
  return (
    <div className="bg-custom-gray rounded-xl p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-custom-white h-4 w-4 rounded-sm"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403806 5.98959 0.403806 5.6967 0.696699C5.40381 0.989593 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6V6.75H11V6V5.25H1V6Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};
