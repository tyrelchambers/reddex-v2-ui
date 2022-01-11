import { faCirclePlus, faSearch } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet } from "react-location";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import Subtitle from "../../components/Subtitle/Subtitle";
import { StyledLink } from "../../globalStyles";

const Contacts = () => {
  return (
    <section>
      <header className="flex flex-col-reverse sm:flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          <Input placeholder="Search by keywords..." icon={faSearch} />
          <StyledLink to="/dashboard/contacts/save" className="text-center">
            <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
            Create contact
          </StyledLink>
        </div>
        <div>
          <H1>Contacts</H1>
          <Subtitle>
            Create contacts in order to keep track of people you've contacted.
          </Subtitle>
        </div>
      </header>

      <main className="mt-10">
        <Outlet />
      </main>
    </section>
  );
};

export default Contacts;
