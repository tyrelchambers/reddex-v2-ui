import React from "react";
import { useContacts } from "../../hooks/useContacts";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const { contactQuery } = useContacts();

  return (
    <>
      {contactQuery.data && contactQuery.data.length === 0 && (
        <p className="text-light mt-10 italic">No contacts to show</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-6">
        {contactQuery.data &&
          contactQuery.data.length > 0 &&
          contactQuery.data.map((contact, index) => (
            <Contact key={index} contact={contact} />
          ))}
      </div>
    </>
  );
};

export default ContactList;
