"use client";

import { useEffect, useState } from "react";
import { routes } from "@/app/utils/routes";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../common/theme";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-lg bg-opacity-10 transition-colors duration-300 `}
    >
      <div className="container mx-auto">
        <nav className="relative flex items-center justify-between px-6 py-4 ">
          <span className="text-lg font-semibold text-text-primary">LOGO</span>

          <div className="hidden md:flex space-x-4 items-center border border-border-primary bg-background-secondary px-4 py-2 rounded-full absolute left-1/2 transform -translate-x-1/2">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="px-3 py-1 rounded-full transition-colors text-text-primary hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {route.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="px-4 py-2  bg-background-secondary border border-border-primary text-text-primary rounded-lg  transition-colors">
              Sign In
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
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
        <div className="md:hidden backdrop-blur-lg bg-opacity-10 transition-colors duration-300">
          <div className="flex flex-col items-start space-y-4 p-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className=" transition-colors"
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
    </header>
  );
};

export default Navbar;
