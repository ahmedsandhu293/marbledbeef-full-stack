import { gql } from "./gql";

export const getFirstThreeCollectionsQuery = gql`
  query CollectionsQuery {
    collections(first: 3) {
      edges {
        node {
          id
          title
          description
          handle
          image {
            id
            originalSrc
            altText
          }
          products(first: 20) {
            edges {
              node {
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
        }
      }
    }
  }
`;

export const getAllCollectionsQuery = gql`
  query CollectionsQuery {
    collections(first: 250) {
      edges {
        node {
          id
          title
          description
          handle
          image {
            id
            originalSrc
            altText
          }
          products(first: 1) {
            edges {
              node {
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
        }
      }
    }
  }
`;

export const getCollectionByHandleQuery = gql`
  query GetCollectionByHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      id
      title
      description
      handle
      image {
        id
        originalSrc
        altText
      }
      products(first: 250) {
        edges {
          node {
            id
            title
            handle
            description
            tags
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
                  sku
                  barcode
                }
              }
            }
            images(first: 250) {
              edges {
                node {
                  id
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`;

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
            handle
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
