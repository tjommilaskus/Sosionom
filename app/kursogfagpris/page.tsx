import { Navbar } from "../components/Navbar";
import { Kontaktinfo } from "../components/Kontaktinfo";
import { Peng } from "./Peng";
import Taushetsplikt from "../components/taushetsplikt";
import Topplinje from "./Topplinje";
export default function kursogfagpris() {
  return (
    <div>
      <Navbar />
      <Topplinje />
      <Peng />
      <Kontaktinfo />
      <Taushetsplikt />
    </div>
  );
}
