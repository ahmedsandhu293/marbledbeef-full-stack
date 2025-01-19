"use client";
import React, { useState } from "react";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password, firstName, lastName });

    if (!isSignUpOpen) {
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, firstName, lastName }),
        });

        const data = await response.json();

        if (response.ok) {
          return { success: true, customer: data.customer };
        } else {
          return { success: false, error: data.error };
        }
      } catch (error) {
        return { success: false, error: "Unexpected error occurred" };
      }
    }
  };

  return (
    <>
      {!isSignUpOpen && (
        <form onSubmit={handleSubmit} className="">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-2xl !bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300"
          >
            Login
          </button>

          <p className="mt-4 text-center text-white">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignUpOpen(true)}
              className="text-gradient-gold-200 hover:underline"
            >
              Sign up
            </button>
          </p>
        </form>
      )}

      {isSignUpOpen && (
        <form onSubmit={handleSubmit} className="">
          <div className="mb-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full text-lg rounded-2xl pl-10 backdrop-blur-lg bg-opacity-60 transition- font-urbanist placeholder:text-black bg-white text-black"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-2xl !bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300"
          >
            Sign up
          </button>

          <p className="mt-4 text-center text-white">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignUpOpen(false)}
              className="text-gradient-gold-200 hover:underline"
            >
              Log in
            </button>
          </p>
        </form>
      )}
    </>
  );
};

export default AuthForm;
