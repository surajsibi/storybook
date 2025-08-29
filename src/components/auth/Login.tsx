"use client";
import React from "react";
import { UserRound, SquareAsterisk } from "lucide-react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Actions from "./Actions";
import Footer from "./Footer";
import FormWrapper from "./FormWrapper";
import { cn } from "@/_lib/cn";

interface FormData {
  username: string;
  password: string;
}

interface LoginProps {
  formClassName?: string;
  inputClassName?: string;
  actionClassName?: string;
}

const Login = ({
  formClassName,
  inputClassName,
  actionClassName,
}: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "all",
  });

  const onSubmit =async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
  };

  return (
    <FormWrapper
      formClassName={formClassName}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <Header />

      <div
        role="outerInputContainer"
        className={cn("w-full flex flex-col gap-4", inputClassName)}
      >
        <Input
          placeholder="Username"
          type="text"
          register={register("username", {
            required: "Username is required",
          })}
          error={errors.username?.message}
          icons={<UserRound fill="#405acb" size={24} />}
        />
        <Input
          placeholder="Password"
          type="password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password?.message}
          icons={<SquareAsterisk fill="#405acb" size={24} />}
        />
      </div>

      <div
        role="actionContainer"
        className={cn("w-full flex flex-col gap-4", actionClassName)}
      >
        <Actions text1="Need help logging in?" text2="Forgot Password" />
        <Button
          label={isSubmitting ? "Logging in..." : "Login"}
          type="submit"
          disabled={isSubmitting}
        />
      </div>

      <Footer text1="Don't have an account?" text2="Sign Up" />
    </FormWrapper>
  );
};

export default Login;
