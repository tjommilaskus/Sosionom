import React from "react";

import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";

import Taushetsplikt from "../components/taushetsplikt";
import Oppfølg from "./Oppfølg";

export default function VeiledningsInfo() {
  return (
    <>
      <Navbar />
      <Oppfølg />
      <Kontaktinfo />
      <Taushetsplikt />
    </>
  );
}
