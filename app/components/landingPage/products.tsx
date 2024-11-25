"use client";

// Custome Component

// Types
import { ProductsType } from "@/types/products";

// Constants
import { dummyData } from "@/app/utils/constants";
import HorizontalCarousel from "../common/carousel";
import CategoriesHeading from "../common/headings/categoriesHeading";
import CardComponent from "../common/cards/CardComponent";

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
      <div className="w-full">
        <CategoriesHeading
          title="Sélection d'excellence"
          onClick={() => {
            console.log("Explore all");
          }}
        />
        <HorizontalCarousel autoPlaySpeed={4000} infinite={true}>
          {dummyData.map((item, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardComponent
                data={item}
                onAddToCart={handleAddToCart}
                onAddToFavorite={handleAddToFavorite}
                onClick={handleClick}
              />
            </div>
          ))}
        </HorizontalCarousel>
      </div>
      <div>
        <CategoriesHeading
          title="Sélection d'excellence"
          onClick={() => {
            console.log("Explore all");
          }}
        />
        <HorizontalCarousel autoPlaySpeed={4000} infinite={true}>
          {dummyData.map((item, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardComponent
                data={item}
                onAddToCart={handleAddToCart}
                onAddToFavorite={handleAddToFavorite}
                onClick={handleClick}
              />
            </div>
          ))}
        </HorizontalCarousel>
      </div>
      <div>
        <CategoriesHeading
          title="Sélection d'excellence"
          onClick={() => {
            console.log("Explore all");
          }}
        />
        <HorizontalCarousel autoPlaySpeed={4000} infinite={true}>
          {dummyData.map((item, index) => (
            <div key={index} style={{ padding: "10px", textAlign: "center" }}>
              <CardComponent
                data={item}
                onAddToCart={handleAddToCart}
                onAddToFavorite={handleAddToFavorite}
                onClick={handleClick}
              />
            </div>
          ))}
        </HorizontalCarousel>
      </div>
    </div>
  );
};

export default Products;
