"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/_lib/cn";

interface CheckBoxProps {
  label: string;
  subTitle?: string;
  selectValues: { title: string; isChecked: boolean; isDisable: boolean }[];
  selectConatinerClassname?: string;
  selectHeaderContainerClassName?: string;
  selectHeaderClassName?: string;
  selectSubHeaderClassName?: string;
  selectBottomClassName?: string;
  selectButtonClassName?: string;
  selectCheckClassName?: string;
  selectTitleClassName?: string;
}

function CheckBox({
  label,
  subTitle,
  selectValues,
  selectConatinerClassname,
  selectHeaderContainerClassName,
  selectHeaderClassName,
  selectSubHeaderClassName,
  selectBottomClassName,
  selectButtonClassName,
  selectCheckClassName,
  selectTitleClassName,
}: CheckBoxProps) {
  const [values, setValues] = useState(selectValues);

  const toggleCheck = (index: number) => {
    const updated = [...values];
    updated[index].isChecked = !updated[index].isChecked;
    setValues(updated);
  };
  return (
    <div
      className={cn(
        "text-white tracking-wide space-y-4 flex flex-col",
        selectConatinerClassname
      )}
    >
      <div className={cn("flex flex-col", selectHeaderContainerClassName)}>
        <h1 className={cn("text-4xl font-medium", selectHeaderClassName)}>
          {label}
        </h1>
        <p className={cn("text-xl", selectSubHeaderClassName)}>{subTitle}</p>
      </div>

      <div
        className={cn(
          "space-y-2  flex flex-col py-2 px-3 justify-center rounded-md",
          selectBottomClassName
        )}
      >
        {selectValues.map((value, index) => (
          <button
            disabled={value.isDisable}
            key={value.title}
            onClick={() => toggleCheck(index)}
            className={cn(
              "inline-flex items-center space-x-2 cursor-pointer",
              value.isDisable && "cursor-not-allowed text-gray-400 px-2",
              selectButtonClassName
            )}
          >
            <div
              className={cn(
                "w-4 h-4 flex justify-center items-start border border-gray-300 rounded-sm",
                selectCheckClassName,
                value.isDisable && "cursor-not-allowed border-gray-400 "
              )}
            >
              {value.isChecked && <Check color="white" size={16} />}
            </div>
            <p className={cn("text-md ", selectTitleClassName)}>
              {value.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CheckBox;
