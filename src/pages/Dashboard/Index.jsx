import React from "react";
import { useParams } from "react-router";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import Settings from "./Settings/Settings";
import Contacts from "./Contacts";
import Inbox from "./Inbox";
import ReadingList from "./ReadingList/ReadingList";
import SiteBuilder from "./SiteBuilder/SiteBuilder";
import Submitted from "./Submitted";
import TagManager from "./TagManager";
import ModalStore from "../../stores/ModalStore";

const Index = () => {
  const { page } = useParams();

  return (
    <DashWrapper>
      {page === "reading_list" && <ReadingList ModalStore={ModalStore} />}
      {page === "submitted" && <Submitted />}
      {page === "tags" && <TagManager />}
      {page === "contacts" && <Contacts />}
      {page === "inbox" && <Inbox />}
      {page === "settings" && <Settings />}
      {page === "site_builder" && <SiteBuilder />}
    </DashWrapper>
  );
};

export default Index;
