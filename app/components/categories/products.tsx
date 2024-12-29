"use client";

// Constants
import { useGlobalContext } from "@/app/context/store";
import { CollectionProduct } from "@/types/collection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CollectionCard from "../common/cards/CollectionsCard";

const Products = ({ collection }: { collection: any }) => {
  const products = collection.data.collectionByHandle.products.edges;
  const { push } = useRouter();
  const { cartItem, setCartItem, favorites, setFavorites } = useGlobalContext();

  const handleAddToCart = (item: CollectionProduct) => {
    const productId = item.node.id;
    const firstVariant = item.node.variants.edges[0]?.node?.id;

    if (!firstVariant) {
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
      console.log("Product is already in the cart.");
    }
  };

  const handleAddToFavorite = (item: CollectionProduct) => {
    const productId = item.node.id;
    const firstVariant = item.node.variants.edges[0]?.node?.id;

    if (!firstVariant) {
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
      console.log("Product is already in the Favorites.");
    }
  };

  const handleClick = (item: { node: { handle: string } }) => {
    push(`/${item.node.handle}`);
  };

  return (
    <div className="w-full space-y-4 md:space-y-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {products.map((product: any, productIndex: number) => (
          <div key={productIndex} className="p-2 text-center">
            <CollectionCard
              data={product}
              onAddToCart={handleAddToCart}
              onAddToFavorite={handleAddToFavorite}
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
