import React from "react";
import Image from "next/image";
import petter from "../../public/hansi.png";

export function Hansi() {
  return (
    <div className="relative flex flex-col items-center pt-20">
      <Image
        className="pt-10"
        src={petter}
        alt="Hansi"
        width={150}
        height={150}
      ></Image>

      <h1 className="pt-2 text-xl">Hans-Petter Algerøy</h1>
      <p>Faglig veileder og kursholder</p>
      <p className="pt-5"> Utdanning og yrkesbakgrunn:</p>
      <p className="text-sm">Bachelorgrad i Sosialt arbeid</p>
      <p className="text-sm">Videreutdanning i rus og psykiske lidelser</p>
      <p className="text-sm">Mastergrad i Psykisk Helse og rusarbeid</p>
      <p className="text-sm">Godkjent faglig veileder gjennom FO</p>

      <p className="pt-5">Erfaring:</p>
      <p className="text-sm p-2">
        Hans Petter Algerøy har erfaring innenfor faglig veiledning og
        undervisning. Han har tidligere arbeidet i stillinger som miljøterapeut
        og faglig veileder hos organisasjoner som Abri Dialogue og Haraldsplass
        Serio Ung. Han har hatt ansvar for veiledning til foreldre,
        fosterforeldre og kollegaer, individuelt og i gruppe. Han har også vært
        involvert i undervisning og har god erfaring med å samarbeide med
        barnehager og skoler for å sikre at alle involverte parter er godt
        rustet rundt barnets behov. I tillegg til tidligere stillinger, har han
        praktisk erfaring fra Bergen Kommune sin avdeling for
        Fosterhjemsveiledning og tilsyn, hvor han har bistått i å veilede
        fosterforeldre og gjennomføre undervisning innenfor traumebevisst omsorg
      </p>
    </div>
  );
}
