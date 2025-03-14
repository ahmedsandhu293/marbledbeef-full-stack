"use client";
import { useState, useEffect, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Profile>();

  // Fetch Profile Data (GET)
  const fetchCustomerData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const customerAccessToken = localStorage.getItem("auth-token");
      if (!customerAccessToken) throw new Error("No access token found");

      const response = await fetch("/api/profile/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerAccessToken }),
      });

      const data = await response.json();
      if (data.success) {
        const customer = data.customer;
        reset({
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email,
          phone: customer.phone || "+92321...",
        });
      } else {
        setError(data.error || "Failed to fetch customer data");
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setError("An error occurred while fetching customer data");
    } finally {
      setIsLoading(false);
    }
  }, [reset]);

  useEffect(() => {
    fetchCustomerData();
  }, [fetchCustomerData]);

  // Handle Profile Update (POST)
  const onSubmit: SubmitHandler<Profile> = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const customerAccessToken = localStorage.getItem("auth-token");
      if (!customerAccessToken) throw new Error("No access token found");

      const response = await fetch("/api/profile/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerAccessToken,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Profile updated successfully!", result);
        fetchCustomerData(); // Re-fetch updated data
      } else {
        setError(result.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("An error occurred while updating profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background-primary">
      <div className="p-4 py-9 rounded shadow lg:mt-20">
        <h2 className="text-xl font-semibold mb-4 text-white">Edit Profile</h2>

        {isLoading ? (
          // Skeleton Loader
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-10 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-600 rounded animate-pulse"></div>
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-medium text-white"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="p-2 w-full text-lg rounded-2xl backdrop-blur-lg bg-opacity-60 transition-all duration-300 font-urbanist placeholder:text-black bg-white text-black"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="p-2 w-full text-lg rounded-2xl backdrop-blur-lg bg-opacity-60 transition-all duration-300 font-urbanist placeholder:text-black bg-white text-black"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  readOnly
                  className="p-2 w-full text-lg rounded-2xl backdrop-blur-lg bg-opacity-60 transition-all duration-300 font-urbanist placeholder:text-black bg-white text-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-medium text-white">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+923[0-9]{9}$/,
                      message: "Invalid phone number format (e.g. +92321...)",
                    },
                  })}
                  className="p-2 w-full text-lg rounded-2xl backdrop-blur-lg bg-opacity-60 transition-all duration-300 font-urbanist placeholder:text-black bg-white text-black"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-xl bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
