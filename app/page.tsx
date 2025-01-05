import { fetchGraphQLData } from "./utils/products.helper";
import Products from "./components/landingPage/products";
import Hero from "./components/landingPage/hero";
import Reviews from "./components/landingPage/review";
import { getFirstThreeCollectionsQuery } from "./utils/queries";
import CategoryCards from "./components/landingPage/CategoryCrads";

import { CollectionsResponse } from "@/types/collection";
import CardSection from "./components/landingPage/Card";

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
      <CardSection />
    </div>
  );
}
