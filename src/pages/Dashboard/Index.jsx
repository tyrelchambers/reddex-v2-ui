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
import { useUser } from "../../hooks/useUser";
import Story from "../Story";

const Index = () => {
  const { page } = useParams();
  const { query } = useUser();
  const user = query.data;
  return (
    <DashWrapper>
      {page === "reading_list" && <ReadingList ModalStore={ModalStore} />}
      {page === "submitted" && <Submitted user={user} />}
      {page === "tags" && <TagManager />}
      {page === "contacts" && <Contacts />}
      {page === "inbox" && <Inbox />}
      {page === "settings" && <Settings />}
      {page === "site_builder" && <SiteBuilder />}
      {page === "story" && <Story />}
    </DashWrapper>
  );
};

export default Index;
