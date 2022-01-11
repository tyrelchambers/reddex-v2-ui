import React, { useEffect, useState } from "react";
import { H2 } from "../components/headings/h2";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useContact } from "../hooks/useContact";
import Form from "./Form";
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import { Button } from "../components/Button/Button";
import Loader from "../components/Loader/Loader";
import { useMatch } from "react-location";

const EditContactForm = () => {
  const {
    params: { contactId },
  } = useMatch();
  const { contact, updateContact } = useContact({ uuid: contactId });

  const [state, setstate] = useState({
    name: "",
    notes: "",
  });

  useEffect(() => {
    if (contact.data) {
      setstate({ ...contact.data });
    }
  }, [contactId, contact.data]);

  const submitHandler = () => {
    updateContact.mutate(state);
  };

  return !contact.data ? (
    <Loader size="2x" />
  ) : (
    <Form className="max-w-md mt-10">
      <H2>
        Edit Contact -{" "}
        <span className="text-accent-primary">{contact.data.name}</span>
      </H2>

      <InputWrapper label="Name" htmlFor="name">
        <Input
          placeholder="John Smith"
          value={state.name}
          onChange={(e) => setstate({ ...state, name: e.target.value })}
        />
      </InputWrapper>

      <InputWrapper label="Notes" htmlFor="notes">
        <Textarea
          placeholder="Notes"
          value={state.notes}
          onChange={(e) => setstate({ ...state, notes: e.target.value })}
        />
      </InputWrapper>

      <Button onClick={submitHandler}>Update</Button>
    </Form>
  );
};

export default EditContactForm;
