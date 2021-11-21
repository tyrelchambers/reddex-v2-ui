import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../components/Button/Button";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Textarea from "../components/Textarea/Textarea";
import Form from "./Form";

const GreetingForm = ({ user }) => {
  return (
    <Form>
      <InputWrapper label="Greeting Message">
        <Textarea placeholder="Recurring message..." />
      </InputWrapper>
      <div className="w-full flex items-center justify-between">
        <p className="from">
          From:{" "}
          <span className="font-bold">{user.Profile.reddit_profile.name}</span>
        </p>
        <Button>
          <FontAwesomeIcon icon={faFloppyDisk} className="mr-4" />
          Save Message
        </Button>
      </div>
    </Form>
  );
};

export default GreetingForm;
