import React, { useState, useEffect } from "react";
import LangAndTools from "./LangAndTools";
import Atouts from "./Atout";

export default function Competences() {
  return (
    <div className="w-full text-white">
      <Atouts />
      <br />
      <LangAndTools />
    </div>
  );
}
