import React from "react";
import KursInfo from "./KursInfo";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";

export default function Informasjonside() {
  return (
    <>
      <Navbar />
      <KursInfo />
      <Kontaktinfo />
    </>
  );
}
