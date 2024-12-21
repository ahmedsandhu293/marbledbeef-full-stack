import { gql } from "./gql";

import { GraphQLResponse } from "@/types";

export const getProducts = async (): Promise<GraphQLResponse> => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query: gql`
        query ProductsQuery {
          products(first: 250) {
            nodes {
              id
              tags
              title
              description
              handle
              priceRangeV2 {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price
                    compareAtPrice
                    barcode
                    sku
                  }
                }
              }
              category {
                id
                name
              }
              collections(first: 250) {
                edges {
                  node {
                    id
                    title
                  }
                }
              }
              images(first: 250) {
                edges {
                  node {
                    id
                    originalSrc
                  }
                }
              }
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
