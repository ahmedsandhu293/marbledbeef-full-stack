import React from "react";

const page = () => {
  return (
    <div className="bg-background-primary">
      <div className="p-4 py-9 rounded shadow lg:mt-20">
        <h2 className="text-xl font-semibold mb-4 text-white">Payments</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-44 bg-gray-600 rounded animate-pulse"></div>
          <div className="h-44 bg-gray-600 rounded animate-pulse"></div>
          <div className="h-44 bg-gray-600 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
