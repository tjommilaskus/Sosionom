import React from "react";

import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Individuellterapi from "./individuellterapi";

export default function VeiledningsInfo() {
  return (
    <>
      <Navbar />
      <Individuellterapi />
      <Kontaktinfo />
    </>
  );
}
