"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const CategoriesCard = ({
  onClick,
  data,
}: {
  onClick: (data: any) => void;
  data: any;
}) => {
  return (
    <>
      <Card
        isPressable
        className="w-full bg-black text-white "
        shadow="none"
        onClick={() => {
          onClick(data);
        }}
      >
        <CardBody className="overflow-visible p-0 border-2 border-gold rounded-2xl">
          <Image
            alt="asd"
            className="w-full object-cover h-[200px] "
            radius="lg"
            shadow="sm"
            src={data.image ? data.image.originalSrc : ""}
            width="100%"
          />
        </CardBody>
        <CardFooter className="flex flex-col gap-2 text-left">
          {data.title}
        </CardFooter>
      </Card>
    </>
  );
};

export default CategoriesCard;
