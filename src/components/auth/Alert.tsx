import React from "react";
import { CircleCheckBig, Trash2, CircleAlert } from "lucide-react";
import { cn } from "@/_lib/cn";

interface AlertProps {
  heading: string;
  subHeading?: string;
  icons?: string;
  containerStyle?: string;
  textContainerStyle?: string;
  subHeadingClassName?: string;
  headingClassName?: string;
}
function Alert({
  heading,
  subHeading,
  icons,
  containerStyle,
  textContainerStyle,
  subHeadingClassName,
  headingClassName,
}: AlertProps) {
  const icon = [
    {
      name: "success",
      icon: <CircleCheckBig aria-label="success" color="green" size={20} />,
    },
    {
      name: "delete",
      icon: <Trash2 color="red" aria-label="delete" size={20} />,
    },
    {
      name: "error",
      icon: <CircleAlert color="red" aria-label="error" size={20} />,
    },
  ];

  return (
    <div
      className={cn(
        "flex gap-4 items-start border py-3 px-6  rounded-md bg-white",
        containerStyle
      )}
    >
      {icons && icon.find((item) => item.name === icons)?.icon}
      <div className={cn("flex flex-col", textContainerStyle)}>
        <h1 className={cn("text-black",icons==="error"?"text-red-600":"",headingClassName)}>{heading}</h1>
        <p className={cn("text-gray-500",icons==="error"?"text-red-400":"", subHeadingClassName)}>{subHeading}</p>
      </div>
    </div>
  );
}

export default Alert;
