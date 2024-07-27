import React from "react";
import Image from "next/image";
import mary from "../../public/Mary.jpg";

export function Mary() {
  return (
    <div
      id="MaryChristine"
      className="relative flex flex-col items-center pb-16 pt-[128px] mb-5 bg-gray-50"
    >
      <Image
        className=" h-auto max-w-lg rounded-lg shadow-lg"
        src={mary}
        alt="Hansi"
        width={250}
        height={250}
      ></Image>

      <h1 className="mb-1 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl pt-4">
        Mary-Christine <span className="text-[#ffd15a]">Matovu</span>
      </h1>
      <p className="tracking-widest text-gray-600 md:text-lg">
        Familieterapeut og veileder
      </p>
      <ul className="pt-5 max-w-md space-y-1 text-gray-600 list-disc list-insid">
        <li>Bachelorgrad i barnevernspedagogikk</li>
        <li>Videreutdanning i familieterapi</li>
        <li>Videreutdanning i ledelse</li>
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
          Mary-Christine har bred erfaring som miljøterapeut og avdelingsleder i
          Bergen, Oslo og Sogndal kommune. Hun har spesialisering innenfor
          psykisk og fysisk utviklingshemming siden 2011. Hun har jobbet på
          ulike bofellesskap, som har betjent voksne med ulike psykiske lidelser
          og rusproblematikk. Mary-Christine har prioritert trygg omsorg,
          aggresjons- og voldsforebygging, og har implementert strukturerte
          programmer for dette.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Hun har også erfaring som teamleder, og har bidratt til å
          kvalitetssikre tjenestene. En av hennes prestasjoner er utviklingen av
          et system for å håndtere atferdsproblemer, som resulterte i at
          Fantoftåsen bofellesskap fikk utmerkelse som et utviklingsfyrtårn. Som
          primærkontakt i Oslo har Mary-Christine også hatt det overordnede
          ansvaret for tjenestemottakere og administrative oppgaver.
        </p>
        <p className="text-sm p-3 text-gray-600">
          I tillegg til sin rolle som miljøterapeut, har Mary-Christine erfaring
          fra det terapeutiske rom. Hun har hjulpet flere mennesker med å se
          løsninger på sine utfordringer og tenke nyansert om egen psykiske
          helse. Hennes evne til å tilrettelegge for personlig vekst og
          hverdagsmotivasjon har vært avgjørende for flere av de menneskene hun
          har møtt på sin vei til faglig utvikling. Mary-Christine er kjent for
          sin initiativrike og løsningsorienterte tilnærming, og er alltid på
          jakt etter ny kunnskap og forbedringer.
        </p>
      </div>
    </div>
  );
}
