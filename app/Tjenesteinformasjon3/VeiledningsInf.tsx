import React from "react";
import Image from "next/image";

export default function VeiledningInf() {
  return (
    <div
      id="Terapustiskesamtaler"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="p-8 rounded shadow-sm sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/3 lg:pr-5">
            <Image
              src="/TerapeutiskeS.jpg"
              alt="KursInfo"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-2/3">
            <div className="mb-4 text-base text-gray-700 mt-2">
              <p className="font-semibold">Terapeutiske samtaler </p>
              <p>
              Terapi er en form for behandling som har til hensikt å hjelpe en person med å takle utfordringer eller vanskeligheter i sitt liv. Det kan omfatte en rekke forskjellige tilnærminger og metoder, avhengig av behovene til individet. Gjennom terapeutiske samtaler tilbyr vi et miljø hvor du kan uttrykke seg fritt og utforske sine tanker, følelser og opplevelser. Våre terapeuter bidrar til å utvikle en forståelse for ditt unike perspektiv og hjelper deg med å identifisere og endre negative tanke- og oppførselsmønstre. Vårt mål er å hjelpe deg med å oppnå økt velvære, bedre forståelse av deg selv og andre, og utvikle sunnere mestringsstrategier.
              </p>
              <br/>
              <p>
              Terapi kan variere i form, varighet og frekvens, avhengig av individets behov og mål. Noen personer kan ha nytte av kortvarig, fokusert terapi for å takle en spesifikk situasjon, mens andre kan ha behov for mer langsiktig terapi for å bearbeide dypere emosjonelle eller psykologiske problemer. Vi tilbyr individuelle samtaler, parterapi og familieterapi. Alle våre terapeutiske tjenester tilbys også online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}