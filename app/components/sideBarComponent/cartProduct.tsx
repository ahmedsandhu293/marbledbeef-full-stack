import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

import QuantitySelector from "../common/quantitySelector";

const CartProduct = ({
  data,
  onDelete,
  quantity,
  onQuantityChange,
}: {
  data: any;
  onDelete: (id: string) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}) => {
  const [variant, setVariant] = useState<any>();

  useEffect(() => {
    const variant = data.node.variants.edges.find(
      (v: any) => v.node.id === data.selectedVariant
    );

    setVariant(variant);
  }, [data]);

  return (
    <div className="flex items-center md:items-start md:p-3 rounded-md gap-3 md:flex-row flex-col ">
      <div className="w-20 h-20 bg-cover bg-center rounded-md overflow-hidden border border-gold">
        <img
          alt="Boeuf de Kobe"
          className="w-full h-full"
          src={data.node.images.edges[0]?.node.originalSrc}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-6">
          <h4 className="text-sm underline">Boeuf de Kobe Yakiniku</h4>
          <MdDeleteOutline
            className="cursor-pointer"
            size={24}
            onClick={() => onDelete(data.node.id)}
          />
        </div>
        <div className="flex justify-start items-start gap-2 ">
          <p className="text-sm ">
            <span className="font-bold">{variant?.node?.title}</span>{" "}
          </p>
        </div>
        <div className="flex justify-center md:items-start items-center gap-4 ">
          <QuantitySelector
            initialValue={quantity}
            onChange={onQuantityChange}
          />
        </div>
        <div className="flex justify-end text-sm text-gold">
          <span>€ {variant?.node?.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
