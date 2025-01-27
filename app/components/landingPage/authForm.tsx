"use client";
import React, { useState } from "react";

const InputField: React.FC<{
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ id, label, type, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-white">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="p-2 w-full text-lg rounded-2xl pl-10 mt-3 backdrop-blur-lg bg-opacity-60 transition-all duration-300 font-urbanist placeholder:text-black bg-white text-black"
      placeholder={`Enter your ${label.toLowerCase()}`}
      required
    />
  </div>
);

const AuthForm = ({
  onClose,
  onToken,
}: {
  onClose: () => void;
  onToken: () => void;
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const url = isSignUpOpen ? "/api/auth/register" : "/api/auth/login";
      const body = isSignUpOpen
        ? { email, password, firstName, lastName }
        : { email, password };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (isSignUpOpen) {
        setIsSignUpOpen(false);
      } else {
        localStorage.setItem("auth-token", data?.token?.accessToken);
        onClose();
        onToken();
      }

      if (!response.ok) {
        throw new Error(data.error || "Unexpected error occurred");
      }
    } catch (error: any) {
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6  rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        {isSignUpOpen && (
          <>
            <InputField
              id="firstName"
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
              id="lastName"
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-2xl ${
            loading
              ? "bg-gray-400"
              : "bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300"
          } shadow-sm hover:shadow-glow transition-all duration-300`}
        >
          {loading ? "Loading..." : isSignUpOpen ? "Sign Up" : "Login"}
        </button>

        <p className="mt-4 text-center text-white">
          {isSignUpOpen ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignUpOpen(false)}
                className="text-gradient-gold-200 hover:underline"
              >
                Log in
              </button>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignUpOpen(true)}
                className="text-gradient-gold-200 hover:underline"
              >
                Sign up
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
