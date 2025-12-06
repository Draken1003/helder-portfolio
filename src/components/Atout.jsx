import React, { useState, useEffect } from "react";
import atoutsData from "../data/atouts.json";
import Title2 from "./commons/Title2";

export default function Atout() {
  const [atouts, setAtouts] = useState([]);

  useEffect(() => {
    setAtouts(atoutsData);
  }, []);

  const chargeCompetence = () => {
    return (
      <div className="flex flex-col items-center">
        <Title2 title="Atouts" />
        <div className={`grid w-full grid-cols-2 gap-5 sm:grid-cols-4`}>
          {atouts.map((atout, index) => (
            <div
              key={index}
              className="lang-card bg-custom-black flex aspect-square flex-col items-center justify-center gap-4 rounded-md p-1"
            >
              <img
                className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                src={atout.path}
                alt={atout.name}
              />
              <p className="text-center text-wrap">{atout.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return chargeCompetence();
}
