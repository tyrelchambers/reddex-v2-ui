import React from "react";
import { useRouter } from "react-location";
import { useUser } from "../../../hooks/useUser";
import Greeting from "./Greeting";
import Profile from "./Profile";
import Recurring from "./Recurring";
import Security from "./Security";
import Subscription from "./Subscription";

const Settings = () => {
  const { query } = useUser();
  const router = useRouter();
  const activeRoute = router.state.location.pathname;

  if (!query.data) return null;

  return (
    <>
      {activeRoute.includes("subscription") && <Subscription />}
      {activeRoute.includes("security") && <Security user={query.data} />}
      {activeRoute.includes("greeting") && <Greeting user={query.data} />}
      {activeRoute.includes("recurring") && <Recurring user={query.data} />}
      {activeRoute.includes("profile") && <Profile user={query.data} />}
    </>
  );
};

export default Settings;
