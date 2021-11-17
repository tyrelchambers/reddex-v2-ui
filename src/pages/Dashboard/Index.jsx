import React from "react";
import { useParams } from "react-router";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import ReadingList from "./ReadingList";
import Submitted from "./Submitted";

const Index = () => {
  const { page } = useParams();

  return (
    <DashWrapper>
      {page === "reading_list" && <ReadingList />}
      {page === "submitted" && <Submitted />}
    </DashWrapper>
  );
};

export default Index;
