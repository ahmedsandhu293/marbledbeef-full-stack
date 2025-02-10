"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchOrders = async () => {
    try {
      const customerAccessToken = localStorage.getItem("auth-token");

      if (!customerAccessToken) {
        console.error("No auth token found in localStorage.");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerAccessToken }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging log

      if (data.success) {
        setOrders(data.orders);
      } else {
        console.error("Error fetching orders:", data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const openModal = (order: any) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-background-primary lg:mt-20 flex items-center justify-center p-4">
      <div className="p-4 py-9 rounded shadow-lg bg-gray-800 w-full max-w-6xl">
        <h2 className="text-xl font-semibold mb-4 text-white">Orders</h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-20 bg-gray-600 rounded animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-700 p-4 rounded-lg shadow-md text-white"
                >
                  <p className="text-lg font-semibold">#{order?.orderNumber}</p>
                  <p className="text-sm text-gray-300">Name: {order?.name}</p>
                  <p className="text-sm text-gray-300">
                    Total: {order?.totalPrice?.amount}{" "}
                    {order?.totalPrice?.currencyCode}
                  </p>
                  <p className="text-sm text-gray-300">
                    Status: {order?.fulfillmentStatus}
                  </p>
                  <p className="text-sm text-gray-300">
                    Creted At: {new Date(order?.processedAt).toLocaleString()}
                  </p>
                  <button
                    onClick={() => openModal(order)}
                    className="mt-3 text-black bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 py-2 px-4 rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-white">
                No orders found.
              </p>
            )}
          </div>
        )}
      </div>
      {modalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg text-white">
            <h3 className="text-xl font-semibold mb-4">
              Order #{selectedOrder?.orderNumber} Details
            </h3>
            <ul>
              {selectedOrder?.lineItems?.edges?.map(
                (item: any, index: number) => (
                  <li key={index} className="border-b border-gray-600 mb-2">
                    <p className="text-lg font-medium">
                      Title:{item?.node?.title}
                    </p>
                    <p>Quantity: {item?.node?.quantity}</p>
                    <p>
                      Price: {item?.node?.variant?.price?.amount}{" "}
                      {item.node.variant.price.currencyCode}
                    </p>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={closeModal}
              className="mt-1 text-black bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
