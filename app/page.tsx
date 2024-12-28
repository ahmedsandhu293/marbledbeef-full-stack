import { fetchGraphQLData } from "./utils/products.helper";
import Products from "./components/landingPage/products";
import Hero from "./components/landingPage/hero";
import Reviews from "./components/landingPage/review";
import { getFirstThreeCollectionsQuery } from "./utils/queries";
import CategoryCards from "./components/landingPage/CategoryCrads";
import { CollectionsResponse } from "@/types/collection";

export default async function Home() {
  let collectionsData: CollectionsResponse | null = null;

  try {
    collectionsData = await fetchGraphQLData<CollectionsResponse>(
      getFirstThreeCollectionsQuery
    );
  } catch (error) {
    console.error("Error fetching collections data:", error);
  }

  return (
    <div className="bg-background-primary">
      <Hero />
      <section className="container mx-auto w-full flex flex-col items-center justify-center px-4 gap-4 py-8 md:py-10">
        {collectionsData?.data?.collections ? (
          <>
            <CategoryCards collections={collectionsData} />
            <Products collections={collectionsData} />
          </>
        ) : (
          <div className="text-center text-white">
            <p>Failed to load collections. Please try again later.</p>
          </div>
        )}
        <Reviews />
      </section>
      <div className="container mx-auto px-4 grid grid-cols-3 w-[90%]  p-8 lg:p-16 bg-gradient-secondary border border-gold rounded-3xl">
        <div className="col-span-3 md:col-span-2  text-white  w-full  flex flex-col justify-center items-center">
          <h3 className="text-xl md:text-3xl font-bold text-center">
            Bénéficiez d{"'"}offres exclusives, accédez à des promotions et bien
            plus encore !
          </h3>
          <p className="text-sm md:text-lg text-gray-400 mt-2 text-center">
            Profitez de 10% de réduction sur votre première commande !
          </p>
        </div>

        <div className="col-span-3 md:col-span-1">
          <div className="flex mt-4 w-full gap-2 flex-col lg:flex-row">
            <input
              className="w-full md:w-auto flex bg-black border border-gold rounded-lg p-2 text-text-primary focus:outline-none"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-gradient-primary text-background-primary rounded-lg px-4 py-2">
              Subscribe
            </button>
          </div>
          <p className="text-white pt-2">
            En vous inscrivant à notre newsletter, vous acceptez nos Conditions
            dutilisation et notre Politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}
