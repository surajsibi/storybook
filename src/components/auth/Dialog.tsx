"use client";
import React, { useState } from "react";
import { cn } from "@/_lib/cn";

interface DialogProps {
  buttonLabel: string;
  headerTitle: string;
  headerSubTitle: string;
  buttonClassName?: string;
  innerContainerClassname?: string;
  headerContainerClassName?: string;
  headerTitleClassName?: string;
  headerSubTitleClassName?: string;
}

function Dialog({
  buttonLabel,
  buttonClassName,
  headerTitle,
  headerSubTitle,
  innerContainerClassname,
  headerContainerClassName,
  headerTitleClassName,
  headerSubTitleClassName,
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <>
      {!isOpen ? (
        <div className="flex justify-center items-center min-h-screen w-full relative">
          <button
            onClick={handleClick}
            className={cn(
              "border py-2 px-5 text-sm rounded-lg hover:bg-gray-400/20 hover:scale-105 transition-all duration-300 cursor-pointer",
              buttonClassName
            )}
          >
            {buttonLabel}
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen w-[97vw] ">
          <div className="absolute w-full min-h-screen bg-gray-500/20 border"></div>
          <div
            className={cn(
              "z-50 border py-6 px-10 flex flex-col items-start rounded-lg  bg-black shadow-md shadow-gray-500 gap-4",
              innerContainerClassname
            )}
          >
            <div className={cn("flex flex-col", headerContainerClassName)}>
              <h1 className={cn("", headerTitleClassName)}>{headerTitle}</h1>
              <p className={cn("text-gray-400", headerSubTitleClassName)}>
                {headerSubTitle}
              </p>
            </div>
            <div className="flex flex-col gap-2 border py-2 px-4 rounded-lg [box-shadow:inset_4px_4px_10px_rgba(255,255,255,0.4)] ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <button
              className="py-1 px-3 border rounded-lg hover:bg-gray-400/20 transition-all duration-300 cursor-pointer "
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dialog;
