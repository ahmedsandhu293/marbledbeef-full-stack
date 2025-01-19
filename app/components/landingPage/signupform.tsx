"use client";
import React, { useState } from "react";

const SignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
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
        <label htmlFor="email" className="block text-sm font-medium text-white">
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
        className="w-full p-3 rounded-2xl !bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-30"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
