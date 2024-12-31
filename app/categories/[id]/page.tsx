import Hero from "@/app/components/categories/hero";
import Products from "@/app/components/categories/products";
import { fetchGraphQLData } from "@/app/utils/products.helper";
import { getCollectionByHandleQuery } from "@/app/utils/queries";

export default async function Home({ params }: { params: { id: string } }) {
  const handle = params.id;
  const variables = { handle };

  const data = await fetchGraphQLData<any>(
    getCollectionByHandleQuery,
    variables
  );

  return (
    <div className="bg-background-primary">
      <Hero data={data.data.collectionByHandle} />

      {/* <HorizentalCarouselCategory collectionsData={collectionsData} /> */}

      <section className="container mx-auto w-full flex flex-col items-center justify-center md:px-4 gap-4 py-8 md:py-10">
        <Products collection={data} />
      </section>
    </div>
  );
}
