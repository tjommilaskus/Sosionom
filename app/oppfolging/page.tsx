import React from "react";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Taushetsplikt from "../components/taushetsplikt";
import { Peng } from "./Peng";
import Topplinje from "./Topplinje";

export default function page() {
  return (
    <div>
      <Navbar />
      <Topplinje/>
      <Peng />
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
