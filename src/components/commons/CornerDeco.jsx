import React from "react";

export default function CornerDeco() {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 flex h-full w-full justify-between">
      <div className="flex flex-col items-start justify-between">
        <div className="border-t-custom-red border-l-custom-red h-4 w-4 border-t border-l"></div>
        <div className="border-l-custom-red border-b-custom-red h-4 w-4 border-b border-l"></div>
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="border-t-custom-red border-r-custom-red h-4 w-4 border-t border-r"></div>
        <div className="border-r-custom-red border-b-custom-red h-4 w-4 border-r border-b"></div>
      </div>
    </div>
  );
}
