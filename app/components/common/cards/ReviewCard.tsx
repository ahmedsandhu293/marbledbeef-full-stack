import React from "react";

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  profileColor: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-gradient-secondary text-white border border-gold rounded-2xl p-4 shadow-md">
      {/* Profile and Name */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 ${review.profileColor} text-center rounded-full flex items-center justify-center`}
        >
          <span className="text-lg font-bold text-black">
            {review.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-base">{review.name}</h4>
          <p className="text-sm text-gray-400">{review.date}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className={`text-lg ${index < review.rating ? "text-yellow-400" : "text-gray-600"
                }`}
            >
              ★
            </span>
          ))}
      </div>

      {/* Review Text */}
      <div className="flex flex-col gap-10">
        <p className="text-sm text-gray-300 leading-relaxed">{review.text}</p>
        <p className="text-sm text-gray-300 leading-relaxed">il y a 1 mois</p>
      </div>
    </div>
  );
};

export default ReviewCard;
