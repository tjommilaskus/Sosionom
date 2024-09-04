export function Peng() {
  return (
    <div className="relative flex flex-col items-center">
      <h1 className="text-[30px] font-bold mt-6">
        Velg riktig kurs for deg eller din organisasjon.
      </h1>

      <div className="grid-cols-3">
        <div className="mt-2 px-10 pt-8 pb-16 lg:px-30 xl:px-40">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-50 border-2 text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
              <div className="px-10 text-center">
                <a href="/Tjenesteinformasjon#Traume">
                  <h5 className="antialiased  uppercase tracking-normal font-sans text-2xl font font-semibold leading-snug text-gray-700 flex justify-center mt-2 mb-2"></h5>
                  <img
                    src="/TraumeOms.jpg"
                    alt=""
                    className="rounded-xl pt-2"
                  />
                  <p className="font-bold mt-4">Traumebevisst omsorg</p>
                  <p className="text-[#426b1f] font-bold">Pris: 4900,-</p>
                  <p className="font-light text-sm mt-1">
                    Tilleggskostnad på <br />
                    180kr pr/deltaker.
                  </p>

                  <button
                    className="ml-14 px-4 mt-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-[#426b1f] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  flex items-center justify-center gap-4"
                    type="button"
                  >
                    Bestill kurs{" "}
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
                  <div className="font-light text-sm mt-5 mb-4">
                    <li>Opplæringshefter</li>
                    <li>Kulepenner</li>
                    <li>Kladdeark</li>
                    <li>Teoretisk del</li>
                    <li>Praktisk del</li>
                    <li>Avslutningsprøve</li>
                    <li>KURSDIPLOM</li>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 px-10 pt-8 pb-16 lg:px-30 xl:px-40">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-50 border-2 text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
              <div className="px-10 text-center">
                <a href="/Tjenesteinformasjon#Traume">
                  <h5 className="antialiased  uppercase tracking-normal font-sans text-2xl font font-semibold leading-snug text-gray-700 flex justify-center mt-2 mb-2"></h5>
                  <img
                    src="/TraumeOms.jpg"
                    alt=""
                    className="rounded-xl pt-2"
                  />
                  <p className="font-bold mt-4">Traumebevisst omsorg</p>
                  <p className="text-[#426b1f] font-bold">Pris: 4900,-</p>
                  <p className="font-light text-sm mt-1">
                    Tilleggskostnad på <br />
                    180kr pr/deltaker.
                  </p>

                  <button
                    className="ml-14 px-4 mt-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-[#426b1f] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  flex items-center justify-center gap-4"
                    type="button"
                  >
                    Bestill kurs{" "}
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
                  <div className="font-light text-sm mt-5 mb-4">
                    <li>Opplæringshefter</li>
                    <li>Kulepenner</li>
                    <li>Kladdeark</li>
                    <li>Teoretisk del</li>
                    <li>Praktisk del</li>
                    <li>Avslutningsprøve</li>
                    <li>KURSDIPLOM</li>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
