import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";

import React from "react";

import KursogFag from "./KursogFag";
import Veiledning from "./Veiledning";
import Samtaler from "./Samtaler";
import Oppfølging from "./Oppføgning";
import Taushetsplikt from "../components/taushetsplikt";

export default function Tjenester() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <KursogFag />
      <Veiledning />
      <Samtaler />
      <Oppfølging />
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
