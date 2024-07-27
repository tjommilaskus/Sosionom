import Image from "next/image";
import Logo from "../../public/Kontaktosslogo.jpg";

export function Kontaktinfo() {
  return (
    <section id="kontaktoss">
      <div className=" inset-0 flex flex-col justify-center items-center w-full bg-[#ffd15a] text-center relative mt-14">
        <h2 className="text-xl pt-5  text-gray-800 mt-24">Kontakt oss</h2>
        <div className="pt-2">
          <a href="/" className="text-gray-900">
            <Image src={Logo} alt="logo" width={100} height={100} />
          </a>
        </div>
        <div className="py-5 text-gray-700">
          <p className="text-gray-900">🏢 Alleen 18, 5160 Laksevåg</p>
          <p className="text-gray-900">✉️ hpalgerøy@gmail.com</p>
          <p className="text-gray-900">📞 957 61 095</p>
          <p className="text-gray-900">Orgnr: 930 653 098</p>
        </div>
      </div>
    </section>
  );
}
