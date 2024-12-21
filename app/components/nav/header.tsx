"use client";

import { useState } from "react";
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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCart2DrawerOpen, setIsCart2DrawerOpen] = useState(false);
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-lg bg-opacity-10 transition-colors duration-300 bg-background-primary text-text-primary`}
    >
      <div className="container mx-auto flex flex-col md:flex-row text-white justify-between p-6 items-center">
        <div className="flex items-start gap-3 mb-4 md:mb-0 md:mr-6">
          <div className="text-yellow-500 text-3xl">
            <DeliveryTruck />
          </div>
          <div>
            <h3 className="font-bold text-lg">Free Delivery</h3>
            <p className="text-sm">
              Over €49 in France, Monaco,
              <br /> Belgium, Luxembourg
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-4 md:mb-0 md:mr-6">
          <div className="text-blue-500 text-3xl">
            <Lock />
          </div>
          <div>
            <h3 className="font-bold text-lg">Secure Payments</h3>
            <p className="text-sm">
              Paypal, Alma, Visa, and Master <br /> with installment plans
            </p>
          </div>
        </div>

        {/* Freshness Guarantee */}
        <div className="flex items-start gap-3">
          <div className="text-yellow-500 text-3xl">
            <Food />
          </div>
          <div>
            <h3 className="font-bold text-lg">Freshness Guarantee</h3>
            <p className="text-sm">
              Enjoy the best hot pies with your <br /> family
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <nav className="relative flex items-center justify-between px-6 py-4 ">
          <Image
            alt="logo"
            height={100}
            src="/assets/images/logo.png"
            width={100}
          />

          <div className="hidden lg:flex space-x-4 items-center absolute left-1/2 transform -translate-x-1/2">
            {routes.map((route) => (
              <Link
                key={route.path}
                className="px-3 py-1 rounded-full font-urbanist transition-colors text-text-primary hover:bg-gray-200 dark:hover:bg-gray-700"
                href={route.path}
              >
                {route.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={() => setIsFavoritesDrawerOpen(true)}>
              <FiHeart size={26} />
            </button>
            <button onClick={() => setIsCartDrawerOpen(true)}>
              <BsHandbag size={26} />
            </button>
            <button onClick={() => setIsCart2DrawerOpen(true)}>
              <BsHandbag size={26} />
            </button>

            <ComponentButton
              className="!bg-gradient-secondary text-white rounded-xl border border-[#323233]"
              icon={<GoPerson />}
              label="Sign In"
            />
          </div>

          <button
            aria-label="Toggle Menu"
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="text-text-primary" />
            ) : (
              <FiMenu className="text-text-primary" />
            )}
          </button>
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
                {route.name}
              </Link>
            ))}
            <button className="px-4 py-2 w-full bg-background-secondary border border-border-primary text-text-primary rounded-lg  transition-colors">
              Sign In
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
    </header>
  );
};

export default Navbar;
