import Image from "next/image";
import Vei from "../../public/Vei.png";
import TPS from "../../public/TPS.png";
import KursFagU from "../../public/KursFagU.png";
import OA from "../../public/OA.png";
import Link from "next/link";

export function Vitilby() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 p-4 grid-cols-1 ">
        <Link href={"/Tjenester"}>
          <Image
            src={KursFagU}
            alt="Kurs og Fagdager"
            width={450}
            height={450}
          />
        </Link>
        <Link href={"/Tjenester"}>
          <Image src={Vei} alt="Fagelig veiledning" width={450} height={450} />
        </Link>
        <Link href={"/Tjenester"}>
          <Image
            src={TPS}
            alt="Terapautiske samtaler"
            width={450}
            height={450}
          />
        </Link>
        <Link href={"/Tjenester"}>
          <Image
            src={OA}
            alt="Oppfølging og avlastning"
            width={450}
            height={450}
          />
        </Link>
      </div>
    </>
  );
}
