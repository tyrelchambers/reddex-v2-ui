import React from "react";
import { useParams } from "react-router";
import { useUser } from "../../../hooks/useUser";
import Greeting from "./Greeting";
import Profile from "./Profile";
import Recurring from "./Recurring";
import Security from "./Security";

const Account = () => {
  const { sub_page } = useParams();
  const { query } = useUser();

  if (!query.data) return null;

  return (
    <>
      {sub_page === "security" && <Security user={query.data} />}
      {sub_page === "greeting" && <Greeting user={query.data} />}
      {sub_page === "recurring" && <Recurring user={query.data} />}
      {sub_page === "profile" && <Profile user={query.data} />}
    </>
  );
};

export default Account;
