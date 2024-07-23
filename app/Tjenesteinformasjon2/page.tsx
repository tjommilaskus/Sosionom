import React from "react";

import VeiledningInf from "./VeiledningInf";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Metaveiledning from "./Metaveiledning";
import Gruppeveiledning from "./Gruppeveiledning";
import Leirbålveiledning from "./Leirbålveiledning";
import VeiledningOnline from "./VeiledningOnline";

export default function VeiledningsInfo() {
  return (
    <>
      <Navbar />
      <VeiledningInf />
      <Metaveiledning />
      <Gruppeveiledning />
      <Leirbålveiledning />
      <VeiledningOnline />
      <Kontaktinfo />
    </>
  );
}
