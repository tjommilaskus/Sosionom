import Image from "next/image";
import { Vitilby } from "./Vitilby";
import FamTera from "../../public/Familieterapi3.png";
import GruVei from "../../public/Gruppeveiledning 2.png";
import IndTera from "../../public/IndividuellTerapi  2.png";
import ParTera from "../../public/ParTerapi 2.png";

export function Hero() {
  return (
    <section className="p-0 m-0">
      <div className="p-0 m-0 grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-start p-4">
          <h1 className="text-2xl lg:text-3xl text-[#426B1F] mb-6 font-semibold">
            Vi tilbyr assistanse dersom du kjenner deg igjen i noen av de
            følgende problemstillingene:
          </h1>
          {[
            "Opplever utfordringer med å håndtere stress og emosjonelle reaksjoner i arbeidsmiljøet ditt.",
            "Sliter som hjelpearbeider med å opprettholde din egen velvære og bærekraft i jobben.",
            "Føler du deg utrygg eller usikker i vanskelige situasjoner på jobben.",
            "Har behov for veiledning for å kunne reflektere over praksis og håndtere arbeidsrelaterte utfordringer.",
            "Opplever utfordringer i personlige eller familiære relasjoner som du ønsker å jobbe med.",
            "Har et barn eller en ungdom som trenger ekstra oppfølging og støtte for å kunne mestre livet bedre."
          ].map((text, index) => (
            <div key={index} className="flex items-start mb-4 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffd15a"
                className="w-6 h-6 flex-shrink-0 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-2 text-base lg:text-lg text-gray-700">{text}</p>
            </div>
          ))}
        </div>
        
        <div className="p-4 text-base lg:text-lg text-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <Image src={IndTera} alt="Individuell Terapi" width={160} height={93} className="w-full h-auto"/>
            <Image src={FamTera} alt="Familieterapi" width={160} height={93} className="w-full h-auto"/>
            <Image src={GruVei} alt="Gruppeveiledning" width={160} height={93} className="w-full h-auto"/>
            <Image src={ParTera} alt="Parterapi" width={160} height={93} className="w-full h-auto"/>
          </div>
          {[
            "Vårt kurs i traumebevisst omsorg kan hjelpe deg med å forstå og støtte både deg selv og andre som har opplevd traumer.",
            "Kurset i ivaretakelse av hjelperen er designet for å fokusere på og forbedre helsepersonellets helse og balanse.",
            "Våre kurs i trygghet og sikkerhet gir deg verktøyene du trenger for å håndtere stress og utfordrende situasjoner på en trygg måte.",
            "Vårt faglige veiledningsprogram gir støtte og utvikling både på individuelt og gruppebasis, og kan tilbys online for økt tilgjengelighet.",
            "Terapeutiske samtaler, inklusiv individuell terapi, familieterapi og parterapi, kan hjelpe deg med å bearbeide følelser, styrke kommunikasjon og overvinne utfordringer.",
            "Vi tilbyr oppfølging og avlastningstjenester som er skreddersydd for ungdom, med fokus på helhetlig utvikling og støtte i samarbeid med familien."
          ].map((text, index) => (
            <p key={index} className="mb-4 font-semibold">{text}</p>
          ))}
        </div>
      </div>
      <div className="p-0 m-0 flex justify-center items-center">
        <Vitilby />
      </div>
    </section>
  );
}