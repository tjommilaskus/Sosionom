import React from "react";

import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Individuellterapi from "./individuellterapi";
import Familieterapi from "./Familieterapi";
import Parterapi from "./Parterapi";

export default function VeiledningsInfo() {
  return (
    <>
      <Navbar />
      <Individuellterapi />
      <Familieterapi />
      <Parterapi />
      <Kontaktinfo />
    </>
  );
}
