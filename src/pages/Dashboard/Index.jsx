import React from "react";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import Settings from "./Settings/Settings";
import Contacts from "./Contacts";
import Inbox from "./Inbox";
import SiteBuilder from "./SiteBuilder/SiteBuilder";
import Submitted from "./Submitted";
import TagManager from "./TagManager";
import ModalStore from "../../stores/ModalStore";
import { useUser } from "../../hooks/useUser";
import Story from "../Story";
import { Outlet, useRouter } from "react-location";

const Index = () => {
  const router = useRouter();
  const { query } = useUser();
  const activeRoute = router.state.location.pathname;
  const user = query.data;

  return (
    <DashWrapper>
      {/* {activeRoute.includes("submitted") && <Submitted user={user} />}
      {activeRoute.includes("tags") && <TagManager />}
      {activeRoute.includes("contacts") && <Contacts />}
      {activeRoute.includes("settings") && <Settings />}
      {activeRoute.includes("site_builder") && <SiteBuilder />}
      {activeRoute.includes("story") && <Story />} */}
      <Outlet />
    </DashWrapper>
  );
};

export default Index;
