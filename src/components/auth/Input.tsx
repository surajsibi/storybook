"use client";
import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/_lib/cn";

interface InputProps {
  placeholder?: string;
  type?: string;
  error?: string;
  register?: UseFormRegisterReturn;
  icons?: React.ReactNode;
  customClassesForInput?: string;
  customClassesForContainer?: string;
  errorClasses?: string;
}

function Input({
  placeholder,
  type = "text",
  register,
  customClassesForInput = "",
  customClassesForContainer = "",
  error,
  icons,
  errorClasses = "",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const defaultClasses =
    "bg-white w-full py-2 px-3 focus:outline-none  text-sm sm:text-base text-gray-900 placeholder:text-gray-400 rounded-md transition-all duration-200";

  return (
    <div className={cn("w-full flex flex-col gap-1.5")}>
      <div
        role="inputContainer"
        className={cn(
          "w-full flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-400 transition-all duration-300",
          error && "border-red-400 bg-red-50 focus-within:ring-red-300",
          customClassesForContainer
        )}
      >
        {icons && <div className="hidden sm:flex">{icons}</div>}
        <input
          type={showPassword ? "text" : type}
          className={cn(defaultClasses, customClassesForInput)}
          {...register}
          placeholder={placeholder}
        />
        
        {type === "password" && (
          <button
            data-testid="toggle-password-visibility"
            type="button"
            className="cursor-pointer p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeClosed size={20} className="text-blue-600" />
            ) : (
              <Eye size={20} className="text-blue-600" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p
          className={cn(
            "text-red-500 text-xs md:text-sm font-medium px-2",
            errorClasses
          )}
        >
          {`* ${error}`}
        </p>
      )}
    </div>
  );
}

export default Input;
