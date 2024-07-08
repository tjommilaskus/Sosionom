import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function KursInfo() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5">
            <Image
              src="/Kursfagdager.jpg"
              alt="KursInfo"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-base text-gray-700">
              Vårt utvalg av profesjonelle kurs og fagdager er skreddersydd for
              å møte den unike profilen og de distinkte behovene til hver
              organisasjon. Vi erkjenner at målgruppen og spesifikke krav fra
              deltakerne varierer, og vi tilstreber derfor å levere et program
              som er både relevant og effektivt i et hverdagslig arbeidsliv.
              <br />
              <br />
              Ved å sentrere våre fagdager rundt kritiske områder som
              traumebevisst omsorg, ivaretakelse av hjelperen samt trygghet og
              sikkerhet, sikrer vi at innholdet ikke bare er teoretisk fundert,
              men også praktisk anvendelig. Vi er forpliktet til å fremme en
              forståelse og praksis som forsterker organisasjonens evne til å
              håndtere komplekse utfordringer i helse- og omsorgssektoren.
              <br />
              <br />
              Vår tilnærming er kollaborativ, og vi vektlegger betydningen av å
              engasjere deltakerne i en læringsprosess som er både interaktiv og
              inspirerende. Alt ligger til rette for at personalet kan dra
              maksimal nytte av fagdagene og anvende nyervervet kunnskap og
              ferdigheter til beste for de de er satt til å betjene.
            </p>
          </div>
        </div>
      </div>
      <div className="p-8 rounded shadow-sm sm:p-16 mt-32">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5">
            <h1 className="uppercase text-xl text-center font-semibold">
              Kurs 1
            </h1>
            <Image
              src="/TraumeOms.jpg"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-xl text-gray-700">
              Et kurs i traumebevisst omsorg (TBO) er designet for å gi
              deltakere kunnskap og ferdigheter for å forstå og støtte personer
              som har opplevd traumer. Traumebevisst omsorg er basert på
              anerkjennelse av hvordan traumer påvirker mennesker, og hvordan
              denne forståelsen skal integreres i praktisk omsorg og tjenester,
              spesielt i arbeid med barn og ungdom.
              <br />
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Kursinnholdet kan variere, men noen viktige komponenter som du ofte
          kan forvente å lære om inkluderer:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Grunnleggende forståelse av traumer.
          </p>
          <li>
            Hva traumer er og forskjellige typer traumer (enkeltstående,
            komplekse utviklingstraumer).
          </li>
          <li>Hvordan traumer påvirker hjernen og utviklingen.</li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Symptomer og atferd</p>
          <li>Vanlige symptomer på traumer hos barn og ungdom.</li>
          <li>
            Hvordan traumer kan påvirke atferd, følelser og sosiale forhold.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Traumebevisst kommunikasjon.</p>
          <li>Hvordan snakke med barn og ungdom som har opplevd traumer.</li>
          <li>Bruk av trygghetsskapende kommunikasjon og empati.</li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Strategier for omsorg og støtte:</p>
          <li>Metoder og teknikker for å skape et trygt og støttende miljø.</li>
          <li>Betydningen av stabilitet, rutiner og forutsigbarhet.</li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Reguleringsstrategier </p>
          <li>
            Praktiske verktøy og teknikker for å hjelpe barn med å regulere
            følelser og atferd.
          </li>
          <li>Mindfulness, pusteteknikker og andre beroligende strategier.</li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Samarbeid og systemer</p>
          <li>
            Hvordan samarbeide med andre profesjonelle, familier og skoler.
          </li>
          <li>
            Viktigheten av en helhetlig tilnærming der flere instanser jobber
            sammen.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Selvomsorg for omsorgspersoner.</p>
          <li>
            Betydningen av selvomsorg og håndtering av sekundærtraumatisering
            for de som arbeider med traumatiserte individer.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Kulturell sensitivitet</p>
          <li>
            Viktigheten av å være kulturelt sensitiv og inkludere ulike
            kulturelle perspektiver i omsorgen.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Forebygging og tidlig intervensjon.
          </p>
          <li>
            Hvordan identifisere barn som er i risiko for å oppleve traumer og
            hvilke tiltak som kan iverksettes tidlig for å forhindre langvarige
            skader.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Praktiske øvelser og case-studier
          </p>
          <li>
            Mange kurs inkluderer også praktiske øvelser, diskusjoner og arbeid
            med case-studier for å hjelpe deltakerne med å anvende det de lærer
            i virkelige situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700 mt-10">
          <p className="font-semibold">Evaluering</p> Våre fagdager avsluttes
          med en evaluering, enten gjennom en skriftlig test, gruppeprosjekter
          eller en vurdering av praktiske ferdigheter. Målet med kurset er å
          utstyre deltakerne med den nødvendige kunnskapen og verktøyene til å
          støtte og gi effektiv omsorg til traumatiserte barn og ungdom, og å
          fremme et miljø der disse barna kan føle seg trygge og ivaretatt.
        </p>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simple no-tricks pricing
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe
                et quasi iusto modi velit ut non voluptas in. Explicabo id ut
                laborum.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Lifetime membership
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit.
                  Itaque amet indis perferendis blanditiis repellendus etur
                  quidem assumenda.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
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
                      Pay once, own it forever
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        $349
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        USD
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5">
            <h1 className="uppercase text-xl text-center font-semibold">
              Kurs 2
            </h1>
            <Image
              src="/Ivaretakelse.jpg"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-xl text-gray-700">
              Et kurs i ivaretakelse av hjelperen i helse- og omsorgsyrker vil
              typisk fokusere på ulike aspekter av helsepersonells velvære og
              bærekraft i deres rolle som omsorgsgivere.
              <br />
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Det kan forventes at kurset dekker følgende hovedområder:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Stressmestring og forebygging av utbrenthet
          </p>
          <li>
            Identifisering av stressfaktorer: Hvordan gjenkjenne symptomer på
            stress og utbrenthet i seg selv og kolleger.
          </li>
          <li>
            Teknikker for stressmestring: Strategier som mindfulness,
            meditasjon, pusteøvelser og fysisk aktivitet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Emosjonell og Psykisk Helse.</p>
          <li>
            Psykologisk Førstehjelp: Hvordan takle emosjonelle utfordringer og
            traumer som kan oppstå i arbeidet.
          </li>
          <li>
            Selvomsorg: Metoder for å ivareta egen psykisk helse, inkludert
            søvn, kosthold og aktiviteter som fremmer positiv mental helse.
          </li>
          <li>
            Ressurser for Hjelp: Informasjon om hvor og hvordan man kan søke
            profesjonell hjelp eller rådgivning ved behov.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Fysisk Helse og Ergonomi</p>
          <li>
            Kroppsholdning og Bevegelse: Viktighet av ergonomi i
            arbeidshverdagen for å unngå skader og belastningslidelser.
          </li>
          <li>
            Fysiske Øvelser: Enkle øvelser som kan gjøres på arbeidsplassen for
            å holde kroppen i god form.
          </li>
          <li>
            Helsefremmende Aktiviteter: Oppmuntre til regelmessig fysisk
            aktivitet utenfor arbeidstiden.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Organisatorisk støtte og ressurser
          </p>
          <li>
            Kurset kan diskutere hvordan organisasjoner kan bidra til å ivareta
            sine ansatte, inkludert tilgang til veiledning, supervisjon og
            profesjonell utvikling, samt implementering av retningslinjer for å
            fremme en sunn arbeidskultur.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Kommunikasjon og Samarbeid</p>
          <li>
            Effektiv Kommunikasjon: Hvordan kommunisere behov, grenser og
            utfordringer med kolleger og ledere på en konstruktiv måte.
          </li>
          <li>
            Teamarbeid: Betydningen av støtte og samarbeid i teamet for å skape
            et trygt og støttende arbeidsmiljø.
          </li>
          <li>
            Konflikthåndtering: Verktøy og teknikker for å håndtere konflikter
            på arbeidsplassen på en sunn og respektfull måte.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Etisk Refleksjon og Profesjonell Integritet
          </p>
          <li>
            Etiske Utfordringer: Håndtering av moralske og etiske dilemmaer som
            kan oppstå i helse- og omsorgsyrker.
          </li>
          <li>
            Profesjonell Grensesetting: Hvordan sette grenser for å beskytte seg
            selv samtidig som man yter best mulig omsorg.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Praktiske Øvelser og Verktøy</p>
          <li>
            Arbeidsplassbaserte øvelser: Simuleringsøvelser og praktiske
            tilnærminger til selvivaretakelse.
          </li>
          <li>
            Å lage En Personlig Plan: Utarbeide en individuell plan for
            selvomsorg som kan brukes i hverdagen.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Tilgang til Resurser</p>
          <li>
            Litteratur og Verktøy: Anbefalinger for videre lesning og brukbare
            verktøy som apper eller nettressurser.
          </li>
          <li>
            Nettverk og Støttegrupper: Informasjon om lokale eller online
            støttegrupper og nettverk for helsearbeidere.
          </li>
        </p>
        <p className="text-base text-gray-700 mt-10">
          <p className="font-semibold">Tilleggsinfo:</p> Slike kurs har som mål
          å gi deltakerne innsiktsfulle og praktiske verktøy for å ivareta sin
          egen helse og velvære, slik at de kan fortsette å yte god omsorg
          samtidig som de tar vare på seg selv.
        </p>
      </div>
    </div>
  );
}
