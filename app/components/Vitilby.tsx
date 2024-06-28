import Image from "next/image";
import Vei from "../../public/Vei.png";
import TPS from "../../public/TPS.png";
import KursFag from "../../public/KursFag.png";
import OA from "../../public/OA.png";

export function Vitilby() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4">
        <a>
          <Image src={Vei} alt="Fagelig veiledning" width={350} height={350} />
        </a>

        <a>
          <Image
            src={TPS}
            alt="Terapautiske samtaler"
            width={350}
            height={350}
          />
        </a>
        <a>
          <Image
            src={KursFag}
            alt="Kurs og Fagdager"
            width={350}
            height={350}
          />
        </a>
        <a>
          <Image
            src={OA}
            alt="Oppfølging og avlastning"
            width={350}
            height={350}
          />
        </a>
      </div>
    </>
  );
}
