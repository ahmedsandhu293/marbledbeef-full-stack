import React, { useState } from "react";

interface QuantitySelectorProps {
  initialValue: number;
  onChange: (newValue: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialValue,
  onChange,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleDecrement = () => {
    const newCount = Math.max(count - 1, 1);

    setCount(newCount);
    onChange(newCount);
  };

  const handleIncrement = () => {
    const newCount = count + 1;

    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div className="flex justify-center items-center gap-4 border border-gold rounded-lg py-0.5 px-5 w-auto">
      <span className="cursor-pointer" role="button" onClick={handleDecrement}>
        -
      </span>
      <span>{count}</span>
      <span className="cursor-pointer" role="button" onClick={handleIncrement}>
        +
      </span>
    </div>
  );
};

export default QuantitySelector;
