import React from "react";
import Image from "next/image";
import martinbilde from "../../public/martinbilde.jpg";

export function Martin() {
  return (
    <div className="relative flex flex-col items-center pb-16 pt-[128px] mb-5 bg-gray-50">
      <Image
        className=" h-auto max-w-lg rounded-lg shadow-lg"
        src={martinbilde}
        alt="Hansi"
        width={250}
        height={250}
      ></Image>

      <h1 className="mb-1 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl pt-4">
        Martin{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Palm
        </span>
      </h1>
      <p className="tracking-widest text-gray-600 md:text-lg">
        Sykepleier og veileder
      </p>
      <ul className="pt-5 max-w-md space-y-1 text-gray-600 list-disc list-insid">
        <li>Bachelorgrad i Sykepleie</li>
        <li>Erfaring innen barne og ungdomspykiatri</li>
        <li>Erfaring innen voksenpykiatri</li>
      </ul>

      <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-64 h-1 my-8 bg-gray-300 border-0 rounded" />
        <div className="absolute px-4 -translate-x-1/2 bg-gray-50 left-1/2">
          <svg
            className="w-4 h-4 text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>

      <p className="mt-10 tracking-widest text-gray-600 md:text-lg">Erfaring</p>
      <div className="lg:flex p-2">
        <p className="text-sm p-3 text-gray-600">
          Hans Petter Algerøy har erfaring innenfor faglig veiledning og
          undervisning. Han har tidligere arbeidet i stillinger som
          miljøterapeut og faglig veileder hos organisasjoner som Abri Dialogue
          og Haraldsplass Serio Ung.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Han har hatt ansvar for veiledning til foreldre, fosterforeldre og
          kollegaer, individuelt og i gruppe. Han har også vært involvert i
          undervisning og har god erfaring med å samarbeide med barnehager og
          skoler for å sikre at alle involverte parter er godt rustet rundt
          barnets behov.
        </p>
        <p className="text-sm p-3 text-gray-600">
          I tillegg til tidligere stillinger, har han praktisk erfaring fra
          Bergen Kommune sin avdeling for Fosterhjemsveiledning og tilsyn, hvor
          han har bistått i å veilede fosterforeldre og gjennomføre undervisning
          innenfor traumebevisst omsorg
        </p>
      </div>
    </div>
  );
}
