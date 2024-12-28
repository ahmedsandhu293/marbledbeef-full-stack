"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CardProps } from "@/types/products";

const BlogCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <Card
        isPressable
        className="w-full bg-[#1A1A1A] text-white border-2 border-gold"
        shadow="none"
        onClick={() => {
          onClick();
        }}
      >
        <CardBody className="overflow-visible p-0 ">
          <Image
            alt="asd"
            className="w-full object-cover h-[200px] "
            radius="lg"
            shadow="sm"
            src="https://via.placeholder.com/200"
            width="100%"
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci
          maxime labore inventore .
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogCard;
