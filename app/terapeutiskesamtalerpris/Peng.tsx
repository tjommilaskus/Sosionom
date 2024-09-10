import React from 'react';

export function Peng() {
  const courses = [
    {
      title: "Traumebevisst omsorg",
      image: "/TraumeOms.jpg",
      price: "4900,-",
      additionalCost: "180kr pr/deltaker",
      features: [
        "Opplæringshefter",
        "Kulepenner",
        "Kladdeark",
        "Teoretisk del",
        "Praktisk del",
        "Avslutningsprøve",
        "KURSDIPLOM"
      ]
    },
    {
      title: "Annet Kurs",
      image: "/AnnetKurs.jpg",
      price: "3900,-",
      additionalCost: "150kr pr/deltaker",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7"
      ]
    },
    {
        title: "Annet Kurs",
        image: "/AnnetKurs.jpg",
        price: "3900,-",
        additionalCost: "150kr pr/deltaker",
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
          "Feature 6",
          "Feature 7"
        ]
      },
      {
        title: "Annet Kurs",
        image: "/AnnetKurs.jpg",
        price: "3900,-",
        additionalCost: "150kr pr/deltaker",
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
          "Feature 6",
          "Feature 7"
        ]
      },
    // Add more courses as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Velg riktig kurs for deg eller din organisasjon.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="flex flex-col bg-gray-50 rounded-xl border-2 shadow-md overflow-hidden">
            <div className="px-6 py-8 text-center flex flex-col h-full">
              <a href="/Tjenesteinformasjon#Traume" className="flex flex-col h-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                />
                <h5 className="text-xl font-semibold text-gray-700 mb-2">{course.title}</h5>
                <p className="text-[#426b1f] font-bold mb-1">Pris: {course.price}</p>
                <p className="text-sm mb-4">
                  Tilleggskostnad på <br />
                  {course.additionalCost}
                </p>

                <button
                  className="px-4 py-2 bg-[#426b1f] text-white rounded-lg font-bold text-xs uppercase transition-all hover:bg-[#528127] focus:opacity-[0.85] mb-4 mx-auto flex items-center justify-center gap-2"
                  type="button"
                >
                  Bestill kurs
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