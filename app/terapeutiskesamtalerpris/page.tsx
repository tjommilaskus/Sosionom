import React from "react";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Taushetsplikt from "../components/taushetsplikt";
import Topplinje from "./Topplinje";

export default function page() {
  return (
    <div>
      <Navbar />
      <Topplinje />
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
