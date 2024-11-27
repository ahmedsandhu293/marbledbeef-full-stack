"use client";

import React from "react";

import CategoryCard from "../common/cards/CategoryCrad";
import CategoriesHeading from "../common/headings/categoriesHeading";

const CategoryCrads = () => {
  const categories = [
    {
      title: "Kobe Beef",
      image: "https://via.placeholder.com/600",
    },
    {
      title: "Wagyu Beef",
      image: "https://via.placeholder.com/600",
    },
    {
      title: "Wagyu Beef Fillet",
      image: "https://via.placeholder.com/600",
    },
  ];

  const handleCardClick = (title: string) => {
    /* eslint-disable no-console */
    console.log("🚀 ~ handleCardClick ~ title:", title);
  };

  return (
    <div className="flex items-start flex-col gap-4">
      <CategoriesHeading title="Categories" onClick={() => {}} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            onClick={() => handleCardClick(category.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCrads;
