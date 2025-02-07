import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

import QuantitySelector from "../common/quantitySelector";
import { useGlobalContext } from "@/app/context/store";

const CartProduct = ({
  data,
  onDelete,
}: {
  data: any;
  onDelete: (id: string) => void;
}) => {
  const { cartItem, setCartItem } = useGlobalContext();
  const [variant, setVariant] = useState<any>();
  const [quantity, setQuantity] = useState(data?.quantity || 1);

  const handleCounterChange = (newValue: number) => {
    setQuantity(newValue);
    const updatedCart = cartItem.map((item) => {
      if (item.node.id === data.node.id) {
        return { ...item, quantity: newValue };
      }
      return item;
    });
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  };

  useEffect(() => {
    const variant = data.node.variants.edges.find(
      (v: any) => v.node.id === data.selectedVariant
    );

    setVariant(variant);
  }, [data]);

  return (
    <>
      <div className="flex items-center md:items-start md:p-3 rounded-md gap-3 md:flex-row flex-col py-4">
        <div
          className="md:w-28 md:h-28
       bg-cover bg-center rounded-md overflow-hidden border border-gold"
        >
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
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-6">
            <h4 className="text-sm underline">Boeuf de Kobe Yakiniku</h4>
            <MdDeleteOutline
              className="cursor-pointer text-red-primary"
              size={24}
              onClick={() => onDelete(data.node.id)}
            />
          </div>
          <div className="flex justify-start items-start gap-2 ">
            <p className="text-sm ">
              <span className="font-bold">{variant?.node?.title}</span>{" "}
            </p>
          </div>
          <div className="flex justify-center md:items-start items-start gap-4 ">
            <QuantitySelector
              initialValue={quantity}
              onChange={handleCounterChange}
            />
          </div>
        </div>
      </div>
      <div className="pb-3 px-1 md:px-3 flex justify-between text-sm text-gold flex-wrap">
        <span className="text-[#85c788]">économisez 5% sur ce produit</span>

        <span>€ {variant?.node?.price}</span>
      </div>
    </>
  );
};

export default CartProduct;
