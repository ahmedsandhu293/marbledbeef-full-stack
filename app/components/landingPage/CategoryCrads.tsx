"use client";

import React from "react";

import CategoryCard from "../common/cards/CategoryCrad";
import CategoriesHeading from "../common/headings/categoriesHeading";
import { CollectionsResponse } from "@/types/collection";

const CategoryCards = ({
  collections,
}: {
  collections: CollectionsResponse;
}) => {
  const data = collections.data.collections.edges;

  const handleCardClick = (title: string) => {
    /* eslint-disable no-console */
    console.log("🚀 ~ handleCardClick ~ title:", title);
  };

  return (
    <div className="flex items-start flex-col gap-4">
      <CategoriesHeading title="Categories" onClick={() => {}} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data?.map((category: any, index: number) => (
          <CategoryCard
            key={index}
            image={category.node.image?.originalSrc}
            title={category.node.title}
            onClick={() => handleCardClick(category.node.handle)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
