import React from "react";
import { cn } from "@/_lib/cn";

interface FooterProps {
  text1?: string;
  text2?: string;
  text1ClassName?: string;
  text2ClassName?: string;
  footerClassName?: string;
  onText2Click?: () => void;
}

function Footer({
  text1,
  text2,
  text1ClassName,
  text2ClassName,
  footerClassName,
  onText2Click,
}: FooterProps) {
  return (
    <footer
      aria-label="footer"
      className={cn(
        "flex flex-wrap justify-center items-center gap-1 text-sm sm:text-base",
        footerClassName
      )}
    >
      {text1 && (
        <span className={cn("text-gray-600", text1ClassName)}>{text1}</span>
      )}
      {text2 && (
        <button
          type="button"
          onClick={onText2Click}
          className={cn(
            "text-blue-600 font-semibold cursor-pointer relative group",
            text2ClassName
          )}
        >
          {text2}
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </button>
      )}
    </footer>
  );
}

export default Footer;
