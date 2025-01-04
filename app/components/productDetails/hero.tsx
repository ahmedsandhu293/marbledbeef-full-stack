"use client";
import React, { useState } from "react";

import ComponentButton from "../common/buttons/ButtonComponent";
import MagicButton from "../common/buttons/MagicButton";
import SeeMore from "../common/seeMore";
import ModalWrapper from "../common/modal/ModalWapper";
import QuantitySelector from "../common/quantitySelector";

import RecipeGenerator from "./RecipeGenerator";

import { useGlobalContext } from "@/app/context/store";
import { CollectionProduct } from "@/types/collection";
const ProductHero = ({ product }: any) => {
  const initialVariant = product?.variants.edges[0]?.node;
  const initialImage = product?.images.edges[0]
    ? product?.images.edges[0]?.node?.originalSrc
    : "./assets/images/no_image.webp";
  const allImages = product?.images.edges;

  const { cartItem, setCartItem } = useGlobalContext();

  const [variant, setVariant] = useState(initialVariant);
  const [image, setImage] = useState(initialImage);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(initialVariant?.id);
  const [quantity, setQuantity] = useState(1);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVariantId = e.target.value;
    const selectedVariant = product?.variants.edges.find(
      (v: any) => v.node.id === selectedVariantId
    );

    setVariant(selectedVariant?.node);
    setSelectedVariant(selectedVariantId);
  };

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleThumbnailClick = (src: any) => {
    setImage(src.node.originalSrc);
  };

  const handleCounterChange = (newValue: number) => {
    setQuantity(newValue);
  };

  const handleAddToCart = (item: CollectionProduct) => {
    const productId = item.node.id;
    const firstVariant = item.node.variants.edges[0]?.node?.id;
    if (!firstVariant) {
      /* eslint-disable no-console */
      console.error("No variants available for this product.");
      return;
    }
    const isProductInCart = cartItem.some(
      (cartProduct) => cartProduct.node.id === productId
    );
    if (!isProductInCart) {
      const newCartItem = {
        ...item,
        selectedVariant: firstVariant,
      };
      setCartItem((prevCart) => [...prevCart, newCartItem]);
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    } else {
      /* eslint-disable no-console */
      console.log("Product is already in the cart.");
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 py-10">
      <div className="col-span-12">
        <h1 className="text-xl font-bold text-white py-4">
          Bienvenue / {product?.handle}
        </h1>
      </div>
      <div className="col-span-1 md:flex flex-col gap-4 hidden ">
        {allImages?.map((image: any, index: number) => (
          <div
            key={index}
            role="button"
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              alt={image?.node?.id}
              className="w-full rounded-lg border border-gold"
              src={image?.node?.originalSrc}
            />
          </div>
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
      <div className="col-span-12 flex flex-wrap gap-2 md:hidden">
        <div className="grid grid-cols-3 gap-2 w-full">
          {allImages?.map((image: any, index: number) => (
            <div
              key={index}
              role="button"
              className="flex justify-center items-center"
              onClick={() => handleThumbnailClick(image)}
            >
              <img
                alt={image?.node?.id}
                className="w-full h-full rounded-lg border border-gold"
                src={image?.node?.originalSrc}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 text-white">
        <div className="flex flex-col justify-between items-center w-full h-full">
          <div>
            <h2 className="text-xl md:text-4xl font-semibold">
              {product?.title}
            </h2>
            <SeeMore
              contentWordsCount={30}
              isExpanded={isExpanded}
              text={product?.description}
            />

            <div className="py-2 flex justify-start items-center gap-4">
              {product?.description && (
                <ComponentButton
                  className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300 "
                  label={isExpanded ? "Afficher moins..." : "Afficher plus..."}
                  onClick={handleExpand}
                />
              )}

              <MagicButton onClick={() => setIsOpen(true)} />
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="grid grid-cols-12 gap-4 w-full">
              <div className="col-span-12 md:col-span-3">
                <div className="flex justify-start items-start gap-2 ">
                  <p className="text-sm flex justify-center items-center gap-2 flex-wrap">
                    {variant?.compareAtPrice && (
                      <span className="font-bold line-through text-red-primary flex">
                        € {variant?.compareAtPrice}
                      </span>
                    )}
                    {variant?.price && (
                      <span className="  flex">€ {variant?.price}</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="flex justify-center items-center border border-gold text-white text-sm px-2 py-1 rounded-lg">
                  Poids (kg)
                </div>
              </div>
              <div className="col-span-6">
                <select
                  className="border border-gold text-white text-sm px-2 py-1 rounded-lg w-full bg-transparent"
                  value={selectedVariant}
                  onChange={handleVariantChange}
                >
                  {product?.variants.edges.map(
                    (variant: any, index: number) => (
                      <option
                        key={variant.node.id}
                        className="bg-black"
                        value={variant.node.id}
                      >
                        {variant?.node?.title}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 w-full">
              <div className="col-span-12 sm:col-span-3">
                <QuantitySelector
                  initialValue={quantity}
                  onChange={handleCounterChange}
                />
              </div>

              <div className="col-span-12 sm:col-span-9">
                <div className="flex justify-end items-center gap-4 w-full">
                  <button
                    className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300  text-black bg-zinc-200 text-sm px-2 py-1 rounded-lg w-full"
                    onClick={() => handleAddToCart({ node: product })}
                  >
                    Ajouter au panier
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
        <RecipeGenerator
          productDescription={
            product?.description ? product?.description : product?.title
          }
        />
      </ModalWrapper>
    </div>
  );
};

export default ProductHero;
