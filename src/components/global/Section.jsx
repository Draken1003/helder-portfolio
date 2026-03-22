import React from "react";

export default function Section({ children, id, className, ...props }) {
  return (
    <section
      id={id}
      className={`parallax-bg text-gray1 min-h-dvh p-20 ${className}`}
      data-speed="0.7"
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ iconSrc, title, number, children, className }) {
  return (
    <div className={`w-full max-w-200 ${className} grid-cols-1 md:grid`}>
      <div
        className={`border-gray2 flex border ${children ? "border-b-0" : ""}`}
      >
        <div className="border-gray2 border-r p-1">
          <img
            src={`${import.meta.env.BASE_URL + iconSrc}`}
            className="h-20 md:h-30"
            alt=""
          />
        </div>

        <div className="font-general-regular flex flex-1 items-center justify-between gap-2 p-2">
          <h1 className="w-full text-3xl sm:text-center sm:text-5xl">
            {title}
          </h1>
          {number && (
            <span className="text-orange self-start text-sm">{number}.0</span>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}
