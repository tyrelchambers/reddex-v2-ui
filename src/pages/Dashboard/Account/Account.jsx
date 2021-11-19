import React from "react";
import { useParams } from "react-router";
import Greeting from "./Greeting";
import Recurring from "./Recurring";
import Security from "./Security";

const Account = () => {
  const { sub_page } = useParams();

  return (
    <>
      {sub_page === "security" && <Security />}
      {sub_page === "greeting" && <Greeting />}
      {sub_page === "recurring" && <Recurring />}
    </>
  );
};

export default Account;
