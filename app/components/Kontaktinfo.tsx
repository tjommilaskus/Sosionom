import Image from "next/image";
import Logo from "../../public/HOVEDLOGO.jpg";
import Facebook from "../../public/facebook.svg";
import Instagram from "../../public/instagram.svg";
import Snapchat from "../../public/snapchat.svg";
import TikTok from "../../public/tiktok.svg";

export function Kontaktinfo() {
  return (
    <section className="bg-[#ffd15a]" id="kontaktoss">
      <div className=" inset-0 flex flex-col justify-center items-center w-full  text-center relative mt-14">
        <h2 className="text-xl pt-5  text-gray-800 mt-24 font-bold">
          Kontakt oss
        </h2>
        <div className="pt-2">
          <a href="/" className="text-gray-900">
            <Image src={Logo} alt="logo" width={200} height={200} />
          </a>
        </div>
        <div className="py-5 text-gray-700">
          <p className="text-gray-900">🏢 Alleen 18, 5160 Laksevåg</p>
          <p className="text-gray-900">✉️ post@sosialkompetanse.no</p>
          <p className="text-gray-900">📞 957 61 095</p>
          <p className="text-gray-900">Orgnr: 930 653 098</p>
        </div>
      </div>
      <div className="flex justify-center space-x-8 mt-6">
        <a href="https://www.facebook.com/profile.php?id=61564195356187">
          <Image src={Facebook} alt="facebook" width={50} height={50} />
          <p className=" text-[10px] mt-1">Facebook</p>
        </a>
        <a>
          <Image src={Instagram} alt="facebook" width={50} height={50} />
          <p className=" text-[10px] mt-1">Instagram</p>
        </a>
        <a>
          <Image src={Snapchat} alt="facebook" width={50} height={50} />
          <p className=" text-[10px] mt-1">Snapchat</p>
        </a>
        <a>
          <Image src={TikTok} alt="facebook" width={50} height={50} />
          <p className=" text-[10px] mt-1 ml-1.5">TikTok</p>
        </a>
      </div>
    </section>
  );
}
