import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import { Peng } from "./Peng";
import Taushetsplikt from "../components/taushetsplikt";
export default function Priser() {
  return (
    <div>
      <Navbar />
      <Peng />
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
