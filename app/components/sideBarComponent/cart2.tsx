import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";

import ProgressBar from "../common/progressBar";

interface CartProps {
  onClose: () => void;
}

const Cart2: React.FC<CartProps> = ({ onClose }) => {
  return (
    <div
      className={`bg-black text-white shadow-lg w-full max-w-full md:w-[400px] z-50 flex flex-col overflow-hidden`}
    >
      <div className="flex items-center justify-between p-1 md:p-4 border-b border-border-primary">
        <h2 className="text-lg font-bold">Votre Panier</h2>
        <button
          className="text-white text-xl focus:outline-none"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
      </div>

      <div className="p-2 md:p-4 text-center">
        <p className="text-[8px] md:text-xs">
          Vous êtes à €57.07 de{" "}
          <span className="font-bold">la LIVRAISON GRATUITE!</span> \
        </p>
      </div>

      <ProgressBar />

      <div className="flex items-center justify-center gap-2 p-2 text-[8px] md:text-sm border border-border-primary rounded-2xl mx-4">
        <FaRegCircleCheck />
        <p>Le panier a été mis à jour avec succès</p>
      </div>

      <div className="p-2 md:p-4 text-center">
        <p className="text-[8px] md:text-xs">
          Rejoignez <span className="font-bold">8,000+</span> clients qui font
          confiance à Marbled Beef pour leur viande d{'"'}excellence.
        </p>
      </div>

      <div className="border-border-primary border rounded-2xl p-3">
        <div className="overflow-y-auto max-h-[240px]  overflow-x-hidden">
          {Array(10) // Change this to dynamic data when available
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-start p-3 rounded-md gap-3 md:flex-row flex-col "
              >
                <div className="w-20 h-20 bg-cover bg-center rounded-md overflow-hidden border border-border-primary">
                  <img
                    alt="Boeuf de Kobe"
                    className="w-full h-full"
                    src="https://via.placeholder.com/200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-6">
                    <h4 className="text-sm underline">
                      Boeuf de Kobe Yakiniku
                    </h4>
                    <MdDeleteOutline size={24} />
                  </div>
                  <div className="flex justify-start items-start gap-2 ">
                    <p className="text-sm ">
                      <span className="font-bold">+100gm</span>{" "}
                    </p>
                  </div>
                  <div className="flex justify-start items-start gap-4 border border-border-primary rounded-2xl py-1 px-5 w-auto">
                    <span>-</span>
                    <span>3</span>
                    <span>+</span>
                  </div>
                  <div className="flex justify-end text-sm">
                    <span>€52.99</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Continue Button */}
        <div className="p-2 md:p-4 border-t border-gray-500">
          <div className="flex justify-center items-center py-2 gap-2 ">
            <p className="text-sm ">
              <span className="font-bold">Total partiel:  </span>{" "}
              <span className="line-through ">€52.99</span>{" "}
              <span className="font-bold text-red-primary">€49.89</span>{" "}
            </p>
          </div>
          <button className="bg-gray-200 text-black text-sm md:text-lg font-bold w-full py-3 rounded-2xl">
            Continuez Vos Achats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
