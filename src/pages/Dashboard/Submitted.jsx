import React from "react";
import DashWrapper from "../../layouts/DashWrapper/DashWrapper";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import { faSearch } from "@fortawesome/pro-duotone-svg-icons";

const Submitted = () => {
  return (
    <DashWrapper>
      <div className="flex gap-4 max-w-xl w-full">
        <Input placeholder="Search by keywords..." icon={faSearch} />
      </div>
      <section className="mt-10">
        <H1>Submitted</H1>
      </section>
    </DashWrapper>
  );
};

export default Submitted;
