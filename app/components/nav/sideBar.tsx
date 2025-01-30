"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const SideBar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = (path: string): void => {
    router.push(path);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-[20%] left-4 p-4 bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 rounded-md md:hidden z-50"
        >
          ☰
        </button>
      )}

      <aside
        className={`fixed z-50 md:z-0 md:relative w-64 bg-background-primary p-4 pt-24 h-screen transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-1/4 lg:w-1/5 xl:w-1/6`}
      >
        {isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-8 right-4 p-2 bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 rounded md:hidden z-50"
          >
            ✕
          </button>
        )}

        <h2 className="text-lg font-semibold mb-4 text-white">Dashboard</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleTabClick("/dashboard")}
            className={`block w-full p-2 rounded text-black text-center  ${
              pathname === "/dashboard"
                ? "bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 "
                : "bg-gray-200"
            }`}
          >
            User Profile
          </button>
          <button
            onClick={() => handleTabClick("/dashboard/orders")}
            className={`block w-full text-center p-2 rounded text-black ${
              pathname === "/dashboard/orders"
                ? "bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 "
                : "bg-gray-300"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => handleTabClick("/dashboard/payments")}
            className={`block w-full text-center p-2 rounded text-black ${
              pathname === "/dashboard/payments"
                ? "bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 "
                : "bg-gray-300"
            }`}
          >
            Payments
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
