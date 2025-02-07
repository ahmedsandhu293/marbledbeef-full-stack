"use client";

import { useEffect } from "react";

import HorizontalCarousel from "../common/carousel";
import CategoriesHeading from "../common/headings/categoriesHeading";
import CollectionCard from "../common/cards/CollectionsCard";

import { CollectionProduct, CollectionsResponse } from "@/types/collection";
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";

const Products = ({ collections }: { collections: CollectionsResponse }) => {
  const categories = collections.data.collections.edges;

  const { cartItem, setCartItem, favorites, setFavorites } = useGlobalContext();

  useEffect(() => {
    const storedCartItem = localStorage.getItem("cartItem");
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    if (storedCartItem) {
      setCartItem(JSON.parse(storedCartItem));
    }
  }, []);

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
        quantity: 1,
      };

      setCartItem((prevCart) => [...prevCart, newCartItem]);
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    } else {
      /* eslint-disable no-console */

      console.log("Product is already in the cart.");
    }
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
    <div className="w-full space-y-4 md:space-y-8">
      {categories.map((category, index) => (
        <div key={index} className="w-full font-urbanist">
          <Link href={`/categories/${category.node.handle}`}>
            <CategoriesHeading title={category.node.title} onClick={() => {}} />
          </Link>
          <HorizontalCarousel infinite autoPlaySpeed={4000}>
            {category.node.products.edges.map((product, productIndex) => (
              <div key={productIndex} className="p-2 text-center">
                <CollectionCard
                  data={product}
                  onAddToCart={handleAddToCart}
                  onAddToFavorite={handleAddToFavorite}
                  onClick={() => {}}
                />
              </div>
            ))}
          </HorizontalCarousel>
        </div>
      ))}
    </div>
  );
};

export default Products;
