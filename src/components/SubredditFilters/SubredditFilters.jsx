import {
  faBoxOpenFull,
  faHashtag,
  faThumbsUp,
  faTimer,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Collapsable from "../Collapsable/Collapsable";
import { H3 } from "../headings/H3";
import UpvoteFilter from "../UpvoteFilter/UpvoteFilter";
import ReadtimeFilter from "../ReadtimeFilter/ReadtimeFilter";
import KeywordsFilter from "../KeywordsFilter/KeywordsFilter";
import { Button } from "../Button/Button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import MiscFilters from "../MiscFilters/MiscFilters";

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
      <Collapsable
        className="mt-6"
        header={
          <>
            <FontAwesomeIcon
              icon={faTimer}
              className="mr-2 text-accent-primary"
            />{" "}
            Reading Time (minutes)
          </>
        }
        body={<ReadtimeFilter />}
      />

      <Collapsable
        className="mt-6"
        header={
          <>
            <FontAwesomeIcon
              icon={faHashtag}
              className="mr-2 text-accent-primary"
            />{" "}
            Keywords
          </>
        }
        body={<KeywordsFilter />}
      />

      <Collapsable
        className="mt-6"
        header={
          <>
            <FontAwesomeIcon
              icon={faBoxOpenFull}
              className="mr-2 text-accent-primary"
            />{" "}
            Misc
          </>
        }
        body={<MiscFilters />}
      />
      <Button className="mt-6">
        <FontAwesomeIcon icon={faCheck} className="mr-2" /> Apply Filters
      </Button>
    </section>
  );
};

export default SubredditFilters;
