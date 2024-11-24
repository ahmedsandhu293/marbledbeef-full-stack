"use client";


// Custome Component
import Cardsompoent from "../common/cards/Cards";

// Types
import { ProductsType } from "@/types/products";

// Constants
import { dummyData } from "@/app/utils/constants";

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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            <Cardsompoent
                data={dummyData}
                onAddToCart={handleAddToCart}
                onAddToFavorite={handleAddToFavorite}
                onClick={handleClick}
            />
        </div>
    );
};

export default Products;
