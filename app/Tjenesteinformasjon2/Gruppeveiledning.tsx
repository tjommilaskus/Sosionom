import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "1t Student (600,-), Privatpersoner (700,-), Organisasjoner (1150,-)",
  "2t Student (1100,-), Privatpersoner (1250,-), Organisasjoner (1950,-)",
  "10t Student (5500,-), Privatpersoner (6500,-), Organisasjoner 9950,-)",
  "20t Student (10 500,-), Privatpersoner (12 000,-), Organisasjoner (18 000,-)",
];

export default function Gruppeveiledning() {
  return (
    <div
      id="Gruppeveiledning"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 items-center">
            <h1 className="uppercase text-xl text-center font-semibold">
              Gruppeveiledning
            </h1>
            <Image
              src="/Gruppeveiledning.jpg"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-xl text-gray-700 lg:mt-16">
              Gruppeveiledning i helse- og omsorgsyrkene kan være til nytte for
              en rekke profesjonelle på ulike nivåer innenfor helse- og
              omsorgsfeltet. Felles for deltakerne er ønsket om å reflektere
              over eget arbeid, utveksle erfaringer og lære av hverandre i en
              strukturert setting.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Noen av de som kan nyttiggjøre seg av faglig veiledning inkluderer:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Sykepleiere og spesialsykepleiere
          </p>
          <li>
            Disse fagpersonene kan bruke gruppeveiledning for å diskutere
            kliniske erfaringer, etiske dilemmaer, og pasientrelaterte saker.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Leger og medisinske spesialister</p>
          <li>
            Gruppeveiledning kan være en plattform for fagfolkene til å
            reflektere over behandlingsbeslutninger og interkollegial
            samhandling.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Sosionomer og psykologer</p>
          <li>
            Disse profesjonene håndterer ofte komplekse klientkasus, og
            gruppeveiledning kan gi en mulighet for å behandle saker på en
            dypere og mer kollektiv måte.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Omsorgsarbeidere og hjelpepleiere
          </p>
          <li>
            De kan utveksle erfaringer fra direkte pasientarbeid og diskutere
            grensesetting, kommunikasjon og emosjonell støtte.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Fysio- og ergoterapeuter</p>
          <li>
            Refleksjon over behandlingsmetoder, tverrfaglig samarbeid og
            klientoppfølging er typiske temaer som kan utforskes i
            gruppeveiledning.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Paramedisinere og ambulansepersonell
          </p>
          <li>
            De kan bruke gruppeveiledning til å bearbeide kritiske hendelser,
            stressehåndtering og teamarbeid.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Mental Helse- og rusarbeidere</p>
          <li>
            Dette inkluderer terapeuter som arbeider innenfor rusomsorg og
            psykisk helsevern, der gruppeveiledning kan bidra til å takle
            utfordringer og dilemmaer i arbeidet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Studenter og turnuskandidater</p>
          <li>
            For de som er i starten av sin karriere eller fortsatt i sine
            utdanningsløp, kan gruppeveiledning tilby en lærerik situasjon for å
            utvikle profesjonelle ferdigheter og identiteter.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Ledere i helse- og omsorgssektoren
          </p>
          <li>
            Ledere kan anvende gruppeveiledning til å utvikle lederskap,
            håndtere personellutfordringer og fremme en kultur av refleksjon og
            kontinuerlig læringsprosess.
          </li>
        </p>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Tilleggsinformasjon
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Gruppeveiledning kan gi en unik mulighet for deltakerne til å
                lære fra forskjellige perspektiver, støtte hverandre i
                vanskelige situasjoner og utfordre hverandres antakelser på en
                konstruktiv måte. Sikkerheten og tilliten i gruppen åpner opp
                for ærlige samtaler som kan bidra til både personlig og
                profesjonell vekst. Gruppeveiledning kan også redusere følelser
                av isolasjon ved å vise at andre kan ha lignende utfordringer.
              </p>
            </div>
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
                        className="h-6 w-5 flex-none text-indigo-600"
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
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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