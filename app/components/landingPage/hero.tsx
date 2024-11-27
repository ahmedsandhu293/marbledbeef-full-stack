"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

// { onSearch }: { onSearch: (query: string) => void }

const Hero = () => {
  const onSearch = (query: string) => {
    /* eslint-disable no-console */
    console.log("🚀 ~ onSearch ~ query:", query);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/images/hero-background.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white">
        <div className="flex flex-col justify-center items-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
            MarbledBeef
          </h1>
          <p className="text-base sm:text-xl md:text-3xl mb-6">
            Viandes d{"'"}Excellence an un cic a votre porte
          </p>
          <div className="relative w-full sm:w-80 md:w-96 mt-10 lg:mt-20">
            <input
              className="p-3 w-full text-lg rounded-md pl-10 backdrop-blur-lg bg-opacity-10 transition-colors"
              placeholder="Type something..."
              type="text"
              onChange={(e) => onSearch(e.target.value)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <IoSearchOutline className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
