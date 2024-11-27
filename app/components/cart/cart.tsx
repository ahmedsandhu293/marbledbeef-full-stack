import React from "react";
import { LuTimerReset } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  return (
    <div
      className={`bg-black text-white shadow-lg w-full max-w-full md:w-[400px] z-50 flex flex-col overflow-hidden`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border-primary">
        <h2 className="text-lg font-bold">Votre Panier</h2>
        <button
          className="text-white text-xl focus:outline-none"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
      </div>

      {/* Header Info */}
      <div className="p-4 text-center">
        <p className="text-xs">
          Rejoignez <span className="font-bold">8,000+</span> clients qui font
          confiance à Marbled Beef pour leur viande d{'"'}excellence.
        </p>
      </div>

      {/* Success Message */}
      <div className="flex items-center justify-center gap-2 p-2 text-sm border border-border-primary rounded-2xl mx-4">
        <LuTimerReset />
        <p>Le panier a été mis à jour avec succès</p>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center py-4">
        <FiShoppingBag size={24} />
        <p className="text-sm">Votre panier est actuellement vide</p>
      </div>

      {/* "Vous pourriez aimer..." Section */}
      <div className="flex justify-start items-start px-4">
        <h3 className="text-sm mb-2">Vous pourriez aimer...</h3>
      </div>

      <div className="border-border-primary border rounded-2xl p-3">
        {/* Scrollable Product List */}
        <div className="overflow-y-auto max-h-[240px] px-4 overflow-x-hidden">
          {Array(10) // Change this to dynamic data when available
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center p-3 rounded-md gap-3 mb-4"
              >
                <div className="w-16 h-16 bg-cover bg-center rounded-md overflow-hidden">
                  <img
                    alt="Boeuf de Kobe"
                    className="w-full h-full"
                    src="https://via.placeholder.com/200"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold">Boeuf de Kobe Yakiniku</h4>
                  <p className="text-sm">
                    <span className="font-bold">€49.89</span>{" "}
                    <span className="line-through text-gray-400">€52.99</span>
                  </p>
                  <select
                    className="border border-border-primary text-white text-sm px-2 py-1 rounded mt-2"
                    defaultValue="100g"
                  >
                    <option value="100g">100 g</option>
                    <option value="200g">200 g</option>
                    <option value="500g">500 g</option>
                  </select>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 text-sm rounded">
                  Ajouter
                </button>
              </div>
            ))}
        </div>

        {/* Continue Button */}
        <div className="p-4 border-t border-gray-500">
          <button className="bg-gray-200 text-black font-bold w-full py-3 rounded-md">
            Continuez Vos Achats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
