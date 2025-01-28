"use client";
import { useState, ChangeEvent } from "react";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

interface Order {
  id: number;
  title: string;
  status: string;
  created: string;
}

const DashboardPage = () => {
  const [selectedBeef, setSelectedBeef] = useState<string | null>(null);

  // State for the user profile form
  const [profile, setProfile] = useState<Profile>({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    address: "123 Main St, Springfield",
  });

  // Sample orders data
  const orders: Order[] = [
    { id: 1, title: "Wagyu Beef", status: "Delivered", created: "2024-01-10" },
    { id: 2, title: "Angus Beef", status: "Processing", created: "2024-01-15" },
    { id: 3, title: "Hereford Beef", status: "Shipped", created: "2024-01-18" },
    {
      id: 4,
      title: "Simmental Beef",
      status: "Delivered",
      created: "2024-01-20",
    },
    { id: 5, title: "Wagyu Beef", status: "Processing", created: "2024-01-22" },
  ];

  const handleProfileChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = () => {
    console.log("Profile updated successfully!");
  };

  // const renderContent = () => {
  //   if (activeTab === "profile") {
  //     return (

  //     );
  //   } else if (activeTab === "orders") {
  //     return (
  //       <div className="p-4 border rounded shadow">
  //         <h2 className="text-xl font-semibold">Orders</h2>
  //         <p className="mt-2 text-gray-600">
  //           {selectedBeef
  //             ? `Showing orders for: ${selectedBeef}`
  //             : "Select a beef type from the sidebar to view orders."}
  //         </p>
  //         <ul className="mt-4 space-y-2">
  //           {orders
  //             .filter((order) => !selectedBeef || order.title === selectedBeef)
  //             .map((order) => (
  //               <li
  //                 key={order.id}
  //                 className="p-2 border rounded bg-gray-50 flex justify-between"
  //               >
  //                 <div>
  //                   <span className="font-semibold">{order.title}</span>
  //                   <div className="text-sm text-gray-500">
  //                     Status: {order.status}
  //                   </div>
  //                   <div className="text-sm text-gray-500">
  //                     Created: {order.created}
  //                   </div>
  //                 </div>
  //               </li>
  //             ))}
  //         </ul>
  //       </div>
  //     );
  //   } else if (activeTab === "payments") {
  //     return (
  //       <div className="p-4 border rounded shadow">
  //         <h2 className="text-xl font-semibold">Payments</h2>
  //         <p className="mt-2 text-gray-600">
  //           Here you can manage your payments.
  //         </p>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div className="m-6">
      <div className="p-4 border rounded shadow mt-20">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleProfileChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="button"
            onClick={handleUpdateProfile}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
