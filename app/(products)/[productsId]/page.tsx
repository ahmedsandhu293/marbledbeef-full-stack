import React from "react";

import ProductHero from "@/app/components/productDetails/hero";
import Products from "@/app/components/productDetails/products";
import { fetchGraphQLData } from "@/app/utils/products.helper";
import { getAllProductsByHandle } from "@/app/utils/queries";

const page = async () => {
  const handle = "faux-filet-wagyu-a5-kagoshima";
  const variables = { handle };

  const json = await fetchGraphQLData(getAllProductsByHandle, variables);
  const { data } = json;
  const { productByHandle: product } = data;

  return (
    <div className="bg-background-primary ">
      <div className="container mx-auto px-6">
        <ProductHero product={product} />
        <Products />
        <div className="border-t border-gold py-10 flex items-center justify-center">
          <div className="p-8 lg:p-16 border border-border-primary  text-white  rounded-3xl w-full lg:w-[720px]  flex flex-col justify-center items-start">
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
