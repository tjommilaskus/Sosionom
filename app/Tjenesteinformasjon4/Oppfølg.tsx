import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Oppfølging",
  "Avlastning",
  "Kartlegging",
  "Aktivisering",
];

export default function Oppfølg() {
  return (
    <div
      id="Oppfølg"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 items-center">
            <h1 className="uppercase text-xl text-center font-semibold">
              Oppfølging og Avlastning
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/Oppfølging.jpg"
                alt="KursInfo"
                width={250}
                height={250}
                className="rounded-xl"
              />
              <Image
                src="/Avlastning.jpg"
                alt="KursInfo"
                width={250}
                height={250}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="lg:w-2/3 mt-10">
            <h1 className="text-xl text-gray-700 font-semibold"></h1>
            <p className="mb-4 text-xl text-gray-700">
              Oppfølging eller avlastning av barn kan være til stor nytte for
              ulike foreldre og foresatte under forskjellige forhold. Tjenestene
              kan komme i mange former, hjelpe foreldre til å opprettholde sin
              fysiske og mentale helse, samt styrke deres evne til å være gode
              omsorgspersoner, og bidra til et mer stabilt og sunt familiemiljø.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Oppfølging eller avlastning kan passe bra for mennesker i følgende
          livssitusjoner:
        </p>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Foreldre til barn med særskilte behov
          </p>
          <p>
            Barn med fysiske, intellektuelle eller emosjonelle
            funksjonshemninger kan kreve ekstra omsorg og oppmerksomhet.
            Foreldre til disse barna kan trenge avlastning for å hvile og ta
            vare på seg selv.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Enslige foreldre</p>
          <p>
            Uten en partner til å dele ansvaret, kan enslige foreldre ha behov
            for avlastning for å kunne håndtere daglige oppgaver, jobb, og
            egentid.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Foreldre med flerlinger</p>
          <p>
            Å oppdra tvillinger, trillinger eller flere barn samtidig kan være
            ekstremt krevende, og avlastning kan gi foreldrene nødvendig
            pusterom.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Foreldre som opplever stress og utbrenthet
          </p>
          <p>
            Foreldre som føler seg overveldet på grunn av arbeidspress,
            økonomisk stress, eller andre livspåkjenninger kan dra nytte av
            tjenester som gir dem tid til å hente seg inn.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Familier som gjennomgår kriser</p>
          <p>
            I tider med akutt familiekrise, som alvorlig sykdom, dødsfall eller
            store livsendringer, kan avlastningstjenester gi nødvendig støtte.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Foreldre som har barn med atferdsutfordring
          </p>
          <p>
            Foreldre som står overfor særlige utfordringer knyttet til barnets
            atferd kan trenge støtte for å få pusterom og strategier for hvordan
            de best kan håndtere situasjonen.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Adoptiv- eller fosterforeldre</p>
          <p>
            Disse foreldrene kan stå overfor unike utfordringer i omsorgen for
            barn som har opplevd traumer eller ustabilitet, og kan ha nytte av
            støtte.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Foreldre til barn med kroniske sykdommer
          </p>
          <p>
            Kontinuerlig omsorg for et kronisk sykt barn kan være utmattende, og
            avlastning kan være viktig for å opprettholde familiens velvære.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Foreldre som trenger tid for parforholdet
          </p>
          <p>
            Å opprettholde et sterkt og sunt parforhold krever tid sammen uten
            barn, og avlastningstjenester kan muliggjøre slike viktige øyeblikk.
          </p>
        </div>
        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Oppfølging og Avlstning
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
                        590
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        kr/t
                      </span>
                    </p>
                    <a
                      href="#kontaktoss"
                      className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Bestill her
                    </a>
                  </div>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Kjøring, rapportskriving og deltakelse <br /> i møter er
                    inkludert i timesprisen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
