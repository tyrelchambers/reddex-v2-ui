// export const INDEX = "/";
// export const LOGIN = "/login";
// export const REGISTER = "/register";
// export const DASHBOARD = "/dashboard";
// export const DASHBOARD_PAGE = "/dashboard/:page";
// export const DASHBOARD_DETAIL = "/dashboard/:page/:sub_page";
// export const DASHBOARD_THIRD = "/dashboard/:page/:sub_page/:third_page";
// export const FORGOT_PASSWORD = "/forgot-password";
// export const LINK_REDDIT = "/link-reddit";
// export const CALLBACK_REDDIT = "/callback/reddit";
// export const CALLBACK_EMAIL = "/callback/confirm_email";
// export const PRICING = "/pricing";

import { Navigate } from "react-location";
import CallbackConfirmEmail from "../pages/CallbackConfirmEmail";
import CallbackReddit from "../pages/CallbackReddit";
import Index from "../pages/Dashboard/Index";
import Home from "../pages/Home/Home";
import LinkReddit from "../pages/LinkReddit/LinkReddit";
import Login from "../pages/Login/Login";
import Pricing from "../pages/Pricing";
import Register from "../pages/Register/Register";

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
        path: "/reading_list",
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
