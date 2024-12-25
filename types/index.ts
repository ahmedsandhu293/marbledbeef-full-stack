import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ShopifyExtension = {
  cost: {
    actualQueryCost: number;
    requestedQueryCost: number;
    throttleStatus: {
      currentlyAvailable: number;
      maximumAvailable: number;
      restoreRate: number;
    };
  };
};

export type GraphQLResponse = {
  data: {
    products: {
      nodes: Product[];
    };
  };
  extensions: ShopifyExtension;
};

export interface ProductImage {
  node: {
    id: string;
    altText: string | null;
    originalSrc: string;
  };
}

export interface Variant {
  node: {
    id: string;
    title: string;
    price: string;
    sku: string;
  };
}

export interface Product {
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
}
