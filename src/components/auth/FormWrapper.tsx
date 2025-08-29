import React from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/_lib/cn";

interface FormData {
  username: string;
  password: string;
}

interface FormWrapperProps {
  children: React.ReactNode;
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  onSubmit: (...args: any[]) => void;
  formClassName?: string;
}

function FormWrapper({
  children,
  handleSubmit,
  onSubmit,
  formClassName,
}: FormWrapperProps) {
  return (
    <form
      role="form"
      aria-label="login form"
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "bg-[#fefefe] px-4 py-6 flex flex-col font-sans justify-center items-center rounded-lg gap-6 w-full max-w-md shadow-md",
        formClassName
      )}
    >
      {children}
    </form>
  );
}

export default FormWrapper;
