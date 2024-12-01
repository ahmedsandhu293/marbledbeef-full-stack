import React from "react";

import ProductHero from "@/app/components/productDetails/hero";
import Products from "@/app/components/productDetails/products";

const page = () => {
  return (
    <div className="bg-background-primary ">
      <div className="container mx-auto px-6">
        <ProductHero />
        <Products />
        <div className="border-t border-border-primary py-10 flex items-center justify-center">
          <div className="p-8 lg:p-16  bg-black text-white  rounded-3xl w-full lg:w-[720px]  flex flex-col justify-center items-start">
            <h3 className="text-xl md:text-3xl font-bold text-center">
              Bénéficiez d{"'"}offres exclusives, accédez à des promotions et
              bien plus encore !
            </h3>
            <p className="text-sm md:text-lg text-gray-400 mt-2 text-center">
              Profitez de 10% de réduction sur votre première commande !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
