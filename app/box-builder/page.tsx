"use client";

import React from "react";
import ComponentButton from "../components/common/buttons/ButtonComponent";
import CardsComponent from "../components/common/cards/Cards";
import { dummyData } from "../utils/constants";
import CardComponent from "../components/common/cards/CardComponent";

const page = () => {
  return (
    <div>
      <div className="w-full h-[50dvh] flex justify-center items-center flex-col font-urbanist text-white bg-[#1A1A1A] space-y-2 border-b border-gold">
        <p className="text-4xl font-bold bg-transparent">
          Black Friday: <span className="text-gold">-30 %</span>{" "}
        </p>
        <p className="text-4xl font-semibold bg-transparent">
          Jusqu’au 2 décembre, profitez de -30 % dès 129 € d’achat.
        </p>
        <p className="text-2xl font-normal bg-transparent">
          Composez votre Box : 3, 5 ou 10 pièces et régalez-vous avec nos
          viandes d'excellence. Réduction appliquée en caisse 
        </p>
        <div className="py-8 flex justify-center items-center gap-4 flex-col md:flex-row">
          <ComponentButton
            label="Ajouter"
            className="!bg-gradient-primary font-bold px-8"
          />
          <ComponentButton
            label="3 piéces"
            className="!bg-gradient-primary"
            offPerc="30% Off"
          />

          <ComponentButton
            label="5 piéces"
            className="!bg-gradient-primary"
            offPerc="30% Off"
          />
          <ComponentButton
            label="10 piéces"
            className="!bg-gradient-primary"
            offPerc="30% Off"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 w-full flex bg-black flex-col-reverse md:flex-row">
        <div className="w-[60%] grid grid-cols-4">
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
        </div>
        <div className="w-[40%]">
          <div className="max-w-md mx-auto bg-black text-white border border-gold rounded-lg ">
            <h2 className="text-lg font-bold text-center mb-4 border-b border-gold bg-[#131415] py-6">
              <span className="p-6">Contenu de la box</span>
            </h2>
            <div className="flex justify-between items-center gap-3 mb-4 p-6">
              <div className="w-36 h-32 bg-gray-800 border border-dashed border-gold rounded-md flex items-center justify-center">
                Article 1
              </div>
              <div className="w-36 h-32 bg-gray-800 border border-dashed border-gold rounded-md flex items-center justify-center">
                Article 2
              </div>
              <div className="w-36 h-32 bg-gray-800 border border-dashed border-gold rounded-md flex items-center justify-center">
                Article 3
              </div>
            </div>
            <div className="text-center mb-4 flex justify-center items-center flex-col">
              <hr className="border-t border-gold w-2/3 my-4" />
              <p className="text-2xl">
                Prix total: <span className="font-bold">€0.00</span>{" "}
                <span className="line-through">€0.00</span>
              </p>
            </div>
            <ComponentButton
              label="Ajouter Au Panier"
              className="!bg-gradient-primary font-bold px-8 mb-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
