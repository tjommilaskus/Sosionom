"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Add state for dropdown menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#ffd15a] p-3 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
                >
                  Tjenester▼
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-10 right-0 bg-[#ffd15a] shadow-lg">
                    <div className="px-4 py-2">
                      <Link
                        href="/Tjenester"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Kurs & Fagdag
                      </Link>
                      <Link
                        href="/Tjenester"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Fagelig Veiledning
                      </Link>
                      <Link
                        href="/Tjenester"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Terapautiske Samtaler
                      </Link>
                      <Link
                        href="/Tjenester"
                        className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
                      >
                        Oppfølging & Avlastning
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="/Priser"
                className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
              >
                Priser
              </a>
              <a
                href="/Konsulenter"
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
            <a
              href="#4"
              className="block text-gray-900
              hover:text-gray-500 rounded-lg p-2"
            >
              <button
                onClick={toggleDropdown}
                className="text-gray-900 hover:text-gray-500 rounded-lg p-0"
              >
                Tjenester▼
              </button>
            </a>
            <a
              href="/Priser"
              className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Priser
            </a>
            <a
              href="/Konsulenter"
              className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Konsulenter
            </a>
            <a
              href="#kontaktoss"
              className="block text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Kontakt oss
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
