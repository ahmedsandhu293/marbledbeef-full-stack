import React from "react";
import ComponentButton from "../components/common/buttons/ButtonComponent";
import CardsComponent from "../components/common/cards/Cards";
import CardComponent from "../components/common/cards/CardComponent";
import { fetchGraphQLData } from "../utils/products.helper";
import { getAllProductsQuery } from "../utils/queries";
import { Product } from "@/types";
import BoxBuilder from "../components/common/boxBuilder/BoxBuilder";

export default async function BoxBuilderPage() {
  const json = await fetchGraphQLData(getAllProductsQuery);
  const { data } = json;
  const { products } = data;

  const { nodes: productsData } = products;

  return <BoxBuilder data={productsData} />;
}
