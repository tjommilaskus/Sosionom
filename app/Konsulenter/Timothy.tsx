import React from "react";
import Image from "next/image";
import BildeMann from "../../public/BildeMann.png";

export function Timothy() {
  return (
    <div
      id="Timothy"
      className="relative flex flex-col items-center pb-16 pt-[128px] mb-5 bg-gray-50"
    >
      <Image
        className=" h-auto max-w-lg rounded-lg shadow-lg"
        src={BildeMann}
        alt="Hansi"
        width={250}
        height={250}
      ></Image>

      <h1 className="mb-1 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl pt-4">
        Timothy Sean <span className="text-[#ffd15a]">Falch</span>
      </h1>
      <p className="tracking-widest text-gray-600 md:text-lg">
        Kursholder/TS-trener
      </p>
      <ul className="pt-5 max-w-md space-y-1 text-gray-600 list-disc list-insid">
        <li>Bachelorgrad i Barnevernspedagogikk</li>
        <li>Kurs i Arrestasjonstekninkker</li>
        <li>Kurs i HMS</li>
        <li>Motiverende intervju</li>
        <li>Kurs i</li>
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
          Timothy besitter omfattende erfaring innen trygghet og sikkerhet, med
          spesielt fokus på arbeid med barn og ungdom som har opplevd
          utfordringer knyttet til vold og utagerende atferd.I tillegg har
          Timothy erfaring fra oppfølgingstjenesten i Bergen hvor han har
          effektivt håndtert brukere som har hatt vanskeligheter med å tilpasse
          seg konvensjonell skolegang. Ytterligere har han erfaring fra arbeid
          med elever i Oslo som har vært involvert i gjengkriminalitet, noe som
          gir ham en enestående innsikt i sikkerhets- og trygghetsutfordringer i
          urbane miljøer.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Timothy har militær bakgrunn, hvor han har mottatt omfattende
          opplæring i kritiske teknikker for situasjonsforståelse og respons,
          inkludert 'fight, flight, freeze'-reaksjoner og arrestasjonsteknikk.
          Videre har han nesten et tiårs erfaring innen kampsport, noe som
          ytterligere styrker hans praktiske ferdigheter og forståelse av
          selvforsvar og sikkerhetsteknikker.
        </p>
        <p className="text-sm p-3 text-gray-600">
          Timothy har også erfaring som verneombud i Haradlsplass Serio Ung.
          Hvor han har bidratt til et trygt arbeidsmiljø hvor de ansatte har
          følt seg ivaretatt i aller største grad. Denne omfattende og varierte
          erfaringen gjør Timothy særdeles kvalifisert som instruktør i trygghet
          og sikkerhet. Hans kombinasjon av pedagogisk bakgrunn, militær trening
          og inngående forståelse av kampsport setter ham i stand til å tilby
          både teoretisk kunnskap og praktisk veiledning på høyt nivå.
        </p>
      </div>
    </div>
  );
}
