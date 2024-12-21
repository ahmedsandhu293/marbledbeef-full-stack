"use client";

import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

interface CategoryCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  onClick,
}) => {
  return (
    <Card
      isPressable
      className="w-full  bg-transparent"
      shadow="sm"
      onClick={onClick}
    >
      <CardBody className="p-0">
        <Image
          alt={title}
          className="w-full h-full object-cover rounded-lg font-urbanist"
          src={image}
        />
      </CardBody>
      <div className="p-2 text-center text-white text-lg font-semibold font-urbanist">
        {title}
      </div>
    </Card>
  );
};

export default CategoryCard;
