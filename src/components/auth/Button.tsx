import React from "react";

interface ButtonProps {
  label: string;
  type?: "submit" | "button";
  disabled?: boolean;
}

function Button({ label, type = "button", disabled = false }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`inline-flex items-center justify-center
        w-full rounded-xl font-semibold font-[math]
        transition-all duration-200 ease-in-out
        py-2.5 px-4 text-base sm:text-lg md:text-xl lg:text-2xl
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
        active:scale-95
        ${
          disabled
            ? "border border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
            : "border border-blue-600 bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg"
        }`}
    >
      {label}
    </button>
  );
}

export default Button;
