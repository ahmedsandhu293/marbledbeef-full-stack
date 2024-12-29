import React from "react";
import { CollectionsResponse } from "@/types/collection";
import { getAllCollectionsQuery } from "../utils/queries";
import { fetchGraphQLData } from "../utils/products.helper";
import Category from "../components/categories";

const Page = async () => {
  let collectionsData: CollectionsResponse | null = null;

  try {
    collectionsData = await fetchGraphQLData<CollectionsResponse>(
      getAllCollectionsQuery
    );
  } catch (error) {
    console.error("Error fetching collections data:", error);
  }

  return (
    <div className="bg-black  ">
      <h1 className="text-2xl text-white px-6 pt-6">Catégories</h1>
      <Category data={collectionsData} />
    </div>
  );
};

export default Page;
