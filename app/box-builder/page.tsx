import React from "react";
import { fetchGraphQLData } from "../utils/products.helper";
import { getAllProductsQuery } from "../utils/queries";
import BoxBuilder from "../components/common/boxBuilder/BoxBuilder";
import { GraphQLResponse } from "@/types";

export default async function BoxBuilderPage() {
  const json = await fetchGraphQLData<GraphQLResponse>(getAllProductsQuery);
  const { data } = json;
  const { products } = data;

  const { nodes: productsData } = products;

  return <BoxBuilder data={productsData} />;
}
