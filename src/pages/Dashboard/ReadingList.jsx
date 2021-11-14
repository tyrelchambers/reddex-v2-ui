import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Input from "../../components/Input/Input";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import Approved from "./Approved";
import { Button } from "../../components/Button/Button";
import Completed from "./Completed";
import { useTab } from "../../contexts/tabContext";
import { useLocation } from "react-router";

const ReadingList = () => {
  const { tab, setTab } = useTab();
  const location = useLocation();

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    setTab(url.get("tab"));
  }, [location.search, setTab]);
  return (
    <DashWrapper>
      <div className="flex gap-4 max-w-xl">
        <Input placeholder="Search by keywords..." icon={faSearch} />
        <Button>Search</Button>
      </div>
      <div className="section mt-10">
        <div className="flex items-center">
          {tab === "approved" && <Approved />}
          {tab === "completed" && <Completed />}
        </div>
      </div>
    </DashWrapper>
  );
};

export default ReadingList;
