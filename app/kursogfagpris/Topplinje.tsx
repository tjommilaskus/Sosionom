import React from "react";
import Image from "next/image";
import kurs from "../../public/kurs.jpg";

export default function Topplinje() {
  return (
    <div className="mt-12 flex lg:grid-cols-2 bg-[#ffd15a]">
      <h1 className="flex text-[50px] mt-36 p-4 font-semibold text-[#426b1f]">
        Kurs og <br />
        fagdager
      </h1>
      <Image
        src={kurs}
        alt="logo"
        width={654}
        height={309}
        className="flex justify-center lg:ml-36"
      />
    </div>
  );
}
