import { gql } from "./gql";

export const getAllProductsQuery = gql`
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
`;

export const getAllProductsByHandle = gql`
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
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
`;
