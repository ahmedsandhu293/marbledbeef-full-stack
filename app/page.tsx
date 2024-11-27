import { getProducts } from "./utils/products.helper";
import Products from "./components/landingPage/products";
import Hero from "./components/landingPage/hero";
import InfoCards from "./components/landingPage/infoCards";
import CategoryCrads from "./components/landingPage/CategoryCrads";

export default async function Home() {
  const json = await getProducts();
  const { data } = json;
  const { products } = data;
  const { nodes: productsData } = products;

  /* eslint-disable no-console */
  console.log("🚀 ~ Home ~ json:", productsData);

  return (
    <>
      <Hero />
      <section className="container mx-auto w-full flex flex-col items-center justify-center px-4 gap-4 py-8 md:py-10">
        <CategoryCrads />
        <InfoCards />
        <Products />
      </section>
      <div className="border-t border-border-primary py-10 flex items-center justify-center">
        <div className="p-8 lg:p-16  bg-black text-white border border-border-primary rounded-3xl w-full lg:w-[720px]  flex flex-col justify-center items-start">
          <h3 className="text-xl md:text-3xl font-bold text-center">
            Bénéficiez d{"'"}offres exclusives, accédez à des promotions et bien
            plus encore !
          </h3>
          <p className="text-sm md:text-lg text-gray-400 mt-2 text-center">
            Profitez de 10% de réduction sur votre première commande !
          </p>
        </div>
      </div>
    </>
  );
}
