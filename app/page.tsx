import { Button } from "@nextui-org/button";
import { gql } from "./utils/gql";
import { ShopifyExtension, ShopifyProduct } from "@/types";

type GraphQLResponse = {
  data: {
    products: {
      nodes: ShopifyProduct[];
    };
  };
  extensions: ShopifyExtension;
};

const getProducts = async (): Promise<GraphQLResponse> => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query: gql`
        query ProductsQuery {
          products(first: 6) {
            nodes {
              description
              featuredImage {
                altText
                height
                id
                url
                width
              }
              handle
              priceRangeV2 {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              tags
              title
            }
          }
        }
      `,
    }),
  });

  if (!res.ok) {
    const text = await res.text();

    throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
  }

  return res.json();
};

export default async function Home() {
  const json = await getProducts();
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1>MarbledBeef</h1>

      <Button>Shop Now</Button>

      <ul>
        {json.data.products.nodes.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </section>
  );
}
