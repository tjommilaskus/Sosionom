import React from "react";

import VeiledningInf from "./VeiledningInf";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Metaveiledning from "./Metaveiledning";
import Gruppeveiledning from "./Gruppeveiledning";
import Leirbalveiledning from "./Leirbalveiledning";
import VeiledningOnline from "./VeiledningOnline";
import Taushetsplikt from "../components/taushetsplikt";

export default function VeiledningsInfo() {
  return (
    <>
      <Navbar />
      <VeiledningInf />
      <Metaveiledning />
      <Gruppeveiledning />
      <Leirbalveiledning />
      <VeiledningOnline />
      <Kontaktinfo />
      <Taushetsplikt />
    </>
  );
}
