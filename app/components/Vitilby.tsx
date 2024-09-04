import Image from "next/image";
import Vei from "../../public/VeiledningFag2.jpg";
import TPS from "../../public/TerapeutiskeS.jpg";
import KursFagU from "../../public/Kursfagdager.jpg";
import OA from "../../public/OppfølgingAvlastning.jpg";
import Link from "next/link";

export function Vitilby() {
  return (
    <>
      <div className=" shadow-xl bg-gray-200 grid lg:grid-cols-4 gap-20 p-4 grid-cols-1 mt-3 rounded-xl">
        <Link href={"/Tjenester#KursogFag"}>
          <Image
            src={KursFagU}
            alt="Kurs og Fagdager"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </Link>
        <Link href={"/Tjenester#Veiledning"}>
          <Image
            src={Vei}
            alt="Fagelig veiledning"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </Link>
        <Link href={"/Tjenester#Samtaler"}>
          <Image
            src={TPS}
            alt="Terapautiske samtaler"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </Link>
        <Link href={"/Tjenester#Oppfolging"}>
          <Image
            src={OA}
            alt="Oppfølging og avlastning"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </Link>
      </div>
    </>
  );
}
