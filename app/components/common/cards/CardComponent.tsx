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
  buttonLabel,
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
        <CardBody className="overflow-visible p-0 ">
          <Image
            alt={data.title}
            className="w-full object-cover h-[200px] border-2 border-gold"
            radius="lg"
            shadow="sm"
            src={
              data?.images?.edges[0] ? data?.images.edges[0].node.originalSrc : data.img
            }
            width="100%"
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2">
          <div className="flex justify-between w-full">
            <b className="truncate text-text-gold font-urbanist">
              {data.title}
            </b>
            <p className="text-default-500 text-text-gold font-urbanist">
              {data.variants?.edges[0].node.price}
            </p>
          </div>
        </CardFooter>
      </Card>
      <div className="flex justify-between items-center w-full gap-4">
        <ComponentButton
          className="!w-full  !bg-gradient-primary"
          label={buttonLabel ? buttonLabel : "Add to cart"}
          onClick={() => onAddToCart(data)}
        />
        <FiHeart
          className="text-text-gold cursor-pointer"
          size={28}
          onClick={(e) => {
            e.stopPropagation();
            onAddToFavorite(data);
          }}
        />
      </div>
    </>
  );
};

export default CardComponent;
