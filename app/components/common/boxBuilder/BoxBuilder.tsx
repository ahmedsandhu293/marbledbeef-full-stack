"use client";

import React, { useState } from "react";
import Image from "next/image";

import ComponentButton from "../buttons/ButtonComponent";
import CardComponent from "../cards/CardComponent";

import { Product } from "@/types";
import { CollectionProduct } from "@/types/collection";
import { useGlobalContext } from "@/app/context/store";

const BoxBuilder = ({ data }: { data?: Product[] }) => {
  const { favorites, setFavorites } = useGlobalContext();

  const [giftCount, setGiftCount] = useState(3);
  const [boxItems, setBoxItems] = useState<(Product | null)[]>(
    Array(giftCount).fill(null)
  );

  const handleAdd = (item: Product) => {
    const emptyIndex = boxItems.findIndex((box) => box === null);

    if (emptyIndex !== -1) {
      const updatedBoxes = [...boxItems];

      updatedBoxes[emptyIndex] = item;
      setBoxItems(updatedBoxes);
    } else {
      /* eslint-disable no-console */

      console.log("Box is full");
    }
  };

  const handleGiftCountChange = (count: number) => {
    setGiftCount(count);
    setBoxItems(Array(count).fill(null));
  };

  const handleAddToFavorite = (item: CollectionProduct) => {
    const productId = item.node.id;
    const firstVariant = item.node.variants.edges[0]?.node?.id;

    if (!firstVariant) {
      /* eslint-disable no-console */

      console.error("No variants available for this product.");

      return;
    }

    const isProductInCart = favorites.some(
      (favoritesProduct) => favoritesProduct.node.id === productId
    );

    if (!isProductInCart) {
      const newFavorites = {
        ...item,
        selectedVariant: firstVariant,
      };

      setFavorites((prevCart) => [...prevCart, newFavorites]);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      const updatedCart = favorites.filter(
        (favorites) => favorites.node.id !== productId
      );

      setFavorites(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(favorites));
    }
  };

  return (
    <div className="mt-0 md:mt-20  bg-black ">
      <div className="w-full md:h-[50dvh] px-4 flex justify-center items-center pt-10 flex-col font-urbanist text-white bg-[#1A1A1A] space-y-2 border-b border-gold">
        <p className="text-xl md:text-4xl text-center md:text-left font-bold bg-transparent">
          Black Friday: <span className="text-gold">-30 %</span>{" "}
        </p>
        <p className="text-xl md:text-4xl text-center md:text-left font-semibold bg-transparent">
          Jusqu’au 2 décembre, profitez de -30 % dès 129 € d’achat.
        </p>
        <p className="text-lg md:text-2xl text-center md:text-left font-normal bg-transparent">
          Composez votre Box : 3, 5 ou 10 pièces et régalez-vous avec nos
          viandes d&apos;excellence. Réduction appliquée en caisse 
        </p>
        <div className="py-8 flex justify-center items-center gap-4 flex-col md:flex-row">
          <ComponentButton
            className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300 "
            label="3 piéces"
            offPerc="30% Off"
            onClick={() => handleGiftCountChange(3)}
          />

          <ComponentButton
            className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300 "
            label="5 piéces"
            offPerc="30% Off"
            onClick={() => handleGiftCountChange(5)}
          />
          <ComponentButton
            className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300 "
            label="10 piéces"
            offPerc="30% Off"
            onClick={() => handleGiftCountChange(10)}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 w-full flex bg-black flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data?.map((item: Product | any, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardComponent
                buttonLabel="Ajouter"
                data={item}
                onAddToCart={handleAdd}
                onAddToFavorite={() => handleAddToFavorite({ node: item })}
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
                      alt={item.title || ""}
                      className="w-full object-cover h-full rounded-md"
                      height={100}
                      src={item?.images?.edges[0].node.originalSrc || ""} // Ensure `Product` has an `image` field
                      width={100}
                    />
                  ) : (
                    <span className="text-gray-500">Vide</span>
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
              className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300  font-bold px-8 mb-8"
              label="Ajouter Au Panier"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxBuilder;
