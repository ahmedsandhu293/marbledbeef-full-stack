"use client";

import React from "react";
import { Button } from "@nextui-org/button";

interface ButtonComponentProps {
  label: string;
  icon?: React.ReactNode; // Accept an icon as a prop
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const ComponentButton: React.FC<ButtonComponentProps> = ({
  label,
  icon,
  onClick,
  loading = false,
  disabled = false,
  className = "",
}) => {
  return (
    <Button
      className={`${className} flex items-center justify-center gap-2`} // Add gap for spacing
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 text-white mr-2"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            fill="currentColor"
          />
        </svg>
      )}
      {label}
      {icon && <span>{icon}</span>}
    </Button>
  );
};

export default ComponentButton;
