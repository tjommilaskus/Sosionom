import React from "react";

export default function Taushetsplikt() {
  return (
    <div className="flex justify-center items-center mb-8">
      <div className="mt-20">
        <div className="flex justify-center">
          <img
            src="/Taushetsplikt.png"
            alt="taushetsplikt"
            className="h-[200px] w-auto object-cover object-center group-hover:opacity-75 rounded-xl"
          />
        </div>

        <div className="max-w-[400px] mx-auto mt-3">
          <h1 className="text-base text-gray-500 italic text-center">
            § 21. Hovedregel om taushetsplikt Helsepersonell skal hindre at
            andre får adgang eller kjennskap til opplysninger om folks legems-
            eller sykdomsforhold eller andre personlige forhold som de får vite
            om i egenskap av å være helsepersonell. Vår organisasjon er godt
            kjent med de spesifikke lovgivningene som regulerer taushetsplikten
            for vår sektor, og våre terapeuter og veiledere opptrer alltid i
            henhold til disse.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
