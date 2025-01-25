"use client";
import { useEffect, useState } from "react";

import React from "react";

const page = () => {
  const [customer, setCustomer] = useState(null);

  const update = async () => {
    const customerAccessToken = localStorage.getItem("auth-token");
    const firstName = "ali";
    const lastName = "raza";
    const phone = "+923174260260";
    const address = {
      address1: "street 1 lahore",
      address2: "street 2 lahore",
      city: "lahore",
      province: "punjab",
      country: "pakistan",
      zip: "12342",
    };

    const response = await fetch("/api/profile/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerAccessToken,
        firstName,
        lastName,
        phone,
        address,
      }),
    });

    const data = await response.json();

    console.log("🚀 ~ update ~ data:", data);

    if (data.success) {
      console.log("Customer updated successfully:", data.customer);
    } else {
      console.error("Error updating customer:", data.error || data.errors);
    }
  };

  const Orders = async () => {
    const customerAccessToken = localStorage.getItem("auth-token");

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerAccessToken,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Order History:", result.orders);
    } else {
      console.error("Error:", result.error);
    }
  };

  async function fetchProfile() {
    const customerAccessToken = localStorage.getItem("auth-token");

    if (!customerAccessToken) return;

    const response = await fetch("/api/profile/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerAccessToken }),
    });

    const data = await response.json();
    console.log("🚀 ~ fetchProfile ~ data:", data);

    if (data.success) {
      setCustomer(data.customer);
    } else {
      console.error("Failed to fetch customer profile:", data.error);
    }
  }
  useEffect(() => {
    fetchProfile();
  }, []);
  console.log("🚀 ~ fetchProfile ", customer);
  return (
    <div>
      {customer && (
        <div className="mt-96 text-black">
          <h1>
            {customer.firstName} {customer.lastName}
          </h1>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
          <p>Joined on: {new Date(customer.createdAt).toDateString()}</p>
          {customer.metafield && (
            <img
              src={customer.metafield.value}
              alt="Profile"
              className="w-32 h-32 rounded-full"
            />
          )}
        </div>
      )}
      <button className="px-3 py-2 bg-slate-500 rounded-lg" onClick={update}>
        update
      </button>
      <button className="px-3 py-2 bg-yellow-700 rounded-lg" onClick={Orders}>
        Order
      </button>
      <button
        className="px-3 py-2 bg-green-700 rounded-lg"
        onClick={fetchProfile}
      >
        new
      </button>
    </div>
  );
};

export default page;
