import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "1t Student (600,-), Privatpersoner (700,-), Organisasjoner (1150,-)",
  "2t Student (1100,-), Privatpersoner (1250,-), Organisasjoner (1950,-)",
  "10t Student (5500,-), Privatpersoner (6500,-), Organisasjoner 9950,-)",
  "20t Student (10 500,-), Privatpersoner (12 000,-), Organisasjoner (18 000,-)",
];

export default function VeiledningOnline() {
  return (
    <div
      id="VeiledningOnline"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 items-center">
            <h1 className="uppercase text-xl text-center font-semibold">
              Veiledning 5
            </h1>
            <Image
              src="/VeiledningOnline.png"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3 mt-10">
            <h2 className="text-xl text-gray-700 font-semibold">
              Veiledning online
            </h2>
            <p className="mb-4 text-xl text-gray-700 ">
              Våre veiledningstjenester kan også tilbys online. I en travel
              hverdag kan veiledning via internett være fordelaktig for flere av
              de menneskene vi møter. Vi møtes på den digitale plattformen som
              passer best for våre veisøkere.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Det er flere fordeler ved å motta veiledning online:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Tilgjengelighet</p>
          <p>
            Online veiledning gir større tilgjengelighet for både veisøkeren og
            veilederen. Det er ikke nødvendig å møtes fysisk på et bestemt sted,
            og veisøkeren kan motta veiledning uavhengig av geografisk
            beliggenhet. Dette gjør at flere personer kan nyttiggjøre seg av
            veiledningstjenester uten å være begrenset av avstand eller
            reisetid.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Fleksibilitet: </p>
          <p>
            Online veiledning gir større fleksibilitet i forhold til tidspunkt
            for veiledningssesjoner. Veisøkeren kan lettere tilpasse
            veiledningstidspunktene etter sine behov og daglige rutiner. Det er
            også enklere å avtale endringer og justeringer i timeplanen.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Komfort</p>
          <p>
            Mottak av veiledning online foregår i en komfortabel og kjent
            setting for veisøkeren, for eksempel hjemme eller på kontoret. Dette
            kan bidra til en avslappet atmosfære og økt åpenhet under
            veiledningssesjonene.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Anonymitet</p>
          <p>
            Online veiledning gir muligheten til å opprettholde en viss grad av
            anonymitet. Noen personer kan være mer komfortable med å dele
            personlige erfaringer og utfordringer når de ikke er fysisk til
            stede. Dette kan bidra til økt åpenhet og et trygt rom for
            selvutforskning.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Teknologiske ressurser</p>
          <p>
            Bruk av digitale plattformer og teknologiske verktøy gir muligheten
            til å dele dokumenter, bilder, videoer og annet materiale under
            veiledningssesjonene. Dette kan styrke prosessen med å reflektere
            over og utforske spesifikke temaer.
          </p>
        </p>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Tilleggsinformasjon
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Selv om det er fordeler ved å motta veiledning online, er det
                også viktig å erkjenne at det er situasjoner og temaer hvor
                fysisk nærhet og interaksjon kan være mer hensiktsmessig. Det
                kan være lurt å vurdere behovene og preferansene til hver enkelt
                veisøker før man bestemmer om online veiledning er det riktige
                valget.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Online Veiledning
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

                <p className="mt-20 text-base leading-7 text-gray-600"></p>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Bestill i dag
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        fra 600
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
                  <p className="mt-6 text-xs leading-5 text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
