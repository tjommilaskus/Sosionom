
import React from "react";
import Image from "next/image";
import Oppfolging from "../../public/OppfølgingAvlastning.jpg";

export default function Topplinje() {
  return (
    <div className="mt-12 bg-[#ffd15a]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#426b1f] leading-tight">
            Oppfølging og <br />
            avlastning
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={Oppfolging}
              alt="Familieterapi"
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}