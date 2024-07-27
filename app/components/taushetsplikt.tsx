import React from "react";

export default function Taushetsplikt() {
  return (
    <div className="flex justify-center items-center  bg-[#ffd15a]">
      <div className="mt-40 mb-24">
        <div className="flex justify-center">
          <img
            src="/Taushetsplikt.png"
            alt="taushetsplikt"
            className="h-[120px] w-auto object-cover object-center group-hover:opacity-75 rounded-xl"
          />
        </div>

        <div className="w-96 mx-auto mt-3">
          <div className="text-[10px] text-gray-900 italic text-center">
            <h2 className="font-semibold">§ 21. Hovedregel om taushetsplikt</h2>
            <h2 className="mt-1">
              Helsepersonell skal hindre at andre får adgang eller kjennskap til
              opplysninger om folks legems- eller sykdomsforhold eller andre
              personlige forhold som de får vite om i egenskap av å være
              helsepersonell.
            </h2>
            <h2 className="mt-1">
              Vår organisasjon er godt kjent med de spesifikke lovgivningene som
              regulerer taushetsplikten for vår sektor, og våre terapeuter og
              veiledere opptrer alltid i henhold til disse.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
