"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbSpeakerphone } from "react-icons/tb";

import ComponentButton from "../buttons/ButtonComponent";

const PromoNotification: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const promoMessages: string[] = [
    "Livraison gratuite dès 99,00 € Offre à durée limitée",
    "Fraîcheur garantie • Possibilité de congeler",
    "Nouvelle version en approche : toujours plus d'excellence !",
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promoMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [promoMessages.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentIndex * containerRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div>
      {!isExpanded ? (
        <div className="fixed right-32 bottom-0 pb-2 sm:pb-5 z-10">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="w-full flex justify-end">
              <button
                className="bg-[#073411] border border-border-primary text-white p-3 rounded-md shadow-lg transition-all duration-500 ease-in-out"
                onClick={() => setIsExpanded(true)}
              >
                <TbSpeakerphone color="#fff" size={24} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-x-0 right-14 bottom-0 pb-2 sm:pb-5 z-10">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div
              className={`rounded-lg p-2 sm:p-3 shadow-lg bg-zinc-50 dark:bg-gray-primary border border-gray-300 dark:border-gray-700 z-40 transition-all duration-500 ease-in-out ${
                isExpanded
                  ? "transform translate-y-0"
                  : "transform -translate-y-full"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg border border-border-primary p-2">
                    <TbSpeakerphone className="text-zinc-900 " size={24} />
                  </span>
                  <div
                    ref={containerRef}
                    className="ml-3 overflow-hidden relative w-full h-8"
                    style={{ maxHeight: "2rem" }}
                  >
                    <div className="text-zinc-900 dark:text-white">
                      {promoMessages.map((message, index) => (
                        <div
                          key={index}
                          className={`transition-all duration-500 ease-in-out text-black ${
                            currentIndex === index ? "visible" : "hidden"
                          }`}
                          style={{ height: "1.8rem" }}
                        >
                          {message}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto flex justify-center items-center gap-2">
                  <ComponentButton label="Explorer Nos Produits" />

                  <ComponentButton label="Box Grillande" />
                </div>

                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    className="-mr-1 flex rounded-md p-2  transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white"
                    type="button"
                    onClick={() => setIsExpanded(false)}
                  >
                    <RxCross2 className="text-zinc-900" size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoNotification;
