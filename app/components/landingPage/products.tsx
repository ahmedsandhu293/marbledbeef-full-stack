"use client";

// Constants
import HorizontalCarousel from "../common/carousel";
import CategoriesHeading from "../common/headings/categoriesHeading";
import { ProductsType } from "@/types/products";
import CollectionCard from "../common/cards/CollectionsCard";
import { useRouter } from "next/navigation";
import { CollectionProduct, CollectionsResponse } from "@/types/collection";
import { useGlobalContext } from "@/app/context/store";
import { useEffect } from "react";

const Products = ({ collections }: { collections: CollectionsResponse }) => {
  const categories = collections.data.collections.edges;

  const { push } = useRouter();
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
      {categories.map((category, index) => (
        <div className="w-full font-urbanist" key={index}>
          <CategoriesHeading title={category.node.title} onClick={() => {}} />
          <HorizontalCarousel autoPlaySpeed={4000} infinite>
            {category.node.products.edges.map((product, productIndex) => (
              <div key={productIndex} className="p-2 text-center">
                <CollectionCard
                  data={product}
                  onAddToCart={handleAddToCart}
                  onAddToFavorite={handleAddToFavorite}
                  onClick={handleClick}
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
