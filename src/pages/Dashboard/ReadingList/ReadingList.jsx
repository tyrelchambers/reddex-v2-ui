import React from "react";
import Approved from "./Approved";
import Completed from "./Completed";
import { useParams } from "react-router";
import { useUser } from "../../../hooks/useUser";
import ModalStore from "../../../stores/ModalStore";

const ReadingList = () => {
  const { sub_page } = useParams();
  const { query } = useUser();

  if (!query.data) return null;

  return (
    <>
      <section className="section">
        <div className="flex items-center">
          {sub_page === "approved" && (
            <Approved user={query.data} ModalStore={ModalStore} />
          )}
          {sub_page === "completed" && <Completed user={query.data} />}
        </div>
      </section>
    </>
  );
};

export default ReadingList;
