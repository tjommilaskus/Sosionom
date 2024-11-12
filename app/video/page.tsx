import React from "react";
import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import Taushetsplikt from "../components/taushetsplikt";
import { Video } from "./video";
import Topplinje from "./Topplinje";

export default function page() {
  return (
    <div>
      <Navbar />
      <Topplinje />
      <Video/>
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
