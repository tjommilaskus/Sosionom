import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Teroetisk del",
  "Praktisk del",
  "Avslutningsprøve",
  "Kursbevis",
];

export default function VeiledningInf() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            <p className="mb-4 text-base text-gray-700 mt-2">
              <p className="font-semibold">Veiledning/Faglig støtte </p>
              Veiledning i helse- og omsorgssektoren kan være verdifull for en
              rekke personer i ulike stillinger og roller innen sektoren.
              Veiledningen tjener som et støtte- og utviklingsverktøy som kan
              hjelpe individer med å reflektere over og forbedre deres praksis,
              håndtere arbeidsrelaterte utfordringer og fremme personlig og
              profesjonell vekst.
              <br />
              <br />
              Våre veiledere er erfarne fagpersoner med spesifikk trening i
              veiledningsmetodikk. Gjennom veiledningsprosessen opparbeider
              deltakerne styrket refleksjonsevne, økt kompetanse og bedre
              håndtering av arbeidsrelaterte utfordringer.
            </p>
          </div>
        </div>
      </div>
      <div className="p-8 rounded shadow-sm sm:p-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5">
            <h1 className="uppercase text-xl text-center font-semibold">
              Veiledning 1
            </h1>
            <Image
              src="/Fagligveiledning.jpg"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-xl text-gray-700 lg:mt-16">
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
          Det kan forventes at kurset dekker følgende hovedområder:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Stressmestring og forebygging av utbrenthet
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

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Evaluering
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Våre fagdager avsluttes med en evaluering, enten gjennom en
                skriftlig test, gruppeprosjekter eller en vurdering av praktiske
                ferdigheter. Målet med kurset er å utstyre deltakerne med den
                nødvendige kunnskapen og verktøyene til å støtte og gi effektiv
                omsorg til traumatiserte barn og ungdom, og å fremme et miljø
                der disse barna kan føle seg trygge og ivaretatt.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: KURS 1 Traumebevist Omsorg
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
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-20 text-base leading-7 text-gray-600">
                  Tilleggskostnader inkluderer opplæringshefter, kursdiplom,
                  kulepenner, kladdeark, avslutningsprøve, kaffe og snacks.
                </p>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Bestill i dag
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        4900
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        kr
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book kurset
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Tilleggskostnad per deltaker: 180 kr. Sats på antall
                      deltakere 0-9 deltakere, 10-14 deltakere, 15-19 deltakere,
                      20-29 deltakere, 30-39 deltakere, 40+ deltakere.
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
              Veiledning 2
            </h1>
            <Image
              src="/Metaveiledning.jpg"
              alt="KursInfo"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-xl text-gray-700 lg:mt-16">
              Metaveiledning er en form for veiledning som vanligvis rettes mot
              veiledere og fagfolk som tilbyr veiledning eller supervisjon til
              andre. I metaveiledning reflekterer veisøkeren over sin egen
              veiledningspraksis, utfordringer, erfaringer og metoder. Dette
              bidrar til dybde, perspektiv og økt kvalitet i veiledningsarbeidet
              deres.
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

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Evaluering
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Våre fagdager avsluttes med en evaluering, enten gjennom en
                skriftlig test, gruppeprosjekter eller en vurdering av praktiske
                ferdigheter. Kurset har som mål å gi deltakerne innsiktsfulle og
                praktiske verktøy for å ivareta sin egen helse og velvære, slik
                at de kan fortsette å yte god omsorg samtidig som de tar vare på
                seg selv.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: KURS 2 Ivaretakelse av Hjelperen
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
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-20 text-base leading-7 text-gray-600">
                  Tilleggskostnader inkluderer opplæringshefter, kursdiplom,
                  kulepenner, kladdeark, avslutningsprøve, kaffe og snacks.
                </p>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Bestill i dag
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        4900
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        kr
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book kurset
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Tilleggskostnad per deltaker: 180 kr. Sats på antall
                      deltakere 0-9 deltakere, 10-14 deltakere, 15-19 deltakere,
                      20-29 deltakere, 30-39 deltakere, 40+ deltakere.
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
              Veiledning 3
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
              <p className="font-semibold">Gruppeveiledning</p>
              Gruppeveiledning i helse- og omsorgsyrkene kan være til nytte for
              en rekke profesjonelle på ulike nivåer innenfor helse- og
              omsorgsfeltet. Felles for deltakerne er ønsket om å reflektere
              over eget arbeid, utveksle erfaringer og lære av hverandre i en
              strukturert setting. Dette inkluderer:
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Her er noen temaer og komponenter som kan forventes av et slik kurs:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Selvinnsikt og selvbevissthet</p>
          <li>
            Deltakerne lærer om viktigheten av å gjenkjenne egne
            stressreaksjoner, følelsesmessige behov og grenser for å forhindre
            utbrenthet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Stress og belastningsreaksjoner</p>
          <li>
            Kurset vil typisk dekke hvordan langvarig stress og ulike
            belastningsreaksjoner, inkludert sekundærtraumatisering, påvirker
            helsepersonell og hjelpere.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Forebyggende strategier</p>
          <li>
            Deltakerne får kunnskap om forebygging og håndtering av stress,
            inkludert strategier for å opprettholde en balanse mellom arbeid og
            fritid og betydningen av regelmessig fysisk aktivitet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Mestringsteknikker</p>
          <li>
            En sentral del av kurset vil være konkrete teknikker for
            stressmestring, som for eksempel avspenning, mindfulness,
            pusteteknikker og kognitive omstruktureringsstrategier.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Kommunikasjon og interpersonelle ferdigheter
          </p>
          <li>
            Kommunikasjonsverktøy og ferdigheter vil bli fremhevet som middel
            for å støtte et sunt arbeidsmiljø og redusere jobbrelaterte
            konflikter.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Etablering av støttesystemer</p>
          <li>
            Viktigheten av og hvordan man skaper og opprettholder støttende
            relasjoner på jobben og i privatlivet, inkludert mentorer,
            veiledere, og profesjonelle nettverk.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Grensene Mellom Arbeidsliv og Privatliv
          </p>
          <li>
            Kurset vil fremheve nødvendigheten av å sette klare grenser for å
            beskytte personlig tid og energi.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Organisasjonskultur</p>
          <li>
            Diskusjon rundt hvordan en støttende og helsefremmende
            organisasjonskultur kan utvikles og ivaretas, inkludert strategier
            organisasjoner kan implementere for å støtte ansatte.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Berøringspunkt mot helse- og yrkesrett
          </p>
          <li>
            En introduksjon til juridiske og etiske aspekter av jobben i helse-
            og hjelpeyrker, inkludert hvordan håndtere egne rettigheter og
            forpliktelser i stressende situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Case-studier og rollespill</p>
          <li>
            Praktiske øvelser for å anvende teori i virkelige scenarioer,
            inkludert simulering av vanskelige samtaler og situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Resiliensbygging</p>
          <li>
            Tilnærminger for å bygge personlig og kollektiv resiliens, slik at
            ansatte kan håndtere og komme seg raskt etter vanskelige
            jobbrelaterte situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Personlig og Profesjonell Vekst</p>
          <li>
            Oppmuntring og veiledning for kontinuerlig personlig og profesjonell
            utvikling, for å opprettholde engasjement og tilfredshet i arbeidet.
          </li>
        </p>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Evaluering
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Våre fagdager avsluttes med en evaluering, enten gjennom en
                skriftlig test, gruppeprosjekter eller en vurdering av praktiske
                ferdigheter. Ved å delta på et kurs i trygghet og sikkerhet, vil
                helse- og omsorgspersonell være bedre rustet til å håndtere
                daglige utfordringer, beskytte seg selv og sine kolleger, og
                sikre et høyt nivå av pasientsikkerhet og omsorgskvalitet.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: KURS 3 Trygghet og Sikkerhet
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
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-20 text-base leading-7 text-gray-600">
                  Tilleggskostnader inkluderer opplæringshefter, kursdiplom,
                  kulepenner, kladdeark, avslutningsprøve, kaffe og snacks.
                </p>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Bestill i dag
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        6400
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        kr
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book kurset
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Tilleggskostnad per deltaker: 180 kr. Sats på antall
                      deltakere 0-9 deltakere, 10-14 deltakere, 15-19 deltakere,
                      20-29 deltakere, 30-39 deltakere, 40+ deltakere.
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
              Veiledning 3
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
              <p className="font-semibold">Gruppeveiledning</p>
              Gruppeveiledning i helse- og omsorgsyrkene kan være til nytte for
              en rekke profesjonelle på ulike nivåer innenfor helse- og
              omsorgsfeltet. Felles for deltakerne er ønsket om å reflektere
              over eget arbeid, utveksle erfaringer og lære av hverandre i en
              strukturert setting. Dette inkluderer:
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Her er noen temaer og komponenter som kan forventes av et slik kurs:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Selvinnsikt og selvbevissthet</p>
          <li>
            Deltakerne lærer om viktigheten av å gjenkjenne egne
            stressreaksjoner, følelsesmessige behov og grenser for å forhindre
            utbrenthet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Stress og belastningsreaksjoner</p>
          <li>
            Kurset vil typisk dekke hvordan langvarig stress og ulike
            belastningsreaksjoner, inkludert sekundærtraumatisering, påvirker
            helsepersonell og hjelpere.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Forebyggende strategier</p>
          <li>
            Deltakerne får kunnskap om forebygging og håndtering av stress,
            inkludert strategier for å opprettholde en balanse mellom arbeid og
            fritid og betydningen av regelmessig fysisk aktivitet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Mestringsteknikker</p>
          <li>
            En sentral del av kurset vil være konkrete teknikker for
            stressmestring, som for eksempel avspenning, mindfulness,
            pusteteknikker og kognitive omstruktureringsstrategier.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Kommunikasjon og interpersonelle ferdigheter
          </p>
          <li>
            Kommunikasjonsverktøy og ferdigheter vil bli fremhevet som middel
            for å støtte et sunt arbeidsmiljø og redusere jobbrelaterte
            konflikter.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Etablering av støttesystemer</p>
          <li>
            Viktigheten av og hvordan man skaper og opprettholder støttende
            relasjoner på jobben og i privatlivet, inkludert mentorer,
            veiledere, og profesjonelle nettverk.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Grensene Mellom Arbeidsliv og Privatliv
          </p>
          <li>
            Kurset vil fremheve nødvendigheten av å sette klare grenser for å
            beskytte personlig tid og energi.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Organisasjonskultur</p>
          <li>
            Diskusjon rundt hvordan en støttende og helsefremmende
            organisasjonskultur kan utvikles og ivaretas, inkludert strategier
            organisasjoner kan implementere for å støtte ansatte.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Berøringspunkt mot helse- og yrkesrett
          </p>
          <li>
            En introduksjon til juridiske og etiske aspekter av jobben i helse-
            og hjelpeyrker, inkludert hvordan håndtere egne rettigheter og
            forpliktelser i stressende situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Case-studier og rollespill</p>
          <li>
            Praktiske øvelser for å anvende teori i virkelige scenarioer,
            inkludert simulering av vanskelige samtaler og situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Resiliensbygging</p>
          <li>
            Tilnærminger for å bygge personlig og kollektiv resiliens, slik at
            ansatte kan håndtere og komme seg raskt etter vanskelige
            jobbrelaterte situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Personlig og Profesjonell Vekst</p>
          <li>
            Oppmuntring og veiledning for kontinuerlig personlig og profesjonell
            utvikling, for å opprettholde engasjement og tilfredshet i arbeidet.
          </li>
        </p>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Evaluering
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Våre fagdager avsluttes med en evaluering, enten gjennom en
                skriftlig test, gruppeprosjekter eller en vurdering av praktiske
                ferdigheter. Ved å delta på et kurs i trygghet og sikkerhet, vil
                helse- og omsorgspersonell være bedre rustet til å håndtere
                daglige utfordringer, beskytte seg selv og sine kolleger, og
                sikre et høyt nivå av pasientsikkerhet og omsorgskvalitet.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: KURS 3 Trygghet og Sikkerhet
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
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-20 text-base leading-7 text-gray-600">
                  Tilleggskostnader inkluderer opplæringshefter, kursdiplom,
                  kulepenner, kladdeark, avslutningsprøve, kaffe og snacks.
                </p>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Bestill i dag
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        6400
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        kr
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book kurset
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Tilleggskostnad per deltaker: 180 kr. Sats på antall
                      deltakere 0-9 deltakere, 10-14 deltakere, 15-19 deltakere,
                      20-29 deltakere, 30-39 deltakere, 40+ deltakere.
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
              Veiledning 3
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
              <p className="font-semibold">Gruppeveiledning</p>
              Gruppeveiledning i helse- og omsorgsyrkene kan være til nytte for
              en rekke profesjonelle på ulike nivåer innenfor helse- og
              omsorgsfeltet. Felles for deltakerne er ønsket om å reflektere
              over eget arbeid, utveksle erfaringer og lære av hverandre i en
              strukturert setting. Dette inkluderer:
            </p>
          </div>
        </div>
        <p className="font-semibold mt-8 text-gray-700">
          Her er noen temaer og komponenter som kan forventes av et slik kurs:
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Selvinnsikt og selvbevissthet</p>
          <li>
            Deltakerne lærer om viktigheten av å gjenkjenne egne
            stressreaksjoner, følelsesmessige behov og grenser for å forhindre
            utbrenthet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Stress og belastningsreaksjoner</p>
          <li>
            Kurset vil typisk dekke hvordan langvarig stress og ulike
            belastningsreaksjoner, inkludert sekundærtraumatisering, påvirker
            helsepersonell og hjelpere.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Forebyggende strategier</p>
          <li>
            Deltakerne får kunnskap om forebygging og håndtering av stress,
            inkludert strategier for å opprettholde en balanse mellom arbeid og
            fritid og betydningen av regelmessig fysisk aktivitet.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Mestringsteknikker</p>
          <li>
            En sentral del av kurset vil være konkrete teknikker for
            stressmestring, som for eksempel avspenning, mindfulness,
            pusteteknikker og kognitive omstruktureringsstrategier.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Kommunikasjon og interpersonelle ferdigheter
          </p>
          <li>
            Kommunikasjonsverktøy og ferdigheter vil bli fremhevet som middel
            for å støtte et sunt arbeidsmiljø og redusere jobbrelaterte
            konflikter.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Etablering av støttesystemer</p>
          <li>
            Viktigheten av og hvordan man skaper og opprettholder støttende
            relasjoner på jobben og i privatlivet, inkludert mentorer,
            veiledere, og profesjonelle nettverk.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Grensene Mellom Arbeidsliv og Privatliv
          </p>
          <li>
            Kurset vil fremheve nødvendigheten av å sette klare grenser for å
            beskytte personlig tid og energi.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Organisasjonskultur</p>
          <li>
            Diskusjon rundt hvordan en støttende og helsefremmende
            organisasjonskultur kan utvikles og ivaretas, inkludert strategier
            organisasjoner kan implementere for å støtte ansatte.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">
            Berøringspunkt mot helse- og yrkesrett
          </p>
          <li>
            En introduksjon til juridiske og etiske aspekter av jobben i helse-
            og hjelpeyrker, inkludert hvordan håndtere egne rettigheter og
            forpliktelser i stressende situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Case-studier og rollespill</p>
          <li>
            Praktiske øvelser for å anvende teori i virkelige scenarioer,
            inkludert simulering av vanskelige samtaler og situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Resiliensbygging</p>
          <li>
            Tilnærminger for å bygge personlig og kollektiv resiliens, slik at
            ansatte kan håndtere og komme seg raskt etter vanskelige
            jobbrelaterte situasjoner.
          </li>
        </p>
        <p className="text-base text-gray-700">
          <p className="font-semibold mt-6">Personlig og Profesjonell Vekst</p>
          <li>
            Oppmuntring og veiledning for kontinuerlig personlig og profesjonell
            utvikling, for å opprettholde engasjement og tilfredshet i arbeidet.
          </li>
        </p>

        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                Evaluering
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Våre fagdager avsluttes med en evaluering, enten gjennom en
                skriftlig test, gruppeprosjekter eller en vurdering av praktiske
                ferdigheter. Ved å delta på et kurs i trygghet og sikkerhet, vil
                helse- og omsorgspersonell være bedre rustet til å håndtere
                daglige utfordringer, beskytte seg selv og sine kolleger, og
                sikre et høyt nivå av pasientsikkerhet og omsorgskvalitet.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Prisoversikt: KURS 3 Trygghet og Sikkerhet
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
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-indigo-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-20 text-base leading-7 text-gray-600">
                  Tilleggskostnader inkluderer opplæringshefter, kursdiplom,
                  kulepenner, kladdeark, avslutningsprøve, kaffe og snacks.
                </p>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Bestill i dag
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        6400
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        kr
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book kurset
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Tilleggskostnad per deltaker: 180 kr. Sats på antall
                      deltakere 0-9 deltakere, 10-14 deltakere, 15-19 deltakere,
                      20-29 deltakere, 30-39 deltakere, 40+ deltakere.
                    </p>
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
