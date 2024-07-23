import React from "react";

import VeiledningInf from "./VeiledningInf";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Metaveiledning from "./Metaveiledning";

export default function VeiledningsInfo() {
  return (
    <>
      <Navbar />
      <VeiledningInf />
      <Metaveiledning />
      <Kontaktinfo />
    </>
  );
}
