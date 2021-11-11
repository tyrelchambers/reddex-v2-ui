import { faThumbsUp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Collapsable from "../Collapsable/Collapsable";
import { H3 } from "../headings/H3";
import UpvoteFilter from "../UpvoteFilter/UpvoteFilter";
const SubredditFilters = () => {
  return (
    <section className="flex flex-col w-full">
      <H3>Filters</H3>

      <Collapsable
        className="mt-6"
        header={
          <>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="mr-2 text-accent-primary"
            />{" "}
            Upvotes
          </>
        }
        body={<UpvoteFilter />}
      />
    </section>
  );
};

export default SubredditFilters;
