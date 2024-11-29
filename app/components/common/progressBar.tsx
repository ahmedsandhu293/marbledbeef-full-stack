import { Progress } from "@nextui-org/react";
import { FaGift } from "react-icons/fa";

export default function ProgressBar() {
  const progress = 60; // Example progress percentage

  return (
    <div className="relative w-full max-w-md bg-black p-4">
      {/* Progress Bar */}
      <Progress
        aria-label="Loading..."
        value={progress}
        className="h-2 bg-gray-300 rounded-full"
        color="danger" // Red color
      />

      {/* Icon */}
      {progress > 1 && (
        <div
          className="absolute top-2 h-6 w-6 bg-white flex items-center justify-center rounded-full shadow-md"
          style={{ left: `calc(${progress}% - 20px)` }}
        >
          <FaGift className="text-red-primary" />
        </div>
      )}
    </div>
  );
}
