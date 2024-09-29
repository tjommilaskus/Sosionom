import React from "react";
import Image from "next/image";
import { CheckIcon } from "lucide-react";

const includedFeatures = ["Student (1050,-)", "Privatperson (1500,-)"];

export default function Familieterapi() {
  return (
    <div
      id="Familieterapi"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 flex flex-col items-center">
            <h1 className="uppercase text-xl text-center font-semibold mb-4">
              Terapi 2
            </h1>
            <div className="relative w-full aspect-square max-w-[250px]">
              <Image
                src="/Familieterapi.jpg"
                alt="KursInfo"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="lg:w-2/3 mt-6">
            <h1 className="text-xl text-gray-700 font-semibold">
              Familieterapi
            </h1>
            <p className="mb-4 text-xl text-gray-700">
              Familieterapi er en form for psykoterapi som søker å redusere
              konflikter og forbedre interaksjonen mellom familiemedlemmer.
              Terapeuter jobber med familier som helhet, og noen ganger
              individer innenfor den, for å kurere sårene av misforståelser,
              styrke kommunikasjonen og legge grunnlaget for en sterkere felles
              fremtid. Denne terapiformen fokuserer på familiens behov og de
              mulige positive forandringene som kan oppnås gjennom
              familieterapi. Det rører ved potensielle følelsesmessige
              smertepunkter som familiemedlemmer kan oppleve og presenterer
              terapien som en løsning på disse problemene.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Enhver familie som møter utfordringer kan dra nytte av familieterapi,
          inkludert de som opplever:
        </p>
        <div className="text-base text-gray-700 mt-4">
          <p className="font-semibold">Mentale helseutfordringer</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Konflikter mellom foreldre og barn</li>
            <li>
              Problemer knyttet til livsforandringer som skilsmisse eller dødsfall
            </li>
            <li>Substansmisbruk eller psykiske helseproblemer</li>
            <li>Kommunikasjonsbrudd og emosjonell distansering</li>
            <li>Atferdsvansker hos barn og ungdom</li>
            <li>
              Par som ønsker råd, støtte eller veiledning i krevende situasjoner i
              parforholdet
            </li>
          </ul>
        </div>
        <div className="text-base text-gray-700 mt-6">
          <p className="font-semibold">
            Ved å delta i familieterapi, kan familien din forvente å oppnå:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Forbedret kommunikasjon og samhandling</li>
            <li>Økt forståelse og empati blant familiemedlemmer</li>
            <li>Større evne til å løse konflikter på en sunn og effektiv måte</li>
            <li>En fornyet følelse av tilhørighet og fellesskap</li>
          </ul>
        </div>
        <div className="text-base text-gray-700 mt-6">
          <p className="font-semibold">
            Ta det første steget mot et sterkere familieliv
          </p>
          <p className="mt-2">
            Hvis din familie går gjennom en vanskelig periode eller simpelthen
            ønsker å forbedre de eksisterende relasjonene, kan familieterapi
            være veien frem. Å investere i familiens følelsesmessige velvære er
            en verdifull gave til hver enkelt av dere – en gave med effekter som
            kan vare livet ut.
            <br />
            <br />
            La oss begynne denne viktige reisen sammen. Kontakt oss for å lære
            mer om familieterapi og hvordan vi kan legge til rette for positiv
            endring i familien din.
          </p>
        </div>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Familieterapi
                </h3>

                <div className="mt-1 flex items-center gap-x-4">
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-green-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Bestill i dag
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        fra 1050
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        kr
                      </span>
                    </p>
                    <a
                      href="#kontaktoss"
                      className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Bestill time her
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}