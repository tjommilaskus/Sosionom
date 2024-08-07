"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/TOOLBARLOGO2.png";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isConsultantsDropdownOpen, setIsConsultantsDropdownOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleConsultantsDropdown = () => {
    setIsConsultantsDropdownOpen(!isConsultantsDropdownOpen);
  };

  return (
    <nav className="bg-[#ffd15a] p-0 fixed w-full top-0 z-30">
      <div className=" mx-auto px-1 sm:px-1 lg:px-1">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-0">
              <Link href="/" className="text-gray-900 hidden md:block">
                <Image src={Logo} alt="logo" width={290} height={290} />
              </Link>
              <Link href="/" className="text-gray-900 md:hidden">
                <Image src={Logo} alt="logo" width={200} height={200} />
              </Link>
            </div>
          </div>
          <div className="hidden md:block font-semibold">
            <div className="ml-10 flex items-baseline space-x-6">
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Tjenester
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute top-10 right-0 bg-[#ffd15a] shadow-lg">
                    <div className="px-4 py-2">
                      <Link
                        href="/Tjenester#KursogFag"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Kurs & Fagdag
                      </Link>
                      <Link
                        href="/Tjenester#Veiledning"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Faglig Veiledning
                      </Link>
                      <Link
                        href="/Tjenester#Samtaler"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Terapautiske Samtaler
                      </Link>
                      <Link
                        href="/Tjenester#Oppfolging"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Oppfølging & Avlastning
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/Priser"
                className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
              >
                Priser
              </Link>
              <div className="relative">
                <button
                  onClick={toggleConsultantsDropdown}
                  className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Konsulenter
                </button>
                {isConsultantsDropdownOpen && (
                  <div className="absolute top-10 right-0 bg-[#ffd15a] shadow-lg">
                    <div className="px-4 py-2">
                      <Link
                        href="/Konsulenter#HansPetter"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Hans-Petter Algerøy
                      </Link>
                      <Link
                        href="/Konsulenter#MaryChristine"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Mary-Christine Matovu
                      </Link>
                      <Link
                        href="/Konsulenter#MonaYnnesdal"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Mona Ynnesdal
                      </Link>
                      <Link
                        href="/Konsulenter#Timo"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Timothy Sean Flach
                      </Link>
                      <Link
                        href="/Konsulenter#EirikChristian"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Eirik Christian Person
                      </Link>
                      <Link
                        href="/Konsulenter#Edvard"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Edvard Eide Dyrlie
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="#kontaktoss"
                className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-[#ffd15a] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
            <button
              onClick={toggleServicesDropdown}
              className="block w-full text-right text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Tjenester
            </button>
            {isServicesDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/Tjenester#KursogFag"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Kurs & Fagdag
                </Link>
                <Link
                  href="/Tjenester#Veiledning"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Faglig Veiledning
                </Link>
                <Link
                  href="/Tjenester#Samtaler"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Terapautiske Samtaler
                </Link>
                <Link
                  href="/Tjenester#Oppfolging"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Oppfølging & Avlastning
                </Link>
              </div>
            )}
            <Link
              href="/Priser"
              className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Priser
            </Link>
            <button
              onClick={toggleConsultantsDropdown}
              className="block w-full text-right text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Konsulenter
            </button>
            {isConsultantsDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/Konsulenter#HansPetter"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Hans-Petter Algerøy
                </Link>
                <Link
                  href="/Konsulenter#MaryChristine"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Mary-Christine Matovu
                </Link>
                <Link
                  href="/Konsulenter#MonaYnnesdal"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Mona Ynnesdal
                </Link>
                <Link
                  href="/Konsulenter#Timo"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Timothy Sean Falch
                </Link>
                <Link
                  href="/Konsulenter#EirikChristian"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Eirik Christian Person
                </Link>
                <Link
                  href="/Konsulenter#Edvard"
                  className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Edvard Eide Dyrlie
                </Link>
              </div>
            )}
            <Link
              href="#kontaktoss"
              className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
