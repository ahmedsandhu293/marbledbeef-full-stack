import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartProduct = ({
  data,
  onDelete,
}: {
  data: any;
  onDelete: (id: string) => void;
}) => {
  const [variant, setVariant] = useState();

  useEffect(() => {
    const variant = data.node.variants.edges.find(
      (v: any) => v.node.id === data.selectedVariant
    );
    setVariant(variant);
  }, [data]);

  return (
    <div className="flex items-start p-3 rounded-md gap-3 md:flex-row flex-col ">
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
            size={24}
            onClick={() => onDelete(data.node.id)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-start items-start gap-2 ">
          <p className="text-sm ">
            <span className="font-bold">{variant?.node?.title}</span>{" "}
          </p>
        </div>
        <div className="flex justify-start items-start gap-4 border border-gold rounded-lg py-1 px-5 w-28">
          <span>-</span>
          <span>3</span>
          <span>+</span>
        </div>
        <div className="flex justify-end text-sm text-gold">
          <span>{variant?.node?.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
