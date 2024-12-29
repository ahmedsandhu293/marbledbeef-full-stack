"use client";
import React from "react";
import { useRouter } from "next/navigation";

import CategoriesCard from "./categoiesCard";

const Category = ({ data }: { data: any }) => {
  const categories = data.data.collections.edges;
  const { push } = useRouter();

  const handleNavigate = (category: any) => {
    push(`/categories/${category?.node?.handle}`);
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-black gap-4 p-4">
      {categories.map((category: any, index: number) => (
        <div key={index} className="p-2 text-center">
          <CategoriesCard
            data={category?.node}
            onClick={() => handleNavigate(category)}
          />
        </div>
      ))}
    </div>
  );
};

export default Category;
