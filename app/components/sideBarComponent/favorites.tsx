import React from "react";
import { RxCross2 } from "react-icons/rx";

import ComponentButton from "../common/buttons/ButtonComponent";

const FavoritesCart = ({ onClose }: { onClose: () => void }) => {
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
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full p-3 rounded-md gap-6 md:flex-row flex-col "
              >
                <div className="w-20 h-20 bg-cover bg-center rounded-md overflow-hidden border border-gold">
                  <img
                    alt="Boeuf de Kobe"
                    className="w-full h-full"
                    src="https://via.placeholder.com/200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-1">
                    <h4 className="text-sm underline">
                      Boeuf de Kobe Yakiniku
                    </h4>
                  </div>
                  <div className="flex justify-start items-start gap-2 ">
                    <p className="text-sm ">
                      <span className="font-bold">€49.89</span>{" "}
                      <span className="line-through text-red-primary">
                        €52.99
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-start items-start gap-2 ">
                    <select
                      className="border bg-transparent border-gold text-white text-sm px-2 py-1 rounded-lg w-full"
                      defaultValue="100g"
                    >
                      <option value="100g">100 g</option>
                      <option value="200g">200 g</option>
                      <option value="500g">500 g</option>
                    </select>
                    <ComponentButton
                      className="!bg-gradient-primary !py-2 h-8"
                      label="Add"
                    />
                  </div>
                </div>
              </div>
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
