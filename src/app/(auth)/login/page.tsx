import React from "react";
import Login from "@/components/auth/Login";
import { cn } from "@/_lib/cn";

interface LoginPageProps {
  mainContainerClassName?: string;
  leftContainerClassName?: string;
  rightContainerClassName?: string;
  middleContainerClassName?: string;
}

function LoginPage({
  mainContainerClassName,
  leftContainerClassName,
  rightContainerClassName,
  middleContainerClassName ,
}: LoginPageProps) {
  return (
    <div
      className={cn(
        "h-[100dvh] w-screen flex flex-col md:flex-row relative",
        mainContainerClassName
      )}
    >
      <div
        className={cn(
          "bg-[#3967d7] md:w-1/2 w-full h-1/2 md:h-full",
          leftContainerClassName
        )}
      />

      <div
        className={cn(
          "bg-[#dedede] md:w-1/2 w-full h-1/2 md:h-full",
          rightContainerClassName
        )}
      />

      <div
        className={cn(
          "absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md p-4 md:p-6 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-[math] ",
          middleContainerClassName
        )}
      >
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
