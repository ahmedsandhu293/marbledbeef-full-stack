import { ProductImage, Variant } from "./index";

export interface CollectionImage {
  id: string;
  originalSrc: string;
  altText: string | null;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  handle: string;
  image: CollectionImage | null;
  products: {
    edges: CollectionProduct[];
  };
}

export interface CollectionsResponse {
  data: {
    collections: {
      edges: {
        node: Collection;
      }[];
    };
  };
}

export interface CollectionProduct {
  node: {
    id: string;
    tags: string[];
    title: string;
    description: string;
    handle: string;
    priceRangeV2: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    variants: {
      edges: Variant[];
    };
    category: string | null;
    collections: {
      edges: {
        node: {
          id: string;
          title: string;
        };
      }[];
    };
    images: {
      edges: ProductImage[];
    };
  };
}
