import { QueryClient } from "react-query";
import InboxItem from "../components/InboxItem/InboxItem";
import TagList from "../components/TagList/TagList";
import EditTagForm from "../forms/EditTagForm";
import NewTagForm from "../forms/NewTagForm";
import CallbackConfirmEmail from "../pages/CallbackConfirmEmail";
import CallbackReddit from "../pages/CallbackReddit";
import Contacts from "../pages/Dashboard/Contacts";
import Inbox from "../pages/Dashboard/Inbox";
import Index from "../pages/Dashboard/Index";
import Approved from "../pages/Dashboard/ReadingList/Approved";
import Completed from "../pages/Dashboard/ReadingList/Completed";
import TagManager from "../pages/Dashboard/TagManager";
import Home from "../pages/Home/Home";
import LinkReddit from "../pages/LinkReddit/LinkReddit";
import Login from "../pages/Login/Login";
import Pricing from "../pages/Pricing";
import Register from "../pages/Register/Register";
import ModalStore from "../stores/ModalStore";
import ContactList from "../components/ContactList/ContactList";
import EditContactForm from "../forms/EditContactForm";
import ContactForm from "../forms/ContactForm";
import Subscription from "../pages/Dashboard/Settings/Subscription";
import Security from "../pages/Dashboard/Settings/Security";
import Greeting from "../pages/Dashboard/Settings/Greeting";
import Recurring from "../pages/Dashboard/Settings/Recurring";
import Profile from "../pages/Dashboard/Settings/Profile";
import SiteBuilder from "../pages/Dashboard/SiteBuilder/SiteBuilder";
import General from "../pages/Dashboard/SiteBuilder/General";
import Colour from "../pages/Dashboard/SiteBuilder/Colour";
import SubmissionForms from "../pages/Dashboard/SiteBuilder/SubmissionForms";
import Timelines from "../pages/Dashboard/SiteBuilder/Timelines";
import WebsiteStore from "../contexts/websiteContext";
import Submitted from "../pages/Dashboard/Submitted";
import Story from "../pages/Story";
import About from "../pages/About";
import { getStripePlan } from "../api/getStripePlan";
import React from "react";
import NotFound from "../pages/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TOS from "../pages/TOS";

const queryClient = new QueryClient();
const logoRef = React.createRef();
const bannerRef = React.createRef();

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Index />,

    children: [
      {
        path: "/story/:id",
        element: <Story />,
      },
      {
        path: "/inbox",
        children: [
          {
            path: "/",
            element: <Inbox />,
          },
          {
            path: ":messageId",
            element: <InboxItem />,
          },
        ],
      },
      {
        path: "/submitted",
        element: <Submitted />,
      },
      {
        path: "/reading_list",
        children: [
          {
            path: "/approved",
            element: <Approved ModalStore={ModalStore} />,
          },
          {
            path: "/completed",
            element: <Completed />,
          },
        ],
      },
      {
        path: "/tags",
        element: <TagManager />,

        children: [
          {
            path: "/",
            element: <TagList />,
          },
          {
            path: "/new",
            element: <NewTagForm />,
          },
          {
            path: "/edit/:tagId",
            element: <EditTagForm />,
          },
        ],
      },
      {
        path: "/contacts",
        element: <Contacts />,
        children: [
          {
            path: "/",
            element: <ContactList />,
          },
          {
            path: "/edit/:contactId",
            element: <EditContactForm />,
          },
          {
            path: "/save",
            element: <ContactForm />,
          },
        ],
      },
      {
        path: "/settings",
        children: [
          {
            path: "/subscription",
            element: <Subscription />,
          },
          {
            path: "/security",
            element: <Security />,
          },
          {
            path: "/greeting",
            element: <Greeting />,
          },
          {
            path: "/recurring",
            element: <Recurring />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/site-builder",
        element: (
          <WebsiteStore>
            <SiteBuilder logoRef={logoRef} bannerRef={bannerRef} />
          </WebsiteStore>
        ),
        loader: async () => {
          return (
            queryClient.getQueryData("stripePlan") ??
            (await queryClient.fetchQuery("stripePlan", getStripePlan))
          );
        },
        children: [
          {
            path: "/general",
            element: <General logoRef={logoRef} bannerRef={bannerRef} />,
          },
          {
            path: "/colour",
            element: <Colour />,
          },
          {
            path: "/submission-forms",
            element: <SubmissionForms />,
          },
          {
            path: "/timelines",
            element: <Timelines />,
          },
        ],
      },
    ],
  },
  {
    path: "/link-reddit",
    element: <LinkReddit />,
  },
  {
    path: "/callback/reddit",
    element: <CallbackReddit />,
  },
  {
    path: "/callback/confirm_email",
    element: <CallbackConfirmEmail />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TOS />,
  },
  {
    path: "/signout",
    element: () => {
      queryClient.invalidateQueries("*");
      localStorage.removeItem("token");
      window.location.href = "/";
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
