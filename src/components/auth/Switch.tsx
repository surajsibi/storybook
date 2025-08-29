import { useState } from "react";
import { cn } from "@/_lib/cn";

interface SwitchProps {
  isAnimated?: boolean;
  buttonClassName?: string;
  circleClassName?: string
}

export default function Switch({
  isAnimated = true,
  buttonClassName,
  circleClassName,
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => setIsChecked((prev) => !prev);

  return (
    <button
      onClick={handleClick}
      role="switch"
      aria-checked={isChecked}
      className={cn(
        "w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300",
        isChecked ? "bg-blue-600" : "bg-gray-300",
        !isAnimated && (isChecked ? "justify-end" : "justify-start"),
        buttonClassName
      )}
    >
      <span
        className={cn(
          "w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300",circleClassName,
          isAnimated && (isChecked?"translate-x-[100%]":"translate-x-0"),
          
        )}
      />
    </button>
  );
}
