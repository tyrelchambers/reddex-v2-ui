import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Input from "../../components/Input/Input";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import Approved from "./Approved";
import { Button } from "../../components/Button/Button";
import Completed from "./Completed";
import { useTab } from "../../contexts/tabContext";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownFromDottedLine,
  faArrowUpFromDottedLine,
} from "@fortawesome/pro-duotone-svg-icons";

const ReadingList = () => {
  const { tab, setTab } = useTab();
  const location = useLocation();

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    setTab(url.get("tab"));
  }, [location.search, setTab]);
  return (
    <DashWrapper>
      <section className="flex justify-between ">
        <div className="flex gap-4 max-w-xl w-full">
          <Input placeholder="Search by keywords..." icon={faSearch} />
          <Button>Search</Button>
        </div>

        {tab !== "completed" && (
          <div className="flex items-center gap-6">
            <Button variant="third" className="gap-4">
              <FontAwesomeIcon
                icon={faArrowDownFromDottedLine}
                className="text-accent-primary"
              />
              Import
            </Button>
            <Button variant="third" className="gap-4">
              <FontAwesomeIcon
                icon={faArrowUpFromDottedLine}
                className="text-accent-primary"
              />
              Request
            </Button>
          </div>
        )}
      </section>
      <section className="section mt-10">
        <div className="flex items-center">
          {tab === "approved" && <Approved />}
          {tab === "completed" && <Completed />}
        </div>
      </section>
    </DashWrapper>
  );
};

export default ReadingList;
