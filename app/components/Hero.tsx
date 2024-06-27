import Image from "next/image";
import Vitilbyr from "../../public/Vitilbyr.jpg";

export function Hero() {
  return (
    <section className="grid lg:grid-cols-2 sm:grid-rows-2">
      <div className="">
        <div className="flex flex-col justify-center items-start">
          <h1 className="pt-8 pl-4 lg:text-xl text-xl">
            Vi tilbyr assistanse dersom du kjenner deg igjen i noen av disse
            problemstillingene:
          </h1>
          <div className="p-4 flex flex-row items-center object-contain">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffd15a"
              className="w-6 h-6 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-2 text-base lg:text-lg">
              Dersom din organisasjon er i søkefasen etter kurs eller fagdager
            </p>
          </div>
          <div className="p-4 flex flex-row items-center object-contain">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffd15a"
              className="w-6 h-6 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-2 text-base lg:text-lg">
              Er en student, en organisasjon eller et fosterhjem som trenger
              faglig veiledning, enten for personlig utvikling eller for å
              styrke kompetansen til de ansatte
            </p>
          </div>
          <div className="p-4 flex flex-row items-center object-contain">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffd15a"
              className="w-6 h-6 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-2 text-base lg:text-lg">
              Hvis du eller din familie opplever relasjonelle vanskeligheter,
              enten det er innad i familien eller i parforholdet
            </p>
          </div>
          <div className="p-4 flex flex-row items-center object-contain">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffd15a"
              className="w-6 h-6 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-2 text-base lg:text-lg">
              Har behov for støtte til barn med særlige utfordringer, enten det
              gjelder oppfølging eller avlastning
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="lg:flex justify-center items-center">
          <Image src={Vitilbyr} alt="Vitilbyr" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
