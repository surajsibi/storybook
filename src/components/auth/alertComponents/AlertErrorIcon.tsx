import React from "react";
import { CircleAlert } from "lucide-react";
function AlertErrorIcon() {
  return (
    <div className="row-span-2   items-center justify-center">
      <CircleAlert aria-label="error" color="red" size={20} />
    </div>
  );
}

export default AlertErrorIcon;
