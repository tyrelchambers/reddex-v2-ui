import {
  faAddressBook,
  faBooks,
  faHammer,
  faInbox,
  faInboxIn,
  faTags,
  faUserCog,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Collapsable from "../../components/Collapsable/Collapsable";

const nav = [
  {
    label: "Reading List",
    icon: faBooks,
    children: [
      {
        label: "Approved",
        slug: "/reading_list/approved",
      },
      {
        label: "Completed",
        slug: "/reading_list/completed",
      },
    ],
  },
  {
    label: "Submitted",
    icon: faInboxIn,
    slug: "/submitted",
  },
  {
    label: "Tag Manager",
    icon: faTags,
    slug: "/tags",
  },
  {
    label: "Contacts",
    icon: faAddressBook,
    slug: "/contacts",
  },
  {
    label: "Inbox",
    icon: faInbox,
    slug: "/inbox",
  },
  {
    label: "Account",
    icon: faUserCog,
    children: [
      {
        label: "Login & Security",
        slug: "/account/security",
      },
      {
        label: "Greeting message",
        slug: "/account/greeting",
      },
      {
        label: "Recurring Message",
        slug: "/account/recurring",
      },
    ],
  },
  {
    label: "Site Builder",
    icon: faHammer,
    children: [],
  },
];

const StyledLi = styled.li`
  a,
  p {
    color: ${(props) => props.theme.textLight};
    font-weight: 500;
  }
`;

const DashNav = () => {
  return (
    <nav className="mt-10">
      <ul className="flex flex-col gap-4">
        {nav.map((item, index) => (
          <StyledLi key={index}>
            {item.slug ? (
              <Link
                to={item.slug}
                className="py-2 px-4 gap-4 flex items-center"
              >
                <FontAwesomeIcon icon={item.icon} />
                <p>{item.label}</p>
              </Link>
            ) : (
              <>
                <Collapsable
                  isNav
                  header={
                    <>
                      <FontAwesomeIcon icon={item.icon} className=" mr-4" />
                      <p>{item.label}</p>
                    </>
                  }
                  body={
                    <>
                      {item.children.map((item) => (
                        <Link
                          to={item.slug}
                          key={item.slug}
                          className="p-3 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </>
                  }
                />
              </>
            )}
          </StyledLi>
        ))}
      </ul>
    </nav>
  );
};

export default DashNav;
