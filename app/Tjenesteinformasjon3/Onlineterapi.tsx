import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const includedFeatures = ["Student (1050,-)", "Privatperson (1500,-)"];

export default function Onlineterapi() {
  return (
    <div
      id="Onlineterapi"
      className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0"
    >
      <div className="p-8 rounded shadow-sm sm:p-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 items-center">
            <h1 className="uppercase text-xl text-center font-semibold">
              Terapi 4
            </h1>
            <Image
              src="/TerapiOnline.png"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3 mt-10">
            <h1 className="text-xl text-gray-700 font-semibold">
              Online terapi
            </h1>
            <p className="mb-4 text-xl text-gray-700">
              Alle våre terapeutiske tjenester kan også tilbys online. I en
              travel hverdag kan terapi via internett være fordelaktig for flere
              av de menneskene vi møter. Vi møtes på den digitale plattformen
              som passer best for deg.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700"></p>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Hvorfor velge online terapi?</p>
          <p>
            Online terapi kan i flere tilfeller være like effektiv som
            tradisjonelle terapitimer på et kontor. Vår erfaring indikerer at
            nettbasert terapi egner seg spesielt godt for behandling, da det
            ikke alltid krever grundig avlesning av kroppsspråk eller deling av
            svært privat informasjon. Online behandling sparer tid og eliminerer
            behovet for reise. Du kan prate med en av våre terapeuter hjemmefra,
            på kontoret eller hvor som helst du befinner deg. Det er også mulig
            å starte behandlingen online og senere gå over til timer i et av
            våre fysiske rom.
            <br />
            <br />
            Du vil motta instruksjoner via e-post, og hvis du trenger mer
            informasjon, er du velkommen til å{" "}
            <a
              className="font-semibold hover:text-gray-500 text-decoration-line: underline"
              href="#kontaktoss"
            >
              kontakte oss her.
            </a>
          </p>
        </div>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Terapeutiske samtaler online
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
                      Besill i dag
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
                      Besill time her
                    </a>
                  </div>
                  <p className="mt-6 text-xs leading-5 text-gray-600"></p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded shadow-sm sm:p-16 ">
              <div className="flex flex-col lg:flex-row">
                <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 items-center">
                  <h1 className="uppercase text-xl text-center font-semibold"></h1>
                  <Image
                    src="/VideoModul 2.jpg"
                    alt="KursInfo"
                    width={250}
                    height={250}
                    className="rounded-xl"
                  />
                </div>
                <div className="lg:w-2/3 mt-10">
                  <h1 className="text-xl text-gray-700 font-semibold">
                    Video-modul
                  </h1>
                  <p className="mb-4 text-xl text-gray-700">
                    Vi har utviklet en videomodul som kan benyttes for å oppnå
                    en dypere forståelse av ulike problemstillinger knyttet til
                    egen psykisk helse. Dersom du ønsker å beskytte dine
                    personlige opplysninger og unngå å dele informasjon med en
                    av våre terapeuter, kan videomodulen tjene som et verktøy
                    for deg.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-base text-gray-700">
              <p className="font-semibold"></p>
              <p></p>
            </div>
            <div className="text-base text-gray-700">
              <p className="font-semibold mb-4">
                Denne tjenesten tilby informasjon om ulike psykiske lidelser, og
                gir veiledende informasjon til hvordan det kan bli lettere å
                forholde seg til problemstillinger som:{" "}
              </p>

              <li>Angst</li>
              <li>Depresjon</li>
              <li>Hyppig rusbruk</li>
              <li>Sosial angst</li>
              <li>Sjalusi</li>
              <li>Tankekjør</li>
              <li>Panikkangst</li>
              <li>Stress</li>
              <li>Seksuell helse</li>
              <li>Mellommenneskelige problemer</li>
              <li>Konflikthåndtering</li>
              <li>Tillitsproblemer</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
