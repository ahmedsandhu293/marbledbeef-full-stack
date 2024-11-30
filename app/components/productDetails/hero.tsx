import React from "react";
// https://via.placeholder.com/200
const ProductHero = () => {
  return (
    <div className="grid grid-cols-12 gap-4 py-10">
      <div className="col-span-12">
        <h1 className="text-xl font-bold text-white py-4">
          Welcome / Shabu-Shabu Wagyu Ribeye A5
        </h1>
      </div>

      {/* First column with vertical images */}
      <div className="col-span-1 flex flex-col gap-4">
        <img
          alt="Image 1"
          className="w-full"
          src="https://via.placeholder.com/200"
        />
        <img
          alt="Image 2"
          className="w-full"
          src="https://via.placeholder.com/200"
        />
        <img
          alt="Image 3"
          className="w-full"
          src="https://via.placeholder.com/200"
        />
        <img
          alt="Image 3"
          className="w-full"
          src="https://via.placeholder.com/200"
        />
      </div>

      {/* Main image column */}
      <div className="col-span-5">
        <img
          alt="Main Image"
          className="w-full"
          src="https://via.placeholder.com/800x600"
        />
      </div>

      <div className="col-span-6 text-white">
        <h2 className="text-4xl font-semibold">Shabu-Shabu Wagyu Ribeye A5</h2>
        <p className="mt-4 text-lg font-medium">
          Origine : Wagyu - Grade A5 - Japon{"'"}Mode de cuisson : Plongez les
          tranches dans un bouillon dashi ou un bouillon de légumes frémissant.
          Accompagnez-les de chou chinois, de carottes et de champignons
          shiitake pour une dégustation raffinée. Mode de cuisson : Plongez les
          tranches dans un bouillon dashi ou un bouillon de légumes frém.
          Plongez les tranches dans un bouillon dashi ou un bouillon de légumes
          frémi.
        </p>
      </div>
    </div>
  );
};

export default ProductHero;
