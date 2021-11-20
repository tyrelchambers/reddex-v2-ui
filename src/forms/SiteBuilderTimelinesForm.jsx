import React from "react";
import Input from "../components/Input/Input";
import RToggle from "../components/RToggle/RToggle";
import Form from "./Form";
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
const SiteBuilderTimelinesForm = () => {
  return (
    <Form className="mt-6">
      <div className="flex flex-col">
        <div className="flex mb-2">
          <RToggle name="timelines" className="mr-4 flex items-center" />
          <div className="flex flex-col">
            <p className="font-bold headline">Activate Youtube</p>
            <p className="subtitle">
              Activate to show the last 5 videos on your website
            </p>
          </div>
        </div>
        <Input icon={faYoutube} placeholder="Your channel id" />
      </div>

      <div className="flex flex-col mt-10">
        <div className="flex mb-2">
          <RToggle name="timelines" className="mr-4" />
          <div className="flex flex-col">
            <p className="font-bold headline">Activate Twitter</p>
            <p className="subtitle">
              Activate to show tweets from your profile
            </p>
          </div>
        </div>
        <Input icon={faTwitter} placeholder="@username" />
      </div>
    </Form>
  );
};

export default SiteBuilderTimelinesForm;
