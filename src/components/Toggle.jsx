import React from "react";

export default function Toggle({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="bg-custom-black1 inline-flex max-h-max cursor-pointer items-center justify-center rounded-lg p-2 text-sm md:hidden"
    >
      <div className="bg-custom-red flex rounded-sm p-1">
        {isOpen ? (
          <box-icon name="x"></box-icon>
        ) : (
          <box-icon name="menu"></box-icon>
        )}
      </div>
      {/* <svg
        className="bg-custom-red rounded-sm"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        //Top line
        <path
          className="menu-line line-top"
          d="M6 12H26"
          stroke="#111113"
          strokeLinecap="square"
        ></path>
        Middle line
        <path
          className="menu-line line-middle"
          d="M11 16H21"
          stroke="#111113"
          strokeLinecap="square"
        ></path>
        //Bottom line
        <path
          className="menu-line line-bottom"
          d="M6 20H26"
          stroke="#111113"
          strokeLinecap="square"
        ></path>
      </svg> */}
    </button>
  );
}
