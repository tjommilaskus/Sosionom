import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "1t Student (600,-), \n1t Ordinær (700,-), \n1t Organisasjoner (1150,-)",
  "2t Student (1100,-), \n2t Ordinær (1250,-), \n2t Organisasjoner (1950,-)",
  "10t Student (5500,-), \n10t Ordinær (6500,-), \n10t Organisasjoner (9950,-)",
  "20t Student (10 500,-), \n20t Ordinær (12 000,-), \n20t Organisasjoner (18 000,-)",
];

export default function VeiledningInf() {
  return (
    <div
      id="FageligVeiledning"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5">
            <Image
              src="/VeiledningFag2.jpg"
              alt="KursInfo"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <div className="mb-4 text-base text-gray-700 mt-2 px-10">
              <p className="font-semibold">Veiledning/Faglig støtte </p>
              <p>
                Veiledning i helse- og omsorgssektoren kan være verdifull for en
                rekke personer i ulike stillinger og roller innen sektoren.
                Veiledningen tjener som et støtte- og utviklingsverktøy som kan
                hjelpe individer med å reflektere over og forbedre deres
                praksis, håndtere arbeidsrelaterte utfordringer og fremme
                personlig og profesjonell vekst.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 flex flex-col items-center">
            <h1 className="uppercase text-xl font-semibold mb-4">
              Veiledning 1
            </h1>
            <div className="relative w-full aspect-square max-w-[250px]">
              <Image
                src="/Fagligveiledning.jpg"
                alt="KursInfo"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="lg:w-2/3 mt-10">
            <h1 className="text-xl font-semibold text-gray-700">
              Faglig veiledning
            </h1>
            <p className="mb-4 text-xl text-gray-700">
              Faglig veiledning er en strukturell og systematisk prosess som har
              som mål å støtte og utvikle yrkesutøvere, spesielt innen
              profesjonelle fagområder som helse og omsorg, undervisning,
              sosialt arbeid og andre relasjonsbaserte yrker. Formålet med
              faglig veiledning er å fremme profesjonell utvikling, sikre
              kvalitetsstandarder i yrkesutøvelse, og bidra til personlig vekst
              og refleksjon.
              <br />
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Noen av de som kan nyttiggjøre seg av faglig veiledning inkluderer:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Sykepleiere og helsefagarbeidere</p>
          <p>
            Disse utgjør en betydelig del av arbeidsstokken i helse- og
            omsorgssektoren og kan møte mange stressende situasjoner i sitt
            daglige arbeid.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Leger og spesialister</p>
          <p>
            Selv om de har omfattende medisinsk trening, kan leger og
            spesialister ha stor nytte av veiledning når det gjelder
            pasientomsorg, etiske dilemmaer og arbeidsbelastning.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Sosialarbeidere</p>
          <p>
            De jobber ofte med komplekse brukergrupper og kan ha bruk for støtte
            til å håndtere den emosjonelle belastningen som ofte følger med
            arbeidet.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Psykiatriske sykepleiere og psykologer
          </p>
          <p>
            Disse profesjonelle jobber med mentalt helsearbeid og kan dra nytte
            av veiledning i sitt terapeutiske arbeid og i møte med vanskelige
            kliniske beslutninger.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Fysioterapeuter og ergoterapeuter
          </p>
          <p>
            Disse fagpersonene kan benytte faglig veiledning for å diskutere
            klinisk praksis, pasienthåndtering og interdisiplinært samarbeid.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Ledere og administrasjon</p>
          <p>
            De som har ledelsesroller kan bruke veiledning for å forbedre
            ledelsesferdigheter, håndtere organisatoriske utfordringer og støtte
            sine ansatte.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Omsorgsarbeidere og hjelpepleiere
          </p>
          <p>
            De som arbeider direkte med daglig omsorg og støtte for pasienter og
            klienter kan bruke veiledning for å diskutere arbeidsmåter,
            klientrelasjoner og egenomsorg.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Paramedisinere og ambulansepersonell
          </p>
          <p>
            Disse kan stå overfor svært stressende og traumatiske situasjoner
            som kan ha psykologisk påvirkning, og veiledning kan bidra med
            strategier for å håndtere disse opplevelsene.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Studenter og nyutdannede</p>
          <p>
            Nyutdannede og studenter som er i praksis eller i starten av sin
            karriere kan dra stor nytte av veiledning som hjelp til å utvikle
            god praksis og profesjonell identitet.
          </p>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Freelance, selvstendige behandlere og terapeuter{" "}
          </p>
          <p>
            Disse fagpersonene kan ofte føle seg isolerte i sitt arbeid og kan
            dra nytte av veiledning for å reflektere over klinisk praksis og
            profesjonell utvikling.
          </p>
        </p>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4"></h2>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Faglig veiledning
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
                      Bestill faglig veiledning
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
