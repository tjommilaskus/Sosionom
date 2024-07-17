import bakgrunn from "../../public/Bakgrunn.png";
import Image from "next/image";

export function Bakgrunnsbilde() {
  return (
    <div className="relative flex flex-col items-center lg:mt-14 mt-16">
      <Image src={bakgrunn} alt="bakgrunn" />
    </div>
  );
}
