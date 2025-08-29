import React from "react";
import { cn } from "@/_lib/cn";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  gradientTitle?: boolean; // 🔥 optional gradient effect
}

function Header({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  containerClassName,
  gradientTitle = true,
}: HeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 items-center justify-center text-center max-w-3xl mx-auto px-4",
        containerClassName
      )}
    >
      <h1
        className={cn(
          "font-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
          gradientTitle
            ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-transparent bg-clip-text"
            : "text-[#183ee9]",
          titleClassName
        )}
      >
        {title || "Login"}
      </h1>

      <p
        className={cn(
          "text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-normal",
          subtitleClassName
        )}
      >
        {subtitle || "Login to your account"}
      </p>
    </div>
  );
}

export default Header;
