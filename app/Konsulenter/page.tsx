import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import { Hansi } from "./hansi";

import React from "react";
import { Mary } from "./mary";

import { Edvard } from "./edvard";
import { Eirik } from "./eirik";

export default function Konsulenter() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hansi />
      <Mary />
      <Eirik />
      <Edvard />
      <Kontaktinfo />
    </div>
  );
}
