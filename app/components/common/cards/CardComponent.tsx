"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FiHeart } from "react-icons/fi";

import ComponentButton from "../buttons/ButtonComponent";

import { CardProps } from "@/types/products";

const CardComponent: React.FC<CardProps> = ({
  data,
  onAddToCart,
  onAddToFavorite,
  onClick,
}) => {
  return (
    <>
      <Card
        isPressable
        className="w-full bg-transparent"
        shadow="none"
        onClick={() => {
          onClick(data);
        }}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            alt={data.title}
            className="w-full object-cover h-[200px]"
            radius="lg"
            shadow="sm"
            src={data.img}
            width="100%"
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <b className="truncate text-white">{data.title}</b>
            <p className="text-default-500">{data.price}</p>
          </div>

          <div className="flex justify-between items-center w-full gap-4">
            <ComponentButton
              className="!w-full !bg-red-primary"
              label="Add to cart"
              onClick={() => onAddToCart(data)}
            />
            <FiHeart
              className="text-gray-500 hover:text-red-primary cursor-pointer"
              size={28}
              onClick={(e) => {
                e.stopPropagation();
                onAddToFavorite(data);
              }}
            />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComponent;
