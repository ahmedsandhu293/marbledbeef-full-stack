"use client";
import React, { useState } from "react";

import ComponentButton from "../common/buttons/ButtonComponent";
import MagicButton from "../common/buttons/MagicButton";
import SeeMore from "../common/seeMore";
import ModalWrapper from "../common/modal/ModalWapper";

import RecipeGenerator from "./RecipeGenerator";
const ProductHero = () => {
  const longText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, nostrum repudiandae quisquam accusantium, aliquid harum laudantium, omnis reiciendis tenetur placeat saepe quo temporibus eligendi explicabo et facilis debitis odio assumenda?`;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-12 gap-4 py-10">
      <div className="col-span-12">
        <h1 className="text-xl font-bold text-white py-4">
          Welcome / Shabu-Shabu Wagyu Ribeye A5
        </h1>
      </div>

      <div className="col-span-1 md:flex flex-col gap-4 hidden ">
        <img
          alt="pic 2"
          className="w-full rounded-lg border border-gold"
          src="https://via.placeholder.com/200"
        />
        <img
          alt="pic 3"
          className="w-full rounded-lg border border-gold"
          src="https://via.placeholder.com/200"
        />
        <img
          alt="pic 3"
          className="w-full rounded-lg border border-gold"
          src="https://via.placeholder.com/200"
        />
      </div>

      {/* Main image column */}
      <div className="md:col-span-5 col-span-12 rounded-lg border border-gold">
        <img
          alt="pic 4"
          className="w-full rounded-lg"
          src="https://via.placeholder.com/800x600"
        />
      </div>

      <div className="col-span-1 flex  gap-4 md:hidden ">
        <img
          alt="pic 5"
          className="w-full rounded-lg border border-gold"
          src="https://via.placeholder.com/200"
        />
        <img
          alt="pic 6"
          className="w-full rounded-lg border border-gold"
          src="https://via.placeholder.com/200"
        />
        <img
          alt="pic 7"
          className="w-full rounded-lg border border-gold"
          src="https://via.placeholder.com/200"
        />
      </div>

      <div className="col-span-12 md:col-span-6 text-white">
        <div className="flex flex-col justify-between items-center w-full h-full">
          <div>
            <h2 className="text-4xl font-semibold">
              Shabu-Shabu Wagyu Ribeye A5
            </h2>
            <p className="mt-4 text-lg font-medium">
              Origine : Wagyu - Grade A5 - Japon{"'"}Mode de cuisson : Plongez
              les tranches dans un bouillon dashi ou un bouillon de légumes
              frémissant. Accompagnez-les de chou chinois, de carottes et de
              champignons shiitake pour une dégustation raffinée. Mode de
              cuisson : Plongez les tranches dans un bouillon dashi ou un
              bouillon de légumes frém. Plongez les tranches dans un bouillon
              dashi ou un bouillon de légumes frémi.
            </p>

            <SeeMore
              contentWordsCount={20}
              isExpanded={isExpanded}
              text={longText}
            />

            <div className="py-2 flex justify-start items-center gap-4">
              <ComponentButton
                className="!bg-gradient-primary"
                label={isExpanded ? "Show less..." : "Show more..."}
                onClick={handleExpand}
              />

              <MagicButton onClick={() => setIsOpen(true)} />
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="grid grid-cols-12 gap-4 w-full">
              <div className="col-span-3">
                <div className="flex justify-start items-start gap-2 ">
                  <p className="text-sm ">
                    <span className="font-bold">€49.89</span>{" "}
                    <span className="line-through text-red-primary">
                      €52.99
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex justify-center items-center border border-gold text-white text-sm px-2 py-1 rounded-lg">
                  Weight (kg)
                </div>
              </div>
              <div className="col-span-6">
                <select
                  className="border border-gold text-white text-sm px-2 py-1 rounded-lg w-full bg-transparent"
                  defaultValue="100g"
                >
                  <option value="100g">100 g</option>
                  <option value="200g">200 g</option>
                  <option value="500g">500 g</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 w-full">
              <div className="col-span-3">
                <div className="flex justify-center items-center gap-4 border border-gold rounded-lg py-0.5 px-5 w-auto">
                  <span>-</span>
                  <span>3</span>
                  <span>+</span>
                </div>
              </div>

              <div className="col-span-9">
                <div className="flex justify-end items-center gap-4 w-full">
                  <button className="!bg-gradient-primary text-black bg-zinc-200 text-sm px-2 py-1 rounded-lg w-full">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalWrapper
        className="bg-black border border-gold rounded-3xl p-6"
        isClose={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <RecipeGenerator />
      </ModalWrapper>
    </div>
  );
};

export default ProductHero;
