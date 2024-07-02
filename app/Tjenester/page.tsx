import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Kurs from "./kurs";

import React from "react";

export default function Tjenester() {
  return (
    <div>
      <Navbar />
      <Kurs />
      <Kontaktinfo />
    </div>
  );
}
