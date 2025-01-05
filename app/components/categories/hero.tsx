"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Hero = ({ data }: { data: any }) => {
  const onSearch = (query: string) => {
    /* eslint-disable no-console */
    console.log("🚀 ~ onSearch ~ query:", query);
  };

  return (
    <div className="">
      <div
        className="relative w-full h-[80vh] bg-cover bg-center "
        style={{ backgroundImage: `url(${data.image.originalSrc})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white">
          <div className="flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 font-urbanist">
              {data.title}
            </h1>

            <div className="relative w-full sm:w-80 md:w-96 mt-10 lg:mt-20">
              <input
                className="p-3 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
                placeholder="Recherche"
                type="text"
                onChange={(e) => onSearch(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <IoSearchOutline className="h-5 w-5 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
