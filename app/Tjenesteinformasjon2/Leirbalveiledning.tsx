import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "1t Organisasjoner (1150,-)",
  "2t Organisasjoner (1950,-)",
  "10t Organisasjoner (9950,-)",
  "20t Organisasjoner (18 000,-)",
];

export default function Leirbalveiledning() {
  return (
    <div
      id="Leirbålveiledning"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5 items-center">
            <h1 className="uppercase text-xl text-center font-semibold">
              Leirbålveiledning
            </h1>
            <Image
              src="/Leirbål-veiledning.jpg"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-xl text-gray-700 lg:mt-16">
              Denne formen for veiledning er en humanistisk tilnærming som tar
              hensyn til den emosjonelle og sosiale dimensjonen av veiledning.
              Ved å bruke symbolikken rundt leirbålet, sikter vi på å skape et
              miljø hvor veisøkere kan føle seg trygge, støttet og styrket i
              møte med utfordrende arbeidssituasjoner, og følelser knyttet til
              det daglige arbeidet.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Fordeler med &ldquo;leirbål&rdquo; veiledning:
        </p>
        <ul className="text-base text-gray-700 list-disc ml-5">
          <li className="font-semibold mt-6">
            Økt følelse av samhold
            <ul>
              <li>Skaper en sterk følelse av fellesskap og støtte.</li>
            </ul>
          </li>
          <li className="font-semibold mt-6">
            Styrket profesjonell kompetanse
            <ul>
              <li>
                Bidrar til profesjonell utvikling gjennom deling av erfaringer
                og kollektiv refleksjon.
              </li>
            </ul>
          </li>
          <li className="font-semibold mt-6">
            Bedret kvalitet i arbeidet
            <ul>
              <li>
                Øker bevisstheten om egen praksis og fører til forbedringer i
                arbeidsmetoder og pasientomsorg.
              </li>
            </ul>
          </li>
          <li className="font-semibold mt-6">
            &ldquo;Leirbål&rdquo;-metodens tre hovedprinsipper:
            <ul>
              <li>
                Trygghet: Leirbålet skal være et trygt sted hvor veisøker kan
                føle seg fri til å dele tanker og følelser uten frykt for
                fordømmelse eller kritikk.
              </li>
              <li>
                Varme: Gi emosjonell støtte og omsorg, som &ldquo;varmen&rdquo;
                fra leirbålet, for å hjelpe veisøker med å håndtere
                arbeidsrelatert stress og belastninger.
              </li>
              <li>
                Fellesskap: Fremme en følelse av fellesskap og kameratskap, hvor
                veisøker føler seg som en del av et støttende nettverk.
              </li>
            </ul>
          </li>
        </ul>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Tilleggsinformasjon
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                &ldquo;Leirbål&rdquo;-metoden legger vekt på det kollektive og
                inkluderende aspektet ved veiledning, og oppfordrer deltakerne
                til å dele og lytte på en åpen og støttende måte. Inspirert av
                ideen om et leirbål, kan det være mindre struktur og mer vekt på
                spontan og ærlig dialog og historiefortelling. Akkurat som et
                leirbål skapes det en følelse av varme, slik at deltakerne kan
                være trygge for å uttrykke seg og utforske sensitive emner.
                Deltakerne kan bli oppmuntret til å bruke fortellinger og
                personlige historier for å illustrere utfordringer og suksesser,
                hvilket kan hjelpe andre i gruppen å lære og vokse profesjonelt.
                En &ldquo;Leirbål&rdquo;-veiledningsgruppe kan fungere som en
                støttegruppe der alle medlemmene bidrar til hverandres velvære
                gjennom empati og forståelse.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: Leirbålveiledning
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
                        fra 1150
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
