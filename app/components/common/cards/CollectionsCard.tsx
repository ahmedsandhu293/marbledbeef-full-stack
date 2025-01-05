"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import ComponentButton from "../buttons/ButtonComponent";

import { CollectionProduct } from "@/types/collection";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/store";

const CollectionCard = ({
  data,
  onAddToCart,
  onAddToFavorite,
  onClick,
  buttonLabel,
}: {
  data: CollectionProduct;
  buttonLabel?: string;
  onAddToCart: (item: CollectionProduct) => void;
  onAddToFavorite: (item: CollectionProduct) => void;
  onClick: (item: CollectionProduct) => void;
}) => {
  const { favorites } = useGlobalContext();

  const isFavorite = favorites.some(
    (item) => item?.node?.id === data?.node?.id
  );

  return (
    <>
      <Link href={`/${data?.node?.handle}`}>
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
              alt={data.node.title}
              className="w-full object-cover h-[200px] border-2 border-gold"
              radius="lg"
              shadow="sm"
              src={
                data?.node?.images?.edges[0]
                  ? data?.node?.images.edges[0].node.originalSrc
                  : "./assets/images/no_image.webp"
              }
              width="100%"
            />
          </CardBody>
          <CardFooter className="flex flex-col gap-2">
            <div className="flex justify-between w-full">
              <b className="truncate text-text-gold font-urbanist">
                {data?.node.title}
              </b>
              <p className="text-default-500 text-text-gold font-urbanist">
                €{data?.node.variants?.edges[0].node.price}
              </p>
            </div>
          </CardFooter>
        </Card>
      </Link>
      <div className="flex justify-between items-center w-full gap-4">
        <ComponentButton
          className="!w-full  !bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300 "
          label={buttonLabel ? buttonLabel : "Ajouter au panier"}
          onClick={() => onAddToCart(data)}
        />

        {isFavorite ? (
          <FaHeart
            className=" cursor-pointer"
            color="#d4af37"
            size={28}
            onClick={(e) => {
              e.stopPropagation();
              onAddToFavorite(data);
            }}
          />
        ) : (
          <FaRegHeart
            className="text-text-gold cursor-pointer"
            size={28}
            onClick={(e) => {
              e.stopPropagation();
              onAddToFavorite(data);
            }}
          />
        )}
      </div>
    </>
  );
};

export default CollectionCard;
