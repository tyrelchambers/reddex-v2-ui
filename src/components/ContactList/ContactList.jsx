import React from "react";
import { useContacts } from "../../hooks/useContacts";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const { contactQuery } = useContacts();

  return (
    <div className="grid grid-cols-3 mt-10 gap-6">
      {contactQuery.data &&
        contactQuery.data.length > 0 &&
        contactQuery.data.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
    </div>
  );
};

export default ContactList;
