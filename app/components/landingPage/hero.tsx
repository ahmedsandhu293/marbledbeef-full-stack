"use client";

import { searchProducts } from "@/services/productService";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck, FaSpinner } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setProducts([]);
      setShowDropdown(false);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      const results = await searchProducts(query);
      setProducts(results);
      setLoading(false);
      setShowDropdown(true);
    };

    const delaySearch = setTimeout(fetchProducts, 500);

    return () => clearTimeout(delaySearch);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-[580px] md:mb-[380px] lg:mb-[280px]">
      <div
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/hero-background.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-30 flex justify-center items-center w-full h-full text-center text-white">
          <div className="flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 font-urbanist">
              MarbledBeef
            </h1>
            <p className="text-base sm:text-xl md:text-3xl mb-6 font-urbanist">
              Viandes d{"'"}Excellence an un cic a votre porte
            </p>
            <div className="relative w-full sm:w-80 md:w-96 mt-10 lg:mt-20">
              <input
                className="p-3 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition font-urbanist placeholder:text-black bg-white text-black"
                placeholder="Recherche"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowDropdown(products.length > 0)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <IoSearchOutline className="h-5 w-5 text-black" />
              </div>

              {/* Search Results Dropdown */}
              {showDropdown && (
                <div
                  className="absolute w-full bg-black text-white mt-2 rounded-lg shadow-lg overflow-hidden max-h-56 overflow-y-auto z-30"
                  ref={inputRef}
                >
                  {loading ? (
                    <div className="flex items-center justify-center p-4">
                      <FaSpinner className="animate-spin h-6 w-6 text-white" />
                    </div>
                  ) : products.length > 0 ? (
                    products?.map((product) => (
                      <Link
                        key={product.id}
                        href={`/${product.handle}`}
                        className="flex gap-2  p-2 border-b border-gray-700 hover:bg-zinc-900 transition"
                      >
                        {product?.images?.edges[0]?.node?.url && (
                          <img
                            src={product?.images?.edges[0]?.node?.url}
                            alt={product?.images?.edges[0]?.node?.altText}
                            className="w-12 h-12  rounded-md object-cover"
                          />
                        )}
                        <span className="text-left">{product?.title}</span>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-400">
                      Aucun résultat trouvé
                    </div>
                  )}
                </div>
              )}
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
              className="absolute inset-0 w-full h-full object-cover md:rounded-l-xl rounded-xl "
              src="/assets/video/beef.mp4"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center bg-black text-white p-8 md:w-1/2 rounded-xl md:rounded-r-xl font-urbanist">
            <h4 className="text-lg pb-8 font-medium uppercase  ">
              À propos de nous
            </h4>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Nous fournissons
              <br />
              La meilleure viande{" "}
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
                Viande biologique
              </li>
              <li className="flex items-center gap-2">
                <span className=" rounded-full p-1">
                  <FaCheck />
                </span>{" "}
                Sécurisation des paiements
              </li>
            </ul>
            <div>
              <Button className="bg-gold text-black px-10">Voir plus</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
