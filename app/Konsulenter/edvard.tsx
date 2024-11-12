import React from "react";
import Image from "next/image";
import BildeMann from "../../public/BildeMann.png";

export function Edvard() {
  return (
    <div
      id="Edvard"
      className="relative flex flex-col items-center pb-16 pt-[128px] mb-5 bg-gray-50"
    >
      <Image
        className="h-auto max-w-lg rounded-lg shadow-lg"
        src={BildeMann}
        alt="Hansi"
        width={250}
        height={250}
      />

      <h1 className="mb-1 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl pt-4">
        Edvard Eide <span className="text-[#ffd15a]">Dyrlie</span>
      </h1>
      <p className="tracking-widest text-gray-600 md:text-lg">
        Sosionom og Miljøterapeut
      </p>
      <ul className="pt-5 max-w-md space-y-1 text-gray-600 list-disc list-inside">
        <li>Bachelorgrad i sosialt arbeid</li>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 max-w-7xl">
        <p className="text-sm p-3 text-gray-600">
          Edvard Eide Dyrlie er en engasjert og erfaren miljøterapeut med en Bachelorgrad i Sosialt arbeid fra Høgskulen på Vestlandet. Edvard har vist seg som en nøyaktig og skriftlig dyktig terapeut, glad i aktiviteter og friluftsliv, noe som var avgjørende i det utviklingsarbeidet kollektivet driver med. Hans evne til å samarbeide tett med kolleger og ungdommer gjorde ham til en verdifull ressurs.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Ved Klokkergården Måløykollektivet bidro Edvard til det viktige arbeidet med unge mennesker med psykiske helseutfordringer. Her utviklet han sine ferdigheter innen relasjonsarbeid, hvor han bodde på kollektivet sammen med ungdommene i 14-dagers turnus. I 2019 jobbet Edvard som miljøterapeut for Borger AS, hvor fokus var på voksenpsykiatri i en medleverturnus, både med og uten tilleggsvansker som rusavhengighet eller utviklingshemming. Edvard har bidratt til å bryte isolasjon og skape trygghet og tilhørighet gjennom tilknytningsfokusert arbeid. 
        </p>
        <p className="text-sm p-3 text-gray-600">
          Hans nytenkende og ambisiøse tilnærming, sammen med sterk faglig kompetanse, styrket hans evne til å bidra til funksjonsbedring for brukerne. En av Edvard sine styrker er at han kontinuerlig har vist sin fleksibilitet og ansvarsfølelse, samt evne til å skape meningsfulle relasjoner med pasienter og kolleger. Hans arbeid i Bærum kommune har gitt ham dypere innsikt og erfaring i å håndtere komplekse problemer og utfordringer i voksenpsykiatrien. Edvard er kjent for sitt engasjement, lærevillighet og evne til å takle ansvar. Han er også svært fleksibel og nytenkende, alltid på jakt etter nye metoder og teknikker for å forbedre omsorgen og behandlingen han gir.
        </p>
      </div>
    </div>
  );
}