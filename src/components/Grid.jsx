import React from "react";

export default function ({ title, children, number, className }) {
  return (
    <div className="w-full max-w-200">
      {/* Header */}

      <div className="border-gray2 font-general-regular flex items-center justify-between gap-2 border border-b-0 p-5">
        <h2 className="text-3xl">{title}</h2>
        <span className="text-orange self-start text-sm">{number}.0</span>
      </div>

      {/* Content */}
      <div className={`border-gray2 flex gap-2 border ${className}`}>
        {children}
      </div>
    </div>
  );
}
