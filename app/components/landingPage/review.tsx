import React from "react";

import ReviewCard from "../common/cards/ReviewCard";

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  profileColor: string;
}

const reviews: Review[] = [
  {
    name: "Antoine P.",
    date: "1 week ago",
    rating: 5,
    text: "Super reactive - Appreciate the efficiency in handling orders - Prime meat as always.",
    profileColor: "bg-green-500",
  },
  {
    name: "Lisa S.",
    date: "2 days ago",
    rating: 4,
    text: "Great service and very fresh meat, though delivery could be faster.",
    profileColor: "bg-red-500",
  },
  {
    name: "Mark R.",
    date: "3 weeks ago",
    rating: 5,
    text: "The best meat delivery service I have ever tried!",
    profileColor: "bg-blue-500",
  },
  {
    name: "Sophia K.",
    date: "5 days ago",
    rating: 4,
    text: "Quality is great. Customer service was also very helpful.",
    profileColor: "bg-yellow-500",
  },
  {
    name: "John D.",
    date: "1 month ago",
    rating: 5,
    text: "Highly recommend! Always fresh and quick.",
    profileColor: "bg-purple-500",
  },
  {
    name: "Emily W.",
    date: "1 week ago",
    rating: 5,
    text: "Amazing quality and excellent delivery service.",
    profileColor: "bg-pink-500",
  },
];

const Reviews: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl text-white border-b border-gold pb-16 font-urbanist">
        Affichage de 16 sur 16 produits
      </h2>
      <div className=" flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
