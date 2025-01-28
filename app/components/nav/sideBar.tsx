"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="w-1/4 bg-gray-200 p-4 md:w-1/4 lg:w-1/5 xl:w-1/6 pt-24">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <div className="space-y-4">
        <button
          onClick={() => router.push("/dashboard")}
          className={`block w-full text-left p-2 rounded ${
            pathname === "/dashboard" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          User Profile
        </button>
        <button
          onClick={() => router.push("/dashboard/orders")}
          className={`block w-full text-left p-2 rounded ${
            pathname === "/dashboard/orders"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => router.push("/dashboard/payments")}
          className={`block w-full text-left p-2 rounded ${
            pathname === "/dashboard/payments"
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Payments
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
