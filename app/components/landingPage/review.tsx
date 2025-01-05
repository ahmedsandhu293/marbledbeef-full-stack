import React from "react";

import ReviewCard from "../common/cards/ReviewCard";
import Image from "next/image";

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
    date: "il y a 1 semaine",
    rating: 5,
    text: "Super réactif - Apprécie l'efficacité dans la gestion des commandes - Viande de qualité comme toujours.",
    profileColor: "bg-green-500",
  },
  {
    name: "Lisa S.",
    date: "il y a 2 jours",
    rating: 4,
    text: "Excellent service et viande très fraîche, bien que la livraison pourrait être plus rapide.",
    profileColor: "bg-red-500",
  },
  {
    name: "Mark R.",
    date: "il y a 3 semaines",
    rating: 5,
    text: "Le meilleur service de livraison de viande que j'ai jamais essayé !",
    profileColor: "bg-blue-500",
  },
  {
    name: "Sophia K.",
    date: "il y a 5 jours",
    rating: 4,
    text: "La qualité est excellente. Le service client était également très utile.",
    profileColor: "bg-yellow-500",
  },
  {
    name: "John D.",
    date: "il y a 1 mois",
    rating: 5,
    text: "Je recommande vivement ! Toujours frais et rapide.",
    profileColor: "bg-purple-500",
  },
  {
    name: "Emily W.",
    date: "il y a 1 semaine",
    rating: 5,
    text: "Qualité incroyable et excellent service de livraison.",
    profileColor: "bg-pink-500",
  },
];

const Reviews: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl text-white border-b border-gold pb-16 font-urbanist">
        Affichage de 16 sur 16 produits
      </h2>
      <div className="bg-gradient-secondary text-white border border-gold rounded-2xl p-4 shadow-md">
        {/* Profile and Name */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-10 h-10  text-center rounded-full flex items-center justify-center`}
          >
            <Image
              alt="logo"
              className="w-full h-full rounded-full"
              height={50}
              src="/assets/images/logo.png"
              width={50}
            />
          </div>
          <div>
            <h4 className="font-semibold text-base font-urbanist">
              Marbled Beef
            </h4>
            <div className="flex justify-center items-center gap-2">
              <p className="text-yellow-400 text-sm">4.8</p>
              <div className="flex gap-1 ">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg
                  text-yellow-400
                `}
                    >
                      ★
                    </span>
                  ))}
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-urbanist">
              318 avis
            </p>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center  md:p-4">
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
