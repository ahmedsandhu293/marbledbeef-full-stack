// TODO make this server side
"use client";

import React from "react";

import BlogCard from "../components/common/cards/BlogCard";
import ComponentButton from "../components/common/buttons/ButtonComponent";
import HorizontalCarousel from "../components/common/carousel";
import { dummyData } from "../utils/constants";
import CardComponent from "../components/common/cards/CardComponent";
import ModalWrapper from "../components/common/modal/ModalWapper";

const Page = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-black">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-black gap-4 p-4">
        {Array.from({ length: 16 }, (_, index) => (
          <div key={index} className="p-2 text-center">
            <BlogCard onClick={() => setOpen(true)} />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center space-y-3 items-center py-4">
        <ComponentButton
          className="  !bg-gradient-primary"
          label="SUIVANTE"
          onClick={() => {}}
        />

        <p className="text-gray-400">Page 1 of 2</p>
        <p className="text-white text-2xl">Parcourir plus</p>
      </div>

      <HorizontalCarousel autoPlaySpeed={4000} infinite={true}>
        {dummyData.map((item, index) => (
          <div key={index} style={{ padding: "10px", textAlign: "center" }}>
            <CardComponent
              data={item}
              onAddToCart={() => {}}
              onAddToFavorite={() => {}}
              onClick={() => {}}
            />
          </div>
        ))}
      </HorizontalCarousel>

      <ModalWrapper
        className="max-h-[75%] overflow-y-auto"
        isClose={true}
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <BlogModal />
      </ModalWrapper>
    </div>
  );
};

const BlogModal = () => {
  return (
    <div className="bg-black text-white p-3">
      {/* Recipe Image */}
      <div className="w-full max-w-4xl mx-auto">
        <img
          alt="Côtes de Wagyu"
          className="rounded-lg w-full object-cover"
          src="https://via.placeholder.com/800x400" // Replace with the actual image URL
        />
      </div>

      {/* Recipe Header */}
      <div className="w-full max-w-4xl mx-auto mt-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Côtes de Wagyu Braisées de Luxe
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <ComponentButton
            className="!bg-gradient-primary px-4 py-2 rounded-lg"
            label="Sauve recette"
            onClick={() => {}}
          />
          <button className="bg-transparent text-white px-4 py-2 rounded-xl border border-white hover:bg-white hover:text-black transition">
            Nouvelle recette
          </button>
        </div>
      </div>

      {/* Ingredients */}
      <div className="w-full max-w-4xl mx-auto mt-10">
        <h2 className="text-xl md:text-2xl font-bold border-b border-gray-700 pb-2">
          Ingrédients
        </h2>
        <ul className="mt-3 list-disc pl-5">
          <li>Côtes de Wagyu (900g - 1.3kg)</li>
          <li>Huile d'olive – 60ml</li>
          <li>Sel et poivre noir – 1 cuil. à café de chaque</li>
          {/* Add more ingredients */}
        </ul>
      </div>

      {/* Recipe Steps */}
      <div className="w-full max-w-4xl mx-auto mt-10">
        <h2 className="text-xl md:text-2xl font-bold border-b border-gray-700 pb-2">
          Recette
        </h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2">
          <li>Préchauffez le four à 135°C (275°F).</li>
          <li>
            Séchez les côtes et préparez des assaisonnements, etc. (Add
            details).
          </li>
          <li>
            Saisissez les côtes dans une poêle chaude pendant 2-3 minutes. (Add
            details).
          </li>
          {/* Add more steps */}
        </ol>
      </div>
    </div>
  );
};

export default Page;
