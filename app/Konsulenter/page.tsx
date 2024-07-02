import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import { Hansi } from "./hansi";

import React from "react";

export default function Konsulenter() {
  return (
    <div>
      <Navbar />
      <Hansi />
      <Kontaktinfo />
    </div>
  );
}