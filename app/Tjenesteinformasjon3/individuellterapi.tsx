import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = ["1t Student (600,-)", "2t Student (1100,-)"];

export default function Individuellterapi() {
  return (
    <div
      id="Individuellterapi"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 items-center">
            <h1 className="uppercase text-xl text-center font-semibold">
              Terapi 1
            </h1>
            <Image
              src="/Individuellterapi.jpg"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3 mt-10">
            <h1 className="text-xl text-gray-700 font-semibold">
              Individuell terapi
            </h1>
            <p className="mb-4 text-xl text-gray-700">
              Individuelle terapeutiske samtaler kan være nyttige for alle,
              uavhengig av om de opplever spesifikke problemer eller
              utfordringer. Terapi kan være et verdifullt redskap for å fremme
              velvære, selvinnsikt og økte muligheter for personlig utvikling.
              <br />
              <br />
              Noen ganger kaster livet utfordringer vår vei, som gjør at det kan
              være betydningsfullt å ha noen å snakke med.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Vi kan hjelpe deg med med følgende problemstillinger.
        </p>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Mentale helseutfordringer</p>
          <p>
            Terapeutiske samtaler kan være svært nyttige for personer som sliter
            med angst, depresjon, stress, traumer, eller andre psykiske
            helseutfordringer. Samtalene gir en trygg og konfidensiell arena
            hvor personen kan utforske og bearbeide sine følelser, tanker og
            opplevelser.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Utfordringer knyttet til rusbruk</p>
          <p>
            Terapeutiske samtaler gir en viktig støttespill for personen som
            sliter med rusproblemer. Terapeuten kan fungere som en støttende og
            ikke-dømmende samtalepartner, som hjelper personen gjennom
            vanskelige øyeblikk og gir motivasjon til å fortsette på veien mot
            bedring.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Livsoverganger</p>
          <p>
            Store livsforandringer, som tap av en kjær, skilsmisse, pensjonering
            eller flytting, kan føre til følelsesmessig turbulens og usikkerhet.
            Terapeutiske samtaler kan bidra til å takle disse livsovergangene
            ved å gi støtte, veiledning og hjelpe personen med å finne nye
            strategier og tilpasninger.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Forhold og mellommenneskelige problemer
          </p>
          <p>
            Terapeutiske samtaler kan hjelpe individer å håndtere konflikter og
            kommunikasjonsproblemer i sine personlige eller profesjonelle
            relasjoner. Samtalene gir mulighet til å oppdage mønstre, lære nye
            kommunikasjonsferdigheter og reparere eller avslutte skadelige
            relasjoner.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Livsmestring og personlig utvikling
          </p>
          <p>
            Terapeutiske samtaler kan være en viktig ressurs for personer som
            ønsker å jobbe med selvrefleksjon, personlig vekst og utvikling. Ved
            å reflektere over egne verdier, mål og behov, kan personen få hjelp
            til å ta beslutninger, øke selvfølelsen og utvikle sunne
            mestringsstrategier.
          </p>
        </div>
        <div className="text-base text-gray-700">
          <p className="font-semibold mt-6">Identitetsutforsking</p>
          <p>
            Terapeutiske samtaler kan være spesielt nyttige for personer som er
            usikre på sin egen identitet, seksualitet eller kulturell
            tilhørighet. Ved å utforske og reflektere over disse temaene kan
            personen bedre forstå seg selv og oppnå større autentisitet i sitt
            liv. Hvilke utfordringer kan vi hjelpe deg med gjennom våre
            terapeutiske samtaler?
          </p>
        </div>
        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Gruppeveiledning
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
                      href="#"
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
