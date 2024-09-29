"use client"
import React from 'react';

export function Peng() {
  const courses = [
    {
      title: "Faglig veiledning",
      image: "/Fagligveiledning.jpg",
      price: "Fra 600,-",
      additionalCost: "Vi tilpasser prisen ved kjøp av 2 timerspakker, 10 timerspakker og 20 timerspakker",
      knapp1: "600,- (Student)",
      knapp2: "700,- (Ordinær)",
      knapp3: "1150,- (Organisasjon)",
      features: [
        "Systematisk prosess",
        "Profesjonell utvikling",
        "Sikrer kvalitetsstander",
        "Personlig vekst",
        "Faglig rekleksjon",
        "Avslutningsprøve",
        "ATTEST"
      ]
    },
    {
      title: "Metaveiledning",
      image: "/Metaveiledning.jpg",
      price: "Fra 600,-",
      additionalCost: "Vi tilpasser prisen ved kjøp av 2 timerspakker, 10 timerspakker og 20 timerspakker",
      knapp1: "600,- (Student)",
      knapp2: "700,- (Ordinær)",
      knapp3: "1150 (Organisasjon)",
      features: [
        "Systematisk prosess",
        "Profesjonell utvikling",
        "Sikrer kvalitetsstander",
        "Personlig vekst",
        "Faglig rekleksjon",
        "Avslutningsprøve",
        "ATTEST"
      ]
    },
    {
      title: "Gruppeveiledning",
      image: "/Gruppeveiledning.jpg",
      price: "Fra 600,-",
      additionalCost: "Vi tilpasser prisen ved kjøp av 2 timerspakker, 10 timerspakker og 20 timerspakker",
      knapp1: "600,- (Student)",
      knapp2: "700,- (Ordinær)",
      knapp3: "1150 (Organisasjon)",
      features: [
        "Systematisk prosess",
        "Profesjonell utvikling",
        "Sikrer kvalitetsstander",
        "Personlig vekst",
        "Faglig rekleksjon",
        "Avslutningsprøve",
        "ATTEST"
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
              <a href="/Tjenesteinformasjon#Traume" className="flex flex-col h-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl mb-4 w-full h-full object-cover"
                />
                <h5 className="text-xl font-semibold text-gray-700 mb-2">{course.title}</h5>
                <p className="text-[#426b1f] font-bold mb-1">Pris: {course.price}</p>
                <p className="text-sm mb-4">
                   <br />
                  {course.additionalCost}
                </p>

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
                <button
                  className="px-4 py-2 bg-[#426b1f] text-white rounded-lg font-bold text-xs uppercase transition-all hover:bg-[#528127] focus:opacity-[0.85] mb-4 mx-auto flex items-center justify-center gap-2"
                  type="button"
                >
                  {course.knapp2}
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
                <button
                  className="px-4 py-2 bg-[#426b1f] text-white rounded-lg font-bold text-xs uppercase transition-all hover:bg-[#528127] focus:opacity-[0.85] mb-4 mx-auto flex items-center justify-center gap-2"
                  type="button"
                >
                  {course.knapp3}
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