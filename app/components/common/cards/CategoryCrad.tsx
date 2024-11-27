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
      shadow="sm"
      className="w-full  bg-transparent"
      onClick={onClick}
    >
      <CardBody className="p-0">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </CardBody>
      <div className="p-2 text-center text-white text-lg font-semibold">
        {title}
      </div>
    </Card>
  );
};

export default CategoryCard;
