"use client";

import React, { useState } from "react";
import ComponentButton from "../buttons/ButtonComponent";
import { Product } from "@/types";
import CardComponent from "../cards/CardComponent";
import Image from "next/image";

const BoxBuilder = ({ data }: { data?: Product[] }) => {
  const [giftCount, setGiftCount] = useState(3);
  const [boxItems, setBoxItems] = useState<(Product | null)[]>(
    Array(giftCount).fill(null)
  );
  console.log("🚀 ~ BoxBuilder ~ boxItems:", boxItems);

  const handleAdd = (item: Product) => {
    const emptyIndex = boxItems.findIndex((box) => box === null);
    if (emptyIndex !== -1) {
      const updatedBoxes = [...boxItems];
      updatedBoxes[emptyIndex] = item;
      setBoxItems(updatedBoxes);
    } else {
      console.log("Box is full");
    }
  };

  const handleGiftCountChange = (count: number) => {
    setGiftCount(count);
    setBoxItems(Array(count).fill(null));
  };

  return (
    <div className="mt-44 md:mt-12 lg:mt-0 bg-black">
      <div className="w-full md:h-[50dvh] px-4 flex justify-center items-center flex-col font-urbanist text-white bg-[#1A1A1A] space-y-2 border-b border-gold">
        <p className="text-xl md:text-4xl text-center md:text-left font-bold bg-transparent">
          Black Friday: <span className="text-gold">-30 %</span>{" "}
        </p>
        <p className="text-xl md:text-4xl text-center md:text-left font-semibold bg-transparent">
          Jusqu’au 2 décembre, profitez de -30 % dès 129 € d’achat.
        </p>
        <p className="text-lg md:text-2xl text-center md:text-left font-normal bg-transparent">
          Composez votre Box : 3, 5 ou 10 pièces et régalez-vous avec nos
          viandes d'excellence. Réduction appliquée en caisse 
        </p>
        <div className="py-8 flex justify-center items-center gap-4 flex-col md:flex-row">
          <ComponentButton
            label="Ajouter"
            className="!bg-gradient-primary font-bold px-8"
            onClick={() => handleGiftCountChange(3)}
          />
          <ComponentButton
            label="3 piéces"
            className="!bg-gradient-primary"
            offPerc="30% Off"
            onClick={() => handleGiftCountChange(3)}
          />

          <ComponentButton
            label="5 piéces"
            className="!bg-gradient-primary"
            offPerc="30% Off"
            onClick={() => handleGiftCountChange(5)}
          />
          <ComponentButton
            label="10 piéces"
            className="!bg-gradient-primary"
            offPerc="30% Off"
            onClick={() => handleGiftCountChange(10)}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 w-full flex bg-black flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data?.map((item: Product, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardComponent
                data={item}
                buttonLabel="Ajouter"
                onAddToCart={handleAdd}
                onAddToFavorite={() => {}}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[40%]">
          <div className="max-w-md mx-auto bg-black text-white border border-gold rounded-lg ">
            <h2 className="text-lg font-bold text-center mb-4 border-b border-gold bg-[#131415] py-6">
              <span className="p-6">Contenu de la box</span>
            </h2>
            <div className="grid grid-cols-3 gap-3 mb-4 p-6">
              {boxItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-32 bg-background-light-gold border border-dashed border-gold rounded-md flex items-center justify-center"
                >
                  {item ? (
                    <Image
                      src={item.images.edges[0].node.originalSrc} // Ensure `Product` has an `image` field
                      alt={item.handle}
                      className="w-full object-cover h-full rounded-md"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <span className="text-gray-500">Empty</span>
                  )}
                </div>
              ))}
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

export default BoxBuilder;
