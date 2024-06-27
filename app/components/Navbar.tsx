import Image from "next/image";
import Logo from "../../public/Logo.svg";

export function Navbar() {
  return (
    <nav className="bg-[#ffd15a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 p-5">
            <a href="/" className="text-gray-900">
              <Image src={Logo} alt="logo" width={100} height={100} />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-6">
            <a
              href="/"
              className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Tjenester
            </a>
            <a
              href="/"
              className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Priser
            </a>
            <a
              href="/"
              className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Konsulenter
            </a>
            <a
              href="#kontaktoss"
              className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Kontakt oss
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
