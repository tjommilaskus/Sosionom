import React from "react";
import Image from "next/image";
import kurs from "../../public/kurs.jpg";

export default function Topplinje() {
  return (
    <div className="mt-12 bg-[#ffd15a]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#426b1f] leading-tight">
              Kurs og <br />
              fagdager
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={kurs}
              alt="kurs og fagdager"
              width={654}
              height={309}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}