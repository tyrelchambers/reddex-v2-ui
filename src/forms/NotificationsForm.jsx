import React from "react";
import Form from "./Form";
import RToggle from "../components/RToggle/RToggle";
import { Button } from "../components/Button/Button";

const NotificationsForm = () => {
  return (
    <Form className="mt-6">
      <div className="flex gap-6">
        <RToggle />
        <div className="flex-col flex">
          <p className="headline">When a story is submitted</p>
        </div>
      </div>

      <div className="flex gap-6">
        <RToggle />
        <div className="flex-col flex">
          <p className="headline">Website updates and changes</p>
        </div>
      </div>

      <p className="text-light">
        You will always receive critical emails from Reddex. They will only be
        sent when it concerns you or is something you should know.
      </p>

      <Button>Save notifications</Button>
    </Form>
  );
};

export default NotificationsForm;
