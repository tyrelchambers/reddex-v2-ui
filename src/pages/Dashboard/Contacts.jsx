import { faCirclePlus, faSearch } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../../components/Button/Button";
import Contact from "../../components/Contact/Contact";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import Subtitle from "../../components/Subtitle/Subtitle";

const data = [
  {
    username: "John Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    username: "John Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    username: "John Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    username: "John Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

const Contacts = () => {
  return (
    <section>
      <div className="flex gap-4  w-full">
        <Input placeholder="Search by keywords..." icon={faSearch} />
        <Button>
          <FontAwesomeIcon icon={faCirclePlus} className="mr-2" />
          Create contact
        </Button>
      </div>

      <main className="mt-10">
        <H1>Contacts</H1>
        <Subtitle>
          Create contacts in order to keep track of people you've contacted.
        </Subtitle>

        <div className="grid grid-cols-3 mt-10 gap-6">
          {data.length > 0 &&
            data.map((item, index) => (
              <Contact username={item.username} key={index} body={item.body} />
            ))}
        </div>
      </main>
    </section>
  );
};

export default Contacts;
