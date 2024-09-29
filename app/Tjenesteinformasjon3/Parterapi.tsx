import React from "react";
import Image from "next/image";
import { CheckIcon } from "lucide-react";

const includedFeatures = ["Student (1050,-)", "Privatperson (1500,-)"];

export default function Parterapi() {
  return (
    <div
      id="Parterapi"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 flex flex-col items-center">
            <h1 className="uppercase text-xl text-center font-semibold mb-4">
              Terapi 3
            </h1>
            <div className="relative w-full aspect-square max-w-[250px]">
              <Image
                src="/Parterapi.jpg"
                alt="KursInfo"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="lg:w-2/3 mt-10">
            <h1 className="text-xl text-gray-700 font-semibold">Parterapi</h1>
            <p className="mb-4 text-xl text-gray-700">
              Parterapi er en form for terapi der et par som er gift, samboere
              eller dater, søker profesjonell hjelp for å forbedre deres
              forhold. Parterapeuten jobber med paret for å håndtere og løse
              konflikter, forbedre kommunikasjonen, og styrke forholdet
              generelt. Parterapi kan hjelpe med en rekke forskjellige
              utfordringer og kan være verdifullt for alle som ønsker å forbedre
              kvaliteten på sitt forhold. Ingen problemstilling er for stor
              eller for liten, og tidlig intervensjon kan ofte forhindre at
              mindre problemer vokser seg store og vanskeligere å løse.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Det er forskjellige problemstillinger som kan gjøre det nyttig å gå i
          parterapi, blant annet:
        </p>
        {[
          {
            title: "Kommunikasjonsproblemer",
            content: "Vanskeligheter med å uttrykke følelser og tanker tydelig, eller misforståelser som skaper konflikter."
          },
          {
            title: "Konflikthåndtering",
            content: "Hyppige krangler, eller uenigheter om viktige aspekter av livet som økonomi, barneoppdragelse, eller husarbeid."
          },
          {
            title: "Tillit og utroskap",
            content: "Manglende tillit eller problemer som følge av utroskap."
          },
          {
            title: "Intimitet og seksualitet",
            content: "Problemer med fysisk eller emosjonell intimitet, tap av sexlyst, eller seksuelle dysfunksjoner."
          },
          {
            title: "Større livsendringer",
            content: "Overgangsperioder som for eksempel flytting, jobbytter, fødsel av barn, eller tap av nære."
          },
          {
            title: "Uavklarte tidligere hendelser",
            content: "Sliter med uoppgjorte tidligere konflikter eller traumer som påvirker nåværende forhold."
          },
          {
            title: "Uenigheter",
            content: "Ulikheter i verdier, mål, eller forventninger til forholdet."
          },
          {
            title: "Familie og venner",
            content: "Problemer forårsaket av innblanding fra slektninger eller venner."
          },
          {
            title: "Forventninger og roller",
            content: "Misforståelser om forventingene og rollene i forholdet."
          }
        ].map((item, index) => (
          <div key={index} className="text-base text-gray-700 mt-6">
            <p className="font-semibold">{item.title}</p>
            <p>{item.content}</p>
          </div>
        ))}
        <div className="text-base text-gray-700 mt-10">
          <p>
            Parterapi kan også være forebyggende, hjelpe par til å styrke
            forholdet før alvorlige problemer oppstår. Det er viktig å huske på
            at både par som opplever spesifikke vanskeligheter og de som bare
            vil forbedre sitt forhold kan ha nytte av parterapi. I tillegg
            trenger ikke parterapi å være begrenset til tradisjonelle
            ekteskapelige forhold; det kan være nyttig for alle typer romantiske
            partnerskap, inkludert ekteskap, samboerskap, langdistanseforhold og
            ikke-tradisjonelle relasjoner.
          </p>
        </div>
        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Parterapi
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