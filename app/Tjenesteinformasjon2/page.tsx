import React from "react";

import VeiledningInf from "./VeiledningInf";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";

export default function VeiledningsInfo() {
  return (
    <>
      <Navbar />
      <VeiledningInf />
      <Kontaktinfo />
    </>
  );
}
