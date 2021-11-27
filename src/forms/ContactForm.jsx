import React, { useState } from "react";
import Form from "./Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import { Button } from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useContacts } from "../hooks/useContacts";

const ContactForm = () => {
  const { contactMutation } = useContacts();

  const [state, setState] = useState({
    name: "",
    notes: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contactMutation.mutate(state);
  };
  return (
    <Form>
      <InputWrapper label="Name" htmlFor="name">
        <Input
          placeholder="John Smith"
          name="name"
          onInput={(e) => handleChange(e)}
          value={state.name}
        />
      </InputWrapper>

      <InputWrapper label="Notes" htmlFor="notes">
        <Textarea
          name="notes"
          onInput={(e) => handleChange(e)}
          value={state.notes}
        />
      </InputWrapper>

      <Button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faFloppyDisk} className="mr-4" /> Save Contact
      </Button>
    </Form>
  );
};

export default ContactForm;
