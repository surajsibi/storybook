import React from "react";
import { CircleCheck } from "lucide-react";

function AlertSuccessIcon() {
  return (
    <div className="row-span-2  items-center justify-center">
      <CircleCheck aria-label="success" color="green" size={20} />
    </div>
  );
}

export default  AlertSuccessIcon;
