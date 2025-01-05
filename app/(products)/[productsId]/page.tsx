import React from "react";

import ProductHero from "@/app/components/productDetails/hero";
import Products from "@/app/components/categories/products";
import { fetchGraphQLData } from "@/app/utils/products.helper";
import {
  getAllProductsByHandle,
  getCollectionByHandleQuery,
} from "@/app/utils/queries";
import Image from "next/image";

const page = async ({ params }: { params: { productsId: string } }) => {
  const handle = params?.productsId;

  const variables = { handle };

  const json = await fetchGraphQLData<any>(getAllProductsByHandle, variables);
  const { data } = json;
  const { productByHandle: product } = data;

  const collection = product.collections.edges[0].node.handle;

  const products = await fetchGraphQLData<any>(getCollectionByHandleQuery, {
    handle: collection,
  });

  return (
    <div className="bg-background-primary ">
      <div className="container mx-auto px-6">
        <ProductHero product={product} />
        <Products collection={products} />
        <div className="flex flex-col items-center space-x-4 py-4">
          <Image
            alt="Logo"
            height={100}
            src="/assets/images/payments-icons.png"
            width={382}
            className="w-auto h-auto"
          />
          <p className="text-white text-lg font-urbanist text-center">
            Paiements sécurisés et protégés à 100%
          </p>
        </div>
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
