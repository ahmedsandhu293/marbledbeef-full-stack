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
    console.log(`Clicked on ${title}`);
  };
  return (
    <div className="flex items-start flex-col gap-4">
      <CategoriesHeading
        title="Categories"
        onClick={() => {
          console.log("Explore all");
        }}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            image={category.image}
            onClick={() => handleCardClick(category.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCrads;
