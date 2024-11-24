import { getProducts } from "./utils/products.helper";

// Custom Component
import Products from "./components/landingPage/products";
import Hero from "./components/landingPage/hero";

export default async function Home() {
  const json = await getProducts();
  const { data } = json;
  const { products } = data;
  const { nodes: productsData } = products;

  console.log("🚀 ~ Home ~ json:", productsData);

  return (
    <>
      <Hero />
      <section className="container mx-auto w-full px-6 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Products />
      </section>
    </>
  );
}
