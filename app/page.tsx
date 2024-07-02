import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Bakgrunnsbilde } from "./components/Bakgrunnsbilde";
import { Kontaktinfo } from "./components/Kontaktinfo";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Bakgrunnsbilde />
      <Hero />
      <Kontaktinfo />
    </div>
  );
}
