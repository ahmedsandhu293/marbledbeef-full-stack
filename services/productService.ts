"use server";

export async function searchProducts(query: string) {
  if (!query) return [];

  const storefrontApiUrl =
    "https://marbredbeeffr.myshopify.com/api/2025-01/graphql.json";
  const storefrontAccessToken = "17e4a868a5e8bf2abb094eca5ea0f29f";

  const graphqlQuery = {
    query: `{
            products(first: 10, query: "title:${query}") {
                edges {
                    node {
                        id
                        title
                        handle
                        images(first: 1) {
                            edges {
                                node {
                                    url
                                    altText
                                }
                            }
                        }
                    }
                }
            }
        }`,
  };

  const response = await fetch(storefrontApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify(graphqlQuery),
  });

  if (!response.ok) throw new Error("Failed to fetch products");

  const result = await response.json();
  return result.data.products.edges.map((edge: any) => edge.node);
}
