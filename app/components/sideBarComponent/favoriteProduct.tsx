import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

import ComponentButton from "../common/buttons/ButtonComponent";

import { CollectionProduct } from "@/types/collection";
import { useGlobalContext } from "@/app/context/store";

const FavoriteProduct = ({
  data,
  onDelete,
}: {
  data: any;
  onDelete: (id: string) => void;
}) => {
  const [variant, setVariant] = useState<any>();
  const { cartItem, setCartItem } = useGlobalContext();

  useEffect(() => {
    const variant = data.node.variants.edges.find(
      (v: any) => v.node.id === data.selectedVariant
    );

    setVariant(variant);
  }, [data]);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVariantId = e.target.value;
    const selectedVariant = data.node.variants.edges.find(
      (v: any) => v.node.id === selectedVariantId
    );

    setVariant(selectedVariant);
  };

  const handleAddtocart = (item: CollectionProduct) => {
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

  return (
    <div className="flex items-center justify-center w-full md:p-3 rounded-md gap-6 md:flex-row flex-col py-4">
      <div className="md:w-28 md:h-28 bg-cover bg-center rounded-md overflow-hidden border border-gold">
        <img
          alt="Boeuf de Kobe"
          className="w-full h-full"
          src={
            data.node.images.edges[0]
              ? data.node.images.edges[0]?.node.originalSrc
              : "./assets/images/no_image.webp"
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-1">
          <h4 className="text-sm underline">{data?.node?.title}</h4>
          <MdDeleteOutline
            className="cursor-pointer text-red-primary w-7"
            size={24}
            onClick={() => onDelete(data.node.id)}
          />
        </div>
        <div className="flex justify-start items-start gap-2 ">
          <p className="text-sm ">
            <span className="font-bold">€ {variant?.node?.price}</span>{" "}
            {/* <span className="line-through text-red-primary">€52.99</span> */}
          </p>
        </div>
        <div className="flex justify-start items-start gap-2 ">
          <select
            className="border bg-transparent border-gold text-white text-sm px-2 py-1 rounded-lg w-full"
            defaultValue="100g"
            value={variant?.node?.id}
            onChange={handleVariantChange}
          >
            {data.node.variants.edges.map((v: any) => (
              <option key={v.node.id} value={v.node.id}>
                {v.node.title}
              </option>
            ))}
          </select>
          <ComponentButton
            className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300  !py-2 h-8"
            label="Ajouter"
            onClick={() => handleAddtocart(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
