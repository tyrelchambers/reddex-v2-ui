import { QueryClient } from "react-query";
import { getUser } from "../api/getUser";
import InboxItem from "../components/InboxItem/InboxItem";
import TagList from "../components/TagList/TagList";
import EditTagForm from "../forms/EditTagForm";
import NewTagForm from "../forms/NewTagForm";
import CallbackConfirmEmail from "../pages/CallbackConfirmEmail";
import CallbackReddit from "../pages/CallbackReddit";
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

export const routes = [
  {
    path: "/",
    element: <Home />,
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
];
