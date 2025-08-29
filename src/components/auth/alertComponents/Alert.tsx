import React from "react";
interface AlertProps {
  children: React.ReactNode;
  variant?: "default" | "destructive";
}

function Alert({ children, variant = "default" }: AlertProps) {
  return (
    <div
      className={`${
        variant === "default" ? "text-white " : "text-red-600"
      } py-2 px-4 rounded-md border border-gray-600 bg-gray-400/11 `}
    >
      {children}
    </div>
  );
}

export default Alert;
