import bakgrunn from "../../public/Bakgrunn.png";
import Image from "next/image";

export function Bakgrunnsbilde() {
  return (
    <div className="relative flex flex-col items-center">
      <Image src={bakgrunn} alt="bakgrunn" />
    </div>
  );
}
