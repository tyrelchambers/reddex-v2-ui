import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../components/Button/Button";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Textarea from "../components/Textarea/Textarea";
import { useUser } from "../hooks/useUser";
import Form from "./Form";

const GreetingForm = ({ user }) => {
  const [greeting, setGreeting] = React.useState(user.Profile.greeting);
  const { update } = useUser();

  const submitHandler = () => {
    update.mutate({ greeting });
  };

  return (
    <Form>
      <InputWrapper label="Greeting Message">
        <Textarea
          placeholder="Recurring message..."
          value={greeting}
          onInput={(e) => setGreeting(e.target.value)}
        />
      </InputWrapper>
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="from">
          From:{" "}
          <span className="font-bold">{user.Profile.reddit_profile.name}</span>
        </p>
        <Button onClick={submitHandler}>
          <FontAwesomeIcon icon={faFloppyDisk} className="mr-4" />
          Save Message
        </Button>
      </div>
    </Form>
  );
};

export default GreetingForm;
