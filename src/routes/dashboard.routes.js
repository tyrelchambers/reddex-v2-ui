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
    label: "Settings",
    icon: faUserCog,
    value: "settings",
    children: [
      {
        label: "Subscription",
        slug: "/settings/subscription",
      },
      {
        label: "Login & Security",
        slug: "/settings/security",
      },
      {
        label: "Profile",
        slug: "/settings/profile",
      },
      {
        label: "Greeting message",
        slug: "/settings/greeting",
      },
      {
        label: "Recurring Message",
        slug: "/settings/recurring",
      },
    ],
  },
  {
    label: "Site Builder",
    icon: faHammer,
    value: "site-builder",
    children: [
      {
        label: "General Settings",
        slug: "/site-builder/general",
      },
      {
        label: "Colour Theme",
        slug: "/site-builder/colour",
      },
      {
        label: "Submission Form",
        slug: "/site-builder/submission-forms",
      },
      {
        label: "Timelines",
        slug: "/site-builder/timelines",
      },
    ],
  },
];
