"use client";
import React, { useState } from "react";
import SignUpForm from "./signupform";
import ModalWrapper from "../common/modal/ModalWapper";

const Authform: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            Already have an account?{" "}
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
        <ModalWrapper
          isOpen={isSignUpOpen}
          onClose={() => setIsSignUpOpen(false)}
          isClose={true}
        >
          <SignUpForm />
        </ModalWrapper>
      )}
    </>
  );
};

export default Authform;
