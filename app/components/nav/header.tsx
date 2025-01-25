"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiHeart, FiMenu, FiX } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import Image from "next/image";
import { GoPerson } from "react-icons/go";

import ComponentButton from "../common/buttons/ButtonComponent";
import SideDrawer from "../common/drawer/sideDrawer";
import Cart from "../sideBarComponent/cart";
import FavoritesCart from "../sideBarComponent/favorites";
import Cart2 from "../sideBarComponent/cart2";

import { routes } from "@/app/utils/routes";
import DeliveryTruck from "@/public/assets/svg/deliveryTruck";
import Food from "@/public/assets/svg/food";
import Lock from "@/public/assets/svg/lock";
import { useGlobalContext } from "@/app/context/store";
import AuthForm from "../landingPage/authForm";
import ModalWrapper from "../common/modal/ModalWapper";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCart2DrawerOpen, setIsCart2DrawerOpen] = useState(false);
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const { cartItem, favorites } = useGlobalContext();
  const [isToken, setIsToken] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const getToken = () => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const handleLogout = async () => {
    const customerAccessToken = localStorage.getItem("auth-token");

    if (!customerAccessToken) {
      return;
    }

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerAccessToken }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.removeItem("auth-token");
        getToken();
      } 
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-lg bg-opacity-10 transition-colors duration-300 bg-background-primary text-text-primary`}
    >
      <div className="container mx-auto flex  text-white justify-between p-2 md:p-6 items-start">
        <div className="flex md:items-start gap-3 md:mr-6 flex-col md:flex-row justify-center items-center">
          <div className="text-yellow-500 text-sm h-10">
            <DeliveryTruck />
          </div>
          <div className="">
            <h3 className="font-bold text-xs md:text-lg text-center md:text-left">
              Livraison gratuite
            </h3>
            <p className="text-xs md:text-sm hidden md:block">
              Plus de 49 € en France, Monaco, <br /> Belgique, Luxembourg
            </p>
          </div>
        </div>

        <div className="flex md:items-start gap-3 md:mr-6 flex-col md:flex-row justify-center items-center">
          <div className="text-blue-500 text-3xl h-10">
            <Lock />
          </div>
          <div>
            <h3 className="font-bold text-xs md:text-lg text-center md:text-left">
              Paiements sécurisés
            </h3>
            <p className="text-sm  hidden md:block">
              PayPal, Alma, Visa et Mastercard <br /> avec des plans de
              versement
            </p>
          </div>
        </div>

        {/* Freshness Guarantee */}
        <div className="flex md:items-start gap-3  md:mr-6 flex-col md:flex-row justify-center items-center">
          <div className="text-yellow-500 text-3xl h-10">
            <Food />
          </div>
          <div>
            <h3 className="font-bold text-xs md:text-lg text-center md:text-left">
              Garantie de fraîcheur
            </h3>
            <p className="text-sm  hidden md:block">
              Profitez des meilleures tartes chaudes avec votre <br /> famille
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <nav className="relative flex items-center justify-between px-6 py-4 ">
          <Link href="/">
            <Image
              alt="logo"
              className="w-auto h-12 md:w-auto md:h-20"
              height={50}
              src="/assets/images/logo.png"
              width={50}
            />
          </Link>

          <div className="hidden lg:flex space-x-4 items-center absolute left-1/2 transform -translate-x-1/2">
            {routes.map((route) => (
              <Link
                key={route.path}
                className="px-3 py-1  font-urbanist transition-colors text-text-primary "
                href={route.path}
              >
                <span className="relative group inline-block text-zinc-900 dark:text-white">
                  <span className={`relative -z-0 `}> {route.name}</span>

                  <span
                    className="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-transparent transition-all duration-500 group-hover:w-full group-hover:left-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent)",
                    }}
                  ></span>
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => {
                if (favorites.length > 0) {
                  setIsFavoritesDrawerOpen(true);
                }
              }}
            >
              <span className="relative">
                <FiHeart size={26} />
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 text-xs transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </span>
            </button>
            {/* <button onClick={() => setIsCartDrawerOpen(true)}>
              <BsHandbag size={26} />
            </button> */}
            <button
              onClick={() => {
                if (cartItem.length > 0) {
                  setIsCart2DrawerOpen(true);
                }
              }}
            >
              <span className="relative">
                <BsHandbag size={26} />
                {cartItem.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 text-xs transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {cartItem.length}
                  </span>
                )}
              </span>
            </button>

            <div className="relative" ref={menuRef}>
              {isToken ? (
                <>
                  <ComponentButton
                    className="!bg-gradient-secondary text-white rounded-xl border border-[#323233]"
                    icon={<GoPerson />}
                    onClick={() => setMenuOpen(!menuOpen)}
                    label="Profile"
                  />
                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-zinc-800 border border-border-primary rounded-xl shadow-lg">
                      <ul className="py-2 text-gray-800">
                        <li
                          className="px-4 py-2 hover:bg-zinc-900 cursor-pointer text-white"
                          onClick={() => {}}
                        >
                          Go to Profile
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-zinc-900 cursor-pointer text-red-primary"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <ComponentButton
                  className="!bg-gradient-secondary text-white rounded-xl border border-[#323233]"
                  icon={<GoPerson />}
                  onClick={() => setIsOpenForm(true)}
                  label="Se connecter"
                />
              )}
            </div>
          </div>

          <div className="lg:hidden text-2xl flex justify-center items-center gap-3">
            <button
              onClick={() => {
                if (favorites.length > 0) {
                  setIsFavoritesDrawerOpen(true);
                }
              }}
            >
              <span className="relative">
                <FiHeart size={26} />
                {favorites.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 text-xs transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </span>
            </button>

            <button
              onClick={() => {
                if (cartItem.length > 0) {
                  setIsCart2DrawerOpen(true);
                }
              }}
            >
              <span className="relative">
                <BsHandbag size={26} />
                {cartItem.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 text-xs transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {cartItem.length}
                  </span>
                )}
              </span>
            </button>
            <button aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX className="text-text-primary" />
              ) : (
                <FiMenu className="text-text-primary" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mx-auto container backdrop-blur-lg bg-opacity-10 transition-colors duration-300">
          <div className="flex flex-col items-start space-y-4 p-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                className=" transition-colors"
                href={route.path}
              >
                <span className="relative group inline-block text-zinc-900 dark:text-white">
                  {/* Text */}
                  <span className={`relative -z-0 `}> {route.name}</span>

                  {/* Blurred Underline Effect */}
                  <span
                    className="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-transparent transition-all duration-500 group-hover:w-full group-hover:left-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
                    }}
                  ></span>
                </span>
              </Link>
            ))}
            <button
              onClick={() => setIsOpenForm(true)}
              className="px-4 py-2 w-full bg-background-secondary border border-border-primary text-text-primary rounded-lg  transition-colors"
            >
              Se connecter
            </button>
          </div>
        </div>
      )}
      <SideDrawer
        isOpen={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
      >
        <Cart onClose={() => setIsCartDrawerOpen(false)} />
      </SideDrawer>

      <SideDrawer
        isOpen={isFavoritesDrawerOpen}
        onClose={() => setIsFavoritesDrawerOpen(false)}
      >
        <FavoritesCart onClose={() => setIsFavoritesDrawerOpen(false)} />
      </SideDrawer>
      <SideDrawer
        isOpen={isCart2DrawerOpen}
        onClose={() => setIsCart2DrawerOpen(false)}
      >
        <Cart2 onClose={() => setIsCart2DrawerOpen(false)} />
      </SideDrawer>
      <ModalWrapper
        isOpen={isOpenForm}
        onClose={() => setIsOpenForm(false)}
        isClose={true}
        className="!bg-black !px-8 !py-6"
      >
        <AuthForm onClose={() => setIsOpenForm(false)} onToken={getToken} />
      </ModalWrapper>
    </header>
  );
};

export default Navbar;
