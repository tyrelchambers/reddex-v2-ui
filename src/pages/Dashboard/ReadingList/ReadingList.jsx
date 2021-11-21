import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Input from "../../../components/Input/Input";
import Approved from "./Approved";
import Completed from "./Completed";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownFromDottedLine,
  faArrowUpFromDottedLine,
} from "@fortawesome/pro-duotone-svg-icons";
import { Button } from "../../../components/Button/Button";
import { useUser } from "../../../hooks/useUser";

const ReadingList = () => {
  const { sub_page } = useParams();
  const { query } = useUser();

  if (!query.data) return null;

  return (
    <>
      <section className="flex justify-between ">
        <div className="flex gap-4 max-w-xl w-full">
          <Input placeholder="Search by keywords..." icon={faSearch} />
          <Button>Search</Button>
        </div>

        {sub_page !== "completed" && (
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
          {sub_page === "approved" && <Approved user={query.data} />}
          {sub_page === "completed" && <Completed user={query.data} />}
        </div>
      </section>
    </>
  );
};

export default ReadingList;
