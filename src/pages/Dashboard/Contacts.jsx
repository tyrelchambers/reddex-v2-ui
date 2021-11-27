import { faCirclePlus, faSearch } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import Subtitle from "../../components/Subtitle/Subtitle";
import ContactForm from "../../forms/ContactForm";
import { StyledLink } from "../../globalStyles";
import { useContacts } from "../../hooks/useContacts";

const Contacts = () => {
  const { contactQuery } = useContacts();
  const { sub_page } = useParams();

  console.log(contactQuery.data);

  return (
    <section>
      <div className="flex gap-4  w-full">
        <Input placeholder="Search by keywords..." icon={faSearch} />
        <StyledLink to="/dashboard/contacts/save">
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
          Create contact
        </StyledLink>
      </div>

      <main className="mt-10">
        <H1>Contacts</H1>
        <Subtitle>
          Create contacts in order to keep track of people you've contacted.
        </Subtitle>

        {!sub_page && (
          <div className="grid grid-cols-3 mt-10 gap-6">
            {contactQuery.data &&
              contactQuery.data.length > 0 &&
              contactQuery.data.map((contact, index) => (
                <Contact key={index} contact={contact} />
              ))}
          </div>
        )}

        {sub_page === "save" && (
          <section className="max-w-md mt-10">
            <ContactForm />
          </section>
        )}
      </main>
    </section>
  );
};

export default Contacts;
