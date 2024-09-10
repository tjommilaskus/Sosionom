"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/TOOLBARLOGO2.png";

const DropdownMenu = ({ isOpen, toggleDropdown, items }) => (
  <div className="relative group">
    <button
      onClick={toggleDropdown}
      className="text-gray-900 hover:text-gray-500 rounded-lg p-2 flex items-center"
    >
      {items.title}
      <svg
        className={`w-4 h-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`absolute left-0 mt-2 w-48 bg-[#ffe68a] shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'} group-hover:block`}>
      <div className="py-1">
        {items.links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block text-gray-900 hover:bg-[#ffd15a] hover:text-gray-700 px-4 py-2"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    prices: false,
    consultants: false,
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menuItems = [
    {
      title: "Tjenester",
      key: "services",
      links: [
        { href: "/Tjenester#KursogFag", text: "Kurs & Fagdag" },
        { href: "/Tjenester#Veiledning", text: "Faglig Veiledning" },
        { href: "/Tjenester#Samtaler", text: "Terapeutiske Samtaler" },
        { href: "/Tjenester#Oppfolging", text: "Oppfølging & Avlastning" },
      ],
    },
    {
      title: "Priser",
      key: "prices",
      links: [
        { href: "/kursogfagpris", text: "Kurs & Fagdag" },
        { href: "/fagligveiledningpris", text: "Faglig Veiledning" },
        { href: "/terapeutiskesamtalerpris", text: "Terapeutiske Samtaler" },
        { href: "/video", text: "Gratis Video-moduler" },
        { href: "/oppfolging", text: "Oppfølging & Avlastning" },
      ],
    },
    {
      title: "Konsulenter",
      key: "consultants",
      links: [
        { href: "/Konsulenter#HansPetter", text: "Hans-Petter Algerøy" },
        { href: "/Konsulenter#MaryChristine", text: "Mary-Christine Matovu" },
        { href: "/Konsulenter#MonaYnnesdal", text: "Mona Ynnesdal" },
        { href: "/Konsulenter#Timo", text: "Timothy Sean Flach" },
        { href: "/Konsulenter#EirikChristian", text: "Eirik Christian Person" },
        { href: "/Konsulenter#Edvard", text: "Edvard Eide Dyrlie" },
      ],
    },
  ];

  return (
    <nav className="bg-[#ffd15a] p-0 fixed w-full top-0 z-30">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-900">
              <Image
                src={Logo}
                alt="logo"
                width={150}
                height={150}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <DropdownMenu
                key={item.key}
                isOpen={dropdowns[item.key]}
                toggleDropdown={() => toggleDropdown(item.key)}
                items={item}
              />
            ))}
            <Link
              href="#kontaktoss"
              className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
            >
              Kontakt oss
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-900 hover:text-gray-500 rounded-lg p-2"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#ffe68a] shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <DropdownMenu
                key={item.key}
                isOpen={dropdowns[item.key]}
                toggleDropdown={() => toggleDropdown(item.key)}
                items={item}
              />
            ))}
            <Link
              href="#kontaktoss"
              className="block text-gray-900 hover:bg-[#ffd15a] hover:text-gray-700 rounded-lg p-2"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}