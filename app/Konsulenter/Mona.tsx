import React from "react";
import Image from "next/image";
import BildeKvinne from "../../public/BildeKvinne.png";

export function Mona() {
  return (
    <div
      id="MonaYnnesdal"
      className="relative flex flex-col items-center pb-16 pt-[128px] mb-5 bg-gray-50"
    >
      <Image
        className=" h-auto max-w-lg rounded-lg shadow-lg"
        src={BildeKvinne}
        alt="Hansi"
        width={250}
        height={250}
      ></Image>

      <h1 className="mb-1 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl pt-4">
        Mona <span className="text-[#ffd15a]">Ynnesdal</span>
      </h1>
      <p className="tracking-widest text-gray-600 md:text-lg">
        Familieterapeut og Klinisk veileder
      </p>
      <ul className="pt-5 max-w-md space-y-1 text-gray-600 list-disc list-insid">
        <li>Bachelorgrad i sosialt arbeid</li>
        <li>Videreutdanning i barnevern og fosterhjemsarbeid</li>
        <li>Videreutdanning i systemisk familieterapi</li>
        <li>Viderutdanning i kognetiv terapi</li>
        <li>COS terapaut</li>
        <li>Godkjent faglig veileder gjennom FO</li>
        <li>Sosionom med spesialkompetanse i barnevern gjennom FO</li>
        <li>Godkjent klinisk sosionom gjennom FO</li>
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
          Mona Ynnesdal er en høyt kvalifisert fagperson med kompetanse og lang
          erfaring innen barnevern, familieterapi og ledelse. I tillegg til sin
          solide utdanningsbakgrunn er Mona godkjent sosionom med
          spesialkompetanse i barnevern og klinisk sosionom med fordypning i
          familieterapi og systemisk praksis. Dette kombineres med betydelig
          praktisk erfaring i forskjellige roller fra saksbehandler og konsulent
          til avdelingsleder og spesialiserte stillinger som MST terapeut og
          fosterhjemsveileder.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Hennes erfaring inkluderer også arbeid som tiltaksutvikler, konsulent
          for både barne- og ungdomsfamilier ved Barne- og familiekontoret i
          Hordaland fylkeskommune. Som MST terapeut og gruppeleder ved
          familieteamet på BUS ungdomssenter, bidro hun til utvikling og
          implementering av terapeutiske tiltak. I rollen som familieveileder
          ved Senter for Familieveiledning Ytrebygda og Fana, og senere som
          avdelingsleder i Arna og Åsane, ga hun uvurderlig støtte til familier
          og implementerte effektive veiledningsprogrammer. Hun har også
          verdifull erfaring som flyktningkonsulent i Solund kommune.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Siden 2021 har Mona jobbet som fosterhjemsveileder i Bergen kommune,
          hvor hun fortsetter å gjøre en betydelig forskjell i livene til barn i
          fosterhjem. Med sin allsidige kompetanse, dype kunnskap og omfattende
          erfaring er Mona Ynnesdal en ressurs for enhver organisasjon som
          arbeider med barnevern, familieterapi og sosialt arbeid. Hennes
          lidenskap for faget, kombinert med hennes evne til å lede og utvikle
          effektive tiltak, gjør henne til en uunnværlig ekspert i sitt felt.
        </p>
      </div>
    </div>
  );
}
