import React from "react";
import { useParams } from "react-router";
import { H1 } from "../../../components/headings/h1";
import Subtitle from "../../../components/Subtitle/Subtitle";
import General from "./General";

const SiteBuilder = () => {
  const { sub_page } = useParams();

  return (
    <section>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <H1>Site Builder</H1>
          <Subtitle className="mt-2">
            Build your website and advertise what you do.
          </Subtitle>
        </div>
        <a href="/" className="text-accent-primary underline">
          View your site
        </a>
      </div>

      <main className="mt-10">{sub_page === "general" && <General />}</main>
    </section>
  );
};

export default SiteBuilder;
