"use client"
import React from 'react';

export function Video() {
  const courses = [
    {
      title: "Angst",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Depresjon",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "/link2",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Hyppig rusbruk",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "/link3",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Sosial angst",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link4",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Sjalusi",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "/link5",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Tankekjør",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link6",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Panikkangst",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Stress",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link6",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Seksuell helse",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link6",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Konflikthandtering",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link6",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Tillitsproblemer",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link6",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    {
      title: "Traumer",
      image: "/VideoModul.jpg",
      price: "Gratis",
      knapp1: "Se video her",
      lenke: "link6",
      features: [
        "Oppnå en dypere forståelse av problemstillinger knyttet til egen psykisk helse",
      ]
    },
    
    // Add more courses as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
    

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="flex flex-col bg-gray-50 rounded-xl border-2 shadow-md overflow-hidden">
            <div className="px-6 py-8 text-center flex flex-col h-full">
              <a href={course.lenke} className="flex flex-col h-full">
              <div className='flex justify-center items-center mb-4'>
                <div className='relative w-48 h-48'>

                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl mb-4 w-full h-full object-cover"
                />
                </div>
                </div>
                <h5 className="text-xl font-semibold text-gray-700 mb-2">{course.title}</h5>
                <p className="text-[#426b1f] font-bold mb-2">Pris: {course.price}</p>

                <button
                  className="px-4 py-2 bg-[#426b1f] text-white rounded-lg font-bold text-xs uppercase transition-all hover:bg-[#528127] focus:opacity-[0.85] mb-4 mx-auto flex items-center justify-center gap-2"
                  type="button"
                >
                  {course.knapp1}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
               

                <ul className="text-sm mt-auto">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}