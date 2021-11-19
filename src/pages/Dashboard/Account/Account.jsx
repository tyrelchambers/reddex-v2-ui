import React from "react";
import { useParams } from "react-router";
import Security from "./Security";

const Account = () => {
  const { sub_page } = useParams();

  return <>{sub_page === "security" && <Security />}</>;
};

export default Account;
