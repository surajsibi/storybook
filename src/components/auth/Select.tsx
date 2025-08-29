"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/_lib/cn";

interface SelectProps {
  options: string[];
  label?: string;
  onChange?: (option: string) => void;
  placeholder?: string;
  labelClassName?: string;
  placeholderClassName?: string;
  dropDownContainerClassName?: string;
  dropDownHeaderClassName?: string;
  dropDownHeader?: string;
  dropDownClassName?: string;
  dropDownOptionClassName?: string;
}

function Select({
  options,
  label = "Select an option",
  onChange,
  placeholder = "Select an option",
  labelClassName,
  placeholderClassName,
  dropDownContainerClassName,
  dropDownHeaderClassName,
  dropDownHeader,
  dropDownClassName,
  dropDownOptionClassName,
}: SelectProps) {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setDropdownIsOpen((prev) => {
      const willOpen = !prev;
      if (willOpen && dropDownRef.current) {
        setMaxHeight(dropDownRef.current.scrollHeight);
      } else {
        setMaxHeight(0);
      }
      return willOpen;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setDropdownIsOpen(false);
        setMaxHeight(0);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setDropdownIsOpen(false);
    setMaxHeight(0);
  };

  return (
    <div ref={containerRef} className="text-white w-60 relative">
      <label
        onClick={handleClick}
        className={cn("text-lg  tracking-wide px-2 ", labelClassName)}
      >
        {label}
      </label>
      <div
        onClick={handleClick}
        className={cn(
          "border text-sm  w-full border-gray-500 px-3 py-2 rounded-lg justify-between flex items-center shadow-md cursor-pointer",
          placeholderClassName
        )}
      >
        <p className="tracking-wide">{selectedOption || placeholder}</p>
        <ChevronDown
          size={20}
          className={cn("transition-transform duration-300", {
            "rotate-180": dropdownIsOpen,
          })}
        />
      </div>

      <div
        ref={dropDownRef}
        className={cn(
          "absolute w-full z-10 bg-white rounded-lg flex flex-col mt-2 shadow-md overflow-hidden transition-all duration-300",
          dropDownContainerClassName
        )}
        style={{ maxHeight }}
      >
        {dropDownHeader && (
          <p
            className={cn(
              "text-sm tracking-wide text-gray-500 mt-1 px-2",
              dropDownHeaderClassName
            )}
          >
            {dropDownHeader}
          </p>
        )}
        <div
          className={cn(
            "flex flex-col justify-start items-start py-1 px-1",
            dropDownClassName
          )}
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={cn(
                "text-sm tracking-wide w-full text-left py-1 px-2 rounded-sm text-black hover:bg-gray-200",
                selectedOption === option && "bg-gray-100 font-medium",
                dropDownOptionClassName
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
