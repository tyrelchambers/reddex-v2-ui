import React from "react";
import { useParams } from "react-router";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import Account from "./Account/Account";
import Contacts from "./Contacts";
import Inbox from "./Inbox";
import ReadingList from "./ReadingList";
import Submitted from "./Submitted";
import TagManager from "./TagManager";

const Index = () => {
  const { page } = useParams();

  return (
    <DashWrapper>
      {page === "reading_list" && <ReadingList />}
      {page === "submitted" && <Submitted />}
      {page === "tags" && <TagManager />}
      {page === "contacts" && <Contacts />}
      {page === "inbox" && <Inbox />}
      {page === "account" && <Account />}
    </DashWrapper>
  );
};

export default Index;
