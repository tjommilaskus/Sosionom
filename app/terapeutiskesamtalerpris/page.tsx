import React from "react";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Taushetsplikt from "../components/taushetsplikt";
import Topplinje from "./Topplinje";
import { Peng } from "./Peng";

export default function page() {
  return (
    <div>
      <Navbar />
      <Topplinje />
      <Peng/>
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
