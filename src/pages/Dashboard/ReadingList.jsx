import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Input from "../../components/Input/Input";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import { useTab } from "../../hooks/useTab";
import Approved from "./Approved";
import { Button } from "../../components/Button/Button";

const ReadingList = () => {
  const url = new URLSearchParams(window.location.search);
  const [tab] = useTab(url.get("tab"));

  return (
    <DashWrapper>
      <div className="flex gap-4 max-w-xl">
        <Input placeholder="Search by keywords..." icon={faSearch} />
        <Button>Search</Button>
      </div>
      <div className="section mt-10">
        <div className="flex items-center">
          {tab === "approved" && <Approved />}
        </div>
      </div>
    </DashWrapper>
  );
};

export default ReadingList;
