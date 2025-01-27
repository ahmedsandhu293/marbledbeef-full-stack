/* eslint-disable */
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  isClose?: boolean;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  onClose,
  children,
  isClose = true,
  className = "",
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    if (!isBrowser || !isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, isBrowser]);

  if (!isBrowser || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 h-screen z-50 flex items-center justify-center bg-black bg-opacity-50 m-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      tabIndex={-1}
      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
    >
      <div
        className={`relative rounded-lg shadow-lg ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isClose && (
          <button
            className="absolute top-2 right-2 text-gray-500 "
            onClick={onClose}
            aria-label="Close modal"
          >
            &#10005;
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalWrapper;
