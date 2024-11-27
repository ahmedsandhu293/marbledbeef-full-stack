import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface HorizontalCarouselProps {
  children: ReactNode;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  infinite?: boolean;
  showDots?: boolean;
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  children,
  autoPlay = true,
  autoPlaySpeed = 3000,
  infinite = true,
  showDots = false,
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        containerClass="carousel-container"
        infinite={infinite}
        itemClass="carousel-item-padding-40-px"
        keyBoardControl={true}
        responsive={responsive}
        showDots={showDots}
        arrows={false}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default HorizontalCarousel;
