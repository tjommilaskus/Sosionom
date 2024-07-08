import Image from "next/image";
import Vei from "../../public/VeiledningFag2.jpg";
import TPS from "../../public/TerapeutiskeS.jpg";
import KursFagU from "../../public/Kursfagdager.jpg";
import OA from "../../public/OppfølgingAvlastning.jpg";
import Link from "next/link";

export function Vitilby() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-20 p-4 grid-cols-1 shadow-lg mt-3 rounded-xl">
        <Link href={"/Tjenester"}>
          <Image
            src={KursFagU}
            alt="Kurs og Fagdager"
            width={250}
            height={250}
          />
        </Link>
        <Link href={"/Tjenester"}>
          <Image src={Vei} alt="Fagelig veiledning" width={250} height={250} />
        </Link>
        <Link href={"/Tjenester"}>
          <Image
            src={TPS}
            alt="Terapautiske samtaler"
            width={250}
            height={250}
          />
        </Link>
        <Link href={"/Tjenester"}>
          <Image
            src={OA}
            alt="Oppfølging og avlastning"
            width={250}
            height={250}
          />
        </Link>
      </div>
    </>
  );
}
