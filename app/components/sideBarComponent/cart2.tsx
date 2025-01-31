"use client";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import ProgressBar from "../common/progressBar";

import CartProduct from "./cartProduct";

import { useGlobalContext } from "@/app/context/store";

interface CartProps {
  onClose: () => void;
}

const Cart2: React.FC<CartProps> = ({ onClose }) => {
  const { cartItem, setCartItem } = useGlobalContext();
  const [products, setProducts] = useState(cartItem);

  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = cartItem.filter(
      (cartProduct) => cartProduct.node.id !== productId
    );

    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItem.reduce((accumulator, cartProduct) => {
      const selectedVariantId = cartProduct.selectedVariant;

      console.log("🚀 ~ totalPrice ~ cartProduct:", cartProduct?.quantity);

      const selectedVariant = cartProduct.node.variants.edges.find(
        (variant: any) => variant.node.id === selectedVariantId
      )?.node;

      const variantPrice = selectedVariant
        ? parseFloat(selectedVariant.price)
        : 0;

      const quantity = cartProduct.quantity ?? 1;

      return accumulator + variantPrice * quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  const total = calculateTotalPrice();

  const handleCheckout = async () => {
    try {
      const customerAccessToken = localStorage.getItem("auth-token");

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerAccessToken,
          lineItems: cartItem,
        }),
      });

      const data = await response.json();
      if (!data.success) {
        console.error("Error:", data.error);
        return;
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  useEffect(() => {
    setProducts(cartItem);
  }, [cartItem]);

  return (
    <div
      className={`bg-black text-white shadow-lg w-full max-w-full md:w-[400px] z-50 flex flex-col overflow-hidden font-urbanist`}
    >
      <div className="flex items-center justify-between p-1 md:p-4 border-b border-gold">
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

      <div className="flex items-center justify-center gap-2 p-2 text-[8px] md:text-sm border border-gold rounded-2xl mx-4">
        <FaRegCircleCheck />
        <p>Le panier a été mis à jour avec succès</p>
      </div>

      <div className="p-2 md:p-4 text-center">
        <p className="text-[8px] md:text-xs">
          Rejoignez <span className="font-bold">8,000+</span> clients qui font
          confiance à Marbled Beef pour leur viande d{'"'}excellence.
        </p>
      </div>

      <div className="border-gold border rounded-2xl p-3">
        <div className="overflow-y-auto max-h-[240px]  overflow-x-hidden">
          {products?.map((product, index) => (
            <CartProduct
              key={index}
              data={product}
              onDelete={handleRemoveFromCart}
            />
          ))}
        </div>

        {/* Continue Button */}
        <div className="p-2 md:p-4 border-t border-gold">
          <div className="flex justify-center items-center py-2 gap-2 ">
            <p className="text-sm ">
              <span className="font-bold">Total partiel:  </span>{" "}
              {/* <span className="line-through text-gold">€52.99</span>{" "} */}
              <span className="font-bold text-red-primary">€{total}</span>{" "}
            </p>
          </div>
          <button
            onClick={handleCheckout}
            className="!bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300  text-black text-sm md:text-lg font-bold w-full py-3 rounded-2xl"
          >
            Continuez Vos Achats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
