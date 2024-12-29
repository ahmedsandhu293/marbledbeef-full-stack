"use client";

import React from "react";

import HorizontalCarousel from "../common/carousel";

import Category from "./index";

const HorizentalCarouselCategory = ({
  collectionsData,
}: {
  collectionsData: any;
}) => {
  return (
    <HorizontalCarousel infinite autoPlaySpeed={2000}>
      <Category data={collectionsData} />
    </HorizontalCarousel>
  );
};

export default HorizentalCarouselCategory;
