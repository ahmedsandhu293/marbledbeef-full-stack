"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FiHeart } from "react-icons/fi";

import ComponentButton from "../buttons/ButtonComponent";

import { CardsProps } from "@/types/products";

const CardsComponent: React.FC<CardsProps> = ({
  data,
  onAddToCart,
  onAddToFavorite,
  onClick,
}) => {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="none"
          onClick={() => {
            onClick(item);
          }}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-contain h-[200px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="flex flex-col gap-2">
            <div className="flex justify-between w-full">
              <b className="truncate font-urbanist">{item.title}</b>
              <p className="text-default-500 font-urbanist">€{item.price}</p>
            </div>

            <div className="flex justify-between items-center w-full gap-4">
              <ComponentButton
                className="!w-full !bg-red-primary"
                label="Add to cart"
                onClick={() => onAddToCart(item)}
              />
              <FiHeart
                className="text-gray-500 hover:text-red-primary cursor-pointer"
                size={28}
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToFavorite(item);
                }}
              />
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardsComponent;
