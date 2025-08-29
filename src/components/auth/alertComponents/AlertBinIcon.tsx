import React from "react";
import { Trash2 } from "lucide-react";

function AlertBinIcon() {
  return (
    <div className="row-span-2   items-center justify-center">
      <Trash2 aria-label="bin" color="gray" size={20} />
    </div>
  );
}

export default AlertBinIcon;
