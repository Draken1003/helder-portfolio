import React from "react";

export default function Input({ ...props }) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border-gray2 text-gray1 focus:outline-orange w-full border p-2 pl-3 focus:outline-1"
      {...props}
    />
  );
}
