import React from "react";
import Image from "next/image";
import eirikperson from "../../public/EirikPerson.jpg";

export function Eirik() {
  return (
    <div className="relative flex flex-col items-center pb-16 pt-[128px] mb-5 bg-gray-50">
      <Image
        className=" h-auto max-w-lg rounded-lg shadow-lg"
        src={eirikperson}
        alt="Hansi"
        width={250}
        height={250}
      ></Image>

      <h1 className="mb-1 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl pt-4">
        Eirik Christian{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Person
        </span>
      </h1>
      <p className="tracking-widest text-gray-600 md:text-lg">
        Sosialkurator & kursholder
      </p>
      <ul className="pt-5 max-w-md space-y-1 text-gray-600 list-disc list-insid">
        <li>Bachelorgrad i barnevernspedagogikk</li>
        <li>Mastergrad i sosialt arbeid</li>
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
          Eirik Christian Person er en erfaren og dedikert sosialarbeider med
          bred kompetanse innen miljøterapi og veiledning for ulike
          aldersgrupper og problemstillinger. Gjennom sitt arbeid med små barn,
          ungdom med alvorlige atferdsvansker og personer med sammensatt
          utviklingshemming, har han opparbeidet seg omfattende kunnskap og
          ferdigheter. Eirik er kjent for sitt helhetlige perspektiv og evne til
          å tilby skreddersydd oppfølging og behandling.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Som primærkontakt har Eirik hatt helhetlig hovedansvar for unge
          personer med komplekse behov. Dette innebærer veiledning av
          fagpersonell på bolig og dagsenter, tverrfaglig koordinering i
          hjelpeapparatet, samarbeid med pårørende og tilrettelegging av
          individuelle aktiviteter og tiltak som fremmer mestring, livskvalitet,
          omsorg og behandling. Eirik har også hatt betydelig ansvar som
          barneveileder i barnehage, hvor han tilrettela aktiviteter som fremmer
          læring og sosial utvikling. Han skapte trygge og stimulerende miljøer
          som støttet barns naturlige nysgjerrighet og vekst, samtidig som han
          veiledet foreldre.
        </p>
        <p className="text-sm p-3 text-gray-600">
          I arbeidet med ungdommer med alvorlige atferdsvansker har Eirik hatt
          ansvar for oppfølging av ungdommer med problematikk knyttet til rus og
          kriminalitet. Han har utviklet behandlingsplaner, gjennomført
          terapeutiske samtaler og samarbeidet med familie, skole og andre
          relevante instanser for å sikre en helhetlig tilnærming. Eirik
          Christian Person kombinerer faglig dyktighet med empati og
          engasjement, noe som gjør ham til en verdifull ressurs for både
          kolleger og de han arbeider med. Han har bevist evne til å håndtere
          utfordrende situasjoner med ro og kompetanse, og er alltid fokusert på
          å oppnå positive resultater for sine klienter.
        </p>
      </div>
    </div>
  );
}
