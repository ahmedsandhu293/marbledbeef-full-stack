"use client";

import React from "react";
import { useRouter } from "next/navigation";

import CategoryCard from "../common/cards/CategoryCrad";
import CategoriesHeading from "../common/headings/categoriesHeading";

import { CollectionsResponse } from "@/types/collection";
import Link from "next/link";

const CategoryCards = ({
  collections,
}: {
  collections: CollectionsResponse;
}) => {
  const data = collections.data.collections.edges;

  return (
    <div className="flex items-start flex-col gap-4">
      <Link href="/categories">
        <CategoriesHeading title="Catégories" onClick={() => {}} />
      </Link>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data?.map((category: any, index: number) => (
          <Link
            key={index}
            href={`/categories/${category.node.handle}`}
            passHref
          >
            <CategoryCard
              key={index}
              image={category.node.image?.originalSrc}
              title={category.node.title}
              onClick={() => {}}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
