import React, { useState, useEffect } from "react";
import ltData from "../data/langsAndTools.json";
import Title2 from "./commons/Title2";

export default function LangAndTools() {
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    setLangs(ltData);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Title2 title="Languages et outils" />
      <div
        className={`grid w-full grid-cols-4 gap-5 sm:grid-cols-5 md:grid-cols-8`}
      >
        {langs.map((lang, index) => (
          <div
            key={index}
            className="lang-card bg-custom-black flex aspect-square items-center justify-center rounded-md"
          >
            <img
              className="h-10 w-10 object-contain sm:h-14 sm:w-14"
              src={lang.path}
              alt={lang.lang}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
