"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

// { onSearch }: { onSearch: (query: string) => void }

const Hero = () => {
  const onSearch = (query: string) => {
    /* eslint-disable no-console */
    console.log("🚀 ~ onSearch ~ query:", query);
  };

  return (
    <div className="mb-[580px] md:mb-[380px] lg:mb-[280px]">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/hero-background.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex justify-center items-center w-full h-full text-center text-white">
          <div className="flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 font-urbanist">
              MarbledBeef
            </h1>
            <p className="text-base sm:text-xl md:text-3xl mb-6 font-urbanist">
              Viandes d{"'"}Excellence an un cic a votre porte
            </p>
            <div className="relative w-full sm:w-80 md:w-96 mt-10 lg:mt-20">
              <input
                className="p-3 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
                placeholder="Search"
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
      <div className="relative flex justify-center items-center">
        <div className="absolute bottom-[-620px] md:bottom-[-420px] lg:bottom-[-320px] z-20 flex flex-col md:flex-row w-[90%] border border-gold rounded-xl shadow-lg">
          {/* Video Section */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover rounded-l-xl"
              src="/assets/video/beef.mp4"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center bg-black text-white p-8 md:w-1/2 rounded-r-xl font-urbanist">
            <h4 className="text-lg pb-8 font-medium uppercase  ">About Us</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              We Provide <br />
              Best Meat
            </h2>
            <p className=" mb-6">
              Nous fournissons de la viande fraîche et biologique bien façonnée
              de notre ferme de manière très ingénieuse.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className=" rounded-full p-1">
                  <FaCheck />
                </span>{" "}
                Organic Meat
              </li>
              <li className="flex items-center gap-2">
                <span className=" rounded-full p-1">
                  <FaCheck />
                </span>{" "}
                Payment Securisation
              </li>
            </ul>
            <div>
              <Button className="bg-gold text-black px-10">View More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
