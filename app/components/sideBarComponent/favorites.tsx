import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

import ComponentButton from "../common/buttons/ButtonComponent";
import { useGlobalContext } from "@/app/context/store";
import FavoriteProduct from "./favoriteProduct";

const FavoritesCart = ({ onClose }: { onClose: () => void }) => {
  const { favorites } = useGlobalContext();
  const [products, setProducts] = useState(favorites);

  useEffect(() => {
    setProducts(favorites);
  }, [favorites]);

  return (
    <div
      className={`bg-black text-white shadow-lg w-full max-w-full md:w-[400px] z-50 flex flex-col overflow-hidden h-[100%] font-urbanist`}
    >
      <div className="flex items-center justify-between p-1 md:p-4 border-b border-gold h-[10%]">
        <h2 className="text-lg font-bold">Votre Panier</h2>
        <button
          className="text-white text-xl focus:outline-none"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
      </div>

      <div className="p-3 w-full h-[90%]">
        <div className="overflow-y-auto h-full  overflow-x-hidden">
          {products?.map((product, index) => (
            <FavoriteProduct key={index} data={product} />
          ))}
        </div>
        {/* <div className="flex w-full h-full items-center justify-center flex-col text-center gap-3">
          <FiHeart size={26} />
          <p>Votre liste de favoris est actuellement vide Discuter</p>
        </div> */}
      </div>
    </div>
  );
};

export default FavoritesCart;
