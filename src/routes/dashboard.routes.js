import {
  faAddressBook,
  faBooks,
  faHammer,
  faInbox,
  faInboxIn,
  faTags,
  faUserCog,
} from "@fortawesome/pro-duotone-svg-icons";
export const nav = [
  {
    label: "Reading List",
    icon: faBooks,
    value: "reading_list",
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
    value: "account",
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
    value: "site_builder",
    children: [
      {
        label: "General Settings",
        slug: "/site_builder/general",
      },
      {
        label: "Colour Theme",
        slug: "/site_builder/colour",
      },
      {
        label: "Submission Form",
        slug: "/site_builder/submission_forms",
      },
      {
        label: "Timelines",
        slug: "/site_builder/timelines",
      },
    ],
  },
];
