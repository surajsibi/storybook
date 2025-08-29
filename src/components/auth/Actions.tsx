import React from "react";
import { cn } from "@/_lib/cn";

interface ActionsProps {
  text1: string;
  text2: string;
  text1ClassName?: string;
  text2ClassName?: string;
  actionsClassName?: string;
  onText1Click?: () => void;
  onText2Click?: () => void;
}

function Actions({
  text1,
  text2,
  text1ClassName = "",
  text2ClassName = "",
  actionsClassName = "",
  onText1Click,
  onText2Click,
}: ActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:justify-between w-full items-center text-sm sm:text-base gap-2",
        actionsClassName
      )}
    >
      <button
        type="button"
        onClick={onText1Click}
        className={cn(
          "text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium",
          text1ClassName
        )}
      >
        {text1}
      </button>

      <button
        type="button"
        onClick={onText2Click}
        className={cn(
          "text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium",
          text2ClassName
        )}
      >
        {text2}
      </button>
    </div>
  );
}

export default Actions;
