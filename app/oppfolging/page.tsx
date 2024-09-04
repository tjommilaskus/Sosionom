import React from "react";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Taushetsplikt from "../components/taushetsplikt";

export default function page() {
  return (
    <div>
      <Navbar />
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
