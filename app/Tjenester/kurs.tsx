import React from "react";

export default function Kurs() {
  const products: {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
  }[] = [
    {
      id: 1,
      name: "Kurs og Fagdager",
      href: "#",
      price: "Fra 4 900kr",
      imageSrc: "/Kursfagdager.jpg",
      imageAlt:
        "picture of a stick figure and students the main figure is at a blackbord.",
    },
    {
      id: 2,
      name: "Faglig veiledning",
      href: "#",
      price: "Fra 600kr",
      imageSrc: "/Fagligveiledning.jpg",
      imageAlt: "Two persons at a table talking",
    },
    {
      id: 3,
      name: "Metaveiledning",
      href: "#",
      price: "Fra 600kr",
      imageSrc: "/Metaveiledning.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 4,
      name: "Gruppeveiledning",
      href: "#",
      price: "Fra 600kr",
      imageSrc: "/Gruppeveiledning.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Leirbål veiledning",
      href: "#",
      price: "Fra 1 149kr",
      imageSrc: "/Leirbål-veiledning.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 6,
      name: "Terapeutiske Samtaler",
      href: "#",
      price: "Fra 1500kr",
      imageSrc: "/TerapeutiskeS.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Leirbål veiledning",
      href: "#",
      price: "Fra 1 149kr",
      imageSrc: "/Leirbål-veiledning.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Leirbål veiledning",
      href: "#",
      price: "Fra 1 149kr",
      imageSrc: "/Leirbål-veiledning.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Leirbål veiledning",
      href: "#",
      price: "Fra 1 149kr",
      imageSrc: "/Leirbål-veiledning.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Leirbål veiledning",
      href: "#",
      price: "Fra 1 149kr",
      imageSrc: "/Leirbål-veiledning.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
  ];

  return (
    <div className="mt-16">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
