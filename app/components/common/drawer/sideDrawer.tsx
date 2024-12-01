import React, { useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface SideDrawerProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  children,
  direction = "right",
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Drawer
      className="!bg-black md:!w-[408px] m-3 !max-h-[94dvh] overflow-y-auto rounded-md p-3 z-50 transition-transform duration-300 ease-in-out"
      direction={direction}
      open={isOpen}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
};

export default SideDrawer;
