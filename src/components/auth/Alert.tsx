import React from "react";
import AlertComponent from "./alertComponents/Alert";
import AlertTitle from "./alertComponents/AlertTitle";
import AlertDescription from "./alertComponents/AlertDescription";
import AlertSuccessIcon from "./alertComponents/AlertSuccessIcon";
import { AlertCircleIcon } from "lucide-react";
import AlertBinIcon from "./alertComponents/AlertBinIcon";

function Alert() {
  return (
    <div className=" flex gap-4 flex-col">
      <AlertComponent>
        <div className="flex gap-3">
          <AlertSuccessIcon />
          <div className="flex flex-col">
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </div>
        </div>
      </AlertComponent>
      <AlertComponent variant="destructive">
        <div className="flex gap-3">
          <AlertCircleIcon />
          <div className="flex flex-col">
            <AlertTitle>
              Please verify your billing information and try again.
            </AlertTitle>
            <AlertDescription>
              <p>Please verify your billing information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
              </ul>
            </AlertDescription>
          </div>
        </div>
      </AlertComponent>
      <AlertComponent>
        <div className="flex gap-3">
          <AlertBinIcon />
          <div className="flex flex-col">
            <AlertTitle>
              This Alert has a title and an icon. No description.
            </AlertTitle>
          </div>
        </div>
      </AlertComponent>
    </div>
  );
}

export default Alert;
