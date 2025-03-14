import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CategoriesHeading = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex gap-2 md:gap-4 justify-start items-center px-2 font-urbanist">
      <h2 className="text-base md:text-xl font-semibold py-4 text-text-primary font-urbanist">
        {title}
      </h2>
      <button
        className="text-text-tertiary flex gap-2 text-base md:text-xl font-semibold font-urbanist"
        onClick={onClick}
      >
        Explorez tout <IoIosArrowForward className="mt-0.5" />
      </button>
    </div>
  );
};

export default CategoriesHeading;
