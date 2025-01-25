"use client";
import { useEffect, useState } from "react";

import React from "react";

const page = () => {
  const [customer, setCustomer] = useState(null);

  const update = async () => {
    const customerAccessToken = localStorage.getItem("auth-token");
    const firstName = "asad";
    const lastName = "ullah";
    const phone = "+1 555 555 5555";
    const address = {
      address1: "123 Main St",
      city: "Anytown",
      province: "CA",
      country: "US",
      zip: "12345",
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

  useEffect(() => {
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

    fetchProfile();
  }, []);
  console.log("🚀 ~ fetchProfile ~ customerAccessToken:");
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
      <button onClick={update}>update</button>
    </div>
  );
};

export default page;
