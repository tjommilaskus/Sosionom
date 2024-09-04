import React from "react";

export default function Oppfølging() {
  return (
    <section id="Oppfolging" className="p-4 mt-24">
      <a href="https://www.material-tailwind.com/magic-ai" target="_blank"></a>
      <div className="relative bg-clip-border  text-gray-700 flex h-full min-h-[314px] w-full flex-col items-center justify-center rounded-xl !bg-gray-50 px-8">
        <img
          src="/OppfølgingAvlastning.jpg"
          alt=""
          className="rounded-xl pt-8"
        />

        <div className="block antialiased tracking-normal font-sans text-xl leading-[1.3] text-gray-700 mb-4 opacity-80 text-center">
          <h3 className="mt-2 font-semibold">Oppfølgingen baserer seg på</h3>
          <li className="italic font-sans text-base leading-relaxed font-normal text-inherit">
            Aktivisering
          </li>
          <li className="italic font-sans text-base leading-relaxed font-normal text-inherit">
            Inkludering
          </li>
          <li className="italic font-sans text-base leading-relaxed font-normal text-inherit">
            Kartlegging
          </li>
        </div>
        <p className="lock antialiased font-sans text-base font-normal leading-relaxed text-gray-700 mb-14 opacity-70 w-96">
          Oppfølging eller avlastning av barn kan være til stor nytte for ulike
          foreldre og foresatte under forskjellige forhold. Tjenestene kan komme
          i mange former, hjelpe foreldre til å opprettholde sin fysiske og
          mentale helse, samt styrke deres evne til å være gode omsorgspersoner,
          og bidra til et mer stabilt og sunt familiemiljø.
        </p>
      </div>
      <div className="px-10 pt-8 pb-16 mt-0 lg:px-30 xl:px-40">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
            <div className="p-6 text-center">
              <a href="/Tjenesteinformasjon4#Oppfølging">
                <h5 className="antialiased  uppercase tracking-normal font-sans text-2xl font font-semibold leading-snug text-gray-700 flex justify-center mt-2 mb-2">
                  Oppfølging
                </h5>
                <img src="/Oppfølging.jpg" alt="" className="rounded-xl pt-8" />

                <button
                  className="mt-8 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4"
                  type="button"
                >
                  Les mer{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
            <div className="p-6 text-center">
              <a href="/Tjenesteinformasjon4#Oppfølging">
                <h5 className="antialiased  uppercase tracking-normal font-sans text-2xl font font-semibold leading-snug text-gray-700 flex justify-center mt-2 mb-2">
                  Avlastning
                </h5>
                <img src="/Avlastning.jpg" alt="" className="rounded-xl pt-8" />

                <button
                  className="mt-8 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4"
                  type="button"
                >
                  Les mer{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
