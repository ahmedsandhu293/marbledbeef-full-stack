import React from "react";
import { LuTimerReset } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import ComponentButton from "../common/buttons/ButtonComponent";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  return (
    <div
      className={`bg-black text-white shadow-lg w-full max-w-full md:w-[400px] z-50 flex flex-col overflow-hidden font-urbanist`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-1 md:p-4 border-b border-gold">
        <h2 className="text-lg font-bold">Votre Panier</h2>
        <button
          className="text-white text-xl focus:outline-none"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
      </div>

      {/* Header Info */}
      <div className="p-2 md:p-4 text-center">
        <p className="text-[8px] md:text-xs">
          Rejoignez <span className="font-bold">8,000+</span> clients qui font
          confiance à Marbled Beef pour leur viande d{'"'}excellence.
        </p>
      </div>

      {/* Success Message */}
      <div className="flex items-center justify-center gap-2 p-2 text-[8px] md:text-sm border border-gold rounded-2xl mx-4">
        <LuTimerReset />
        <p>Le panier a été mis à jour avec succès</p>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center py-2 md:py-4 text-center">
        <FiShoppingBag size={24} />
        <p className="text-[10px] md:text-sm">
          Votre panier est actuellement vide
        </p>
      </div>

      {/* "Vous pourriez aimer..." Section */}
      <div className="flex justify-start items-start px-4">
        <h3 className="text-[10px] md:text-sm mb-2">Vous pourriez aimer...</h3>
      </div>

      <div className="border-gold border rounded-2xl p-3">
        {/* Scrollable Product List */}
        <div className="overflow-y-auto max-h-[240px]  overflow-x-hidden">
          {Array(10) // Change this to dynamic data when available
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center p-3 rounded-md gap-3 md:flex-row flex-col "
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
                    <h1 className="text-[8px] border border-gold py-1 px-3 rounded-full">
                      POPULAR
                    </h1>
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
                      className="border border-gold text-white text-sm px-2 py-1 rounded-lg w-full bg-transparent"
                      defaultValue="100g"
                    >
                      <option className="bg-transparent" value="100g">
                        100 g
                      </option>
                      <option value="200g">200 g</option>
                      <option value="500g">500 g</option>
                    </select>
                    <ComponentButton
                      className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300  !py-2 h-8"
                      label="Ajouter"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Continue Button */}
        <div className="p-2 md:p-4 border-t border-gold">
          <button className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300  text-black text-sm md:text-lg font-bold w-full py-3 rounded-2xl">
            Continuez Vos Achats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
