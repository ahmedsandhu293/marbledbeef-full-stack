"use client";
import React, { useState } from "react";

import ComponentButton from "../common/buttons/ButtonComponent";
import MagicButton from "../common/buttons/MagicButton";
import SeeMore from "../common/seeMore";
import ModalWrapper from "../common/modal/ModalWapper";

import RecipeGenerator from "./RecipeGenerator";
const ProductHero = ({ product }: any) => {
  const [image, setImage] = useState(
    product?.images.edges[0]?.node?.originalSrc
  );
  const [images, setImages] = useState(product?.images.edges);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleThumbnailClick = (src: any) => {
    setImages(
      product?.images.edges.filter(
        (image: any) => image.node.id !== src.node.id
      )
    );

    setImage(src.node.originalSrc);
  };

  return (
    <div className="grid grid-cols-12 gap-4 py-10">
      <div className="col-span-12">
        <h1 className="text-xl font-bold text-white py-4">
          Welcome / {product?.handle}
        </h1>
      </div>
      <div className="col-span-1 md:flex flex-col gap-4 hidden ">
        {images?.map((image: any, index: number) => (
          <img
            alt={image?.node?.id}
            key={index}
            onClick={() => handleThumbnailClick(image)}
            className="w-full rounded-lg border border-gold"
            src={image?.node?.originalSrc}
          />
        ))}
      </div>
      {/* Main image column */}
      <div className="md:col-span-5 col-span-12 rounded-lg border border-gold">
        <img
          alt="pic 4"
          className="w-full rounded-lg object-contain h-80"
          src={image}
        />
      </div>
      <div className="col-span-1 flex  gap-4 md:hidden ">
        {images?.map((image: any, index: number) => (
          <img
            key={index}
            alt={image?.node?.id}
            onClick={() => handleThumbnailClick(image)}
            className="w-full rounded-lg border border-gold"
            src={image?.node?.originalSrc}
          />
        ))}
      </div>
      ;
      <div className="col-span-12 md:col-span-6 text-white">
        <div className="flex flex-col justify-between items-center w-full h-full">
          <div>
            <h2 className="text-4xl font-semibold">{product?.title}</h2>
            <SeeMore
              contentWordsCount={30}
              isExpanded={isExpanded}
              text={product?.description}
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
        <RecipeGenerator productDescription={product?.description} />
      </ModalWrapper>
    </div>
  );
};

export default ProductHero;
