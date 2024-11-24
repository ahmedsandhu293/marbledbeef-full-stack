"use client";

// Custome Component
import Cardsompoent from "../common/cards/Cards";

// Types
import { ProductsType } from "@/types/products";

// Constants
import { dummyData } from "@/app/utils/constants";
import Carousel from "../common/carousel";
import CardCompoent from "../common/cards/CardCompoent";
import HorizentalCarousel from "../common/carousel";
import CategoriesHeading from "../common/headings/categoriesHeading";

const Products = () => {
  const handleAddToCart = (item: ProductsType) => {
    console.log("Added to cart:", item);
  };

  const handleAddToFavorite = (item: ProductsType) => {
    console.log("Added to favorite:", item);
  };

  const handleClick = (item: ProductsType) => {
    console.log("Card clicked:", item);
  };

  return (
    <div className="w-full space-y-4 md:space-y-8">
      <div>
        <CategoriesHeading
          title="Sélection d'excellence"
          onClick={() => {
            console.log("Explore all");
          }}
        />
        <HorizentalCarousel autoPlaySpeed={4000} infinite={true}>
          {dummyData.map((item, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardCompoent
                data={item}
                onAddToCart={handleAddToCart}
                onAddToFavorite={handleAddToFavorite}
                onClick={handleClick}
              />
            </div>
          ))}
        </HorizentalCarousel>
      </div>
      <div>
        <CategoriesHeading
          title="Sélection d'excellence"
          onClick={() => {
            console.log("Explore all");
          }}
        />
        <HorizentalCarousel autoPlaySpeed={4000} infinite={true}>
          {dummyData.map((item, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardCompoent
                data={item}
                onAddToCart={handleAddToCart}
                onAddToFavorite={handleAddToFavorite}
                onClick={handleClick}
              />
            </div>
          ))}
        </HorizentalCarousel>
      </div>
      <div>
        <CategoriesHeading
          title="Sélection d'excellence"
          onClick={() => {
            console.log("Explore all");
          }}
        />
        <HorizentalCarousel autoPlaySpeed={4000} infinite={true}>
          {dummyData.map((item, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardCompoent
                data={item}
                onAddToCart={handleAddToCart}
                onAddToFavorite={handleAddToFavorite}
                onClick={handleClick}
              />
            </div>
          ))}
        </HorizentalCarousel>
      </div>
    </div>
  );
};

export default Products;
