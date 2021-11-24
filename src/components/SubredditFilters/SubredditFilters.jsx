import {
  faBoxOpenFull,
  faHashtag,
  faThumbsUp,
  faTimer,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Collapsable from "../Collapsable/Collapsable";
import { H3 } from "../headings/H3";
import { Button } from "../Button/Button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import RSelect from "../RSelect/RSelect";
import { quantityOptions } from "../../constants";
import Input from "../../components/Input/Input";

const SubredditFilters = ({ filters, addFilters, getPosts }) => {
  const [state, setState] = useState(filters);
  const executeSearch = () => {
    addFilters(state);
    console.log(state);
  };

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
      >
        <div className="flex items-center gap-4 h-12 mt-2">
          <RSelect
            options={quantityOptions}
            className="w-56"
            onChange={(e) => setState({ ...state, operator: e.value })}
          />
          <Input
            type="number"
            onInput={(e) => setState({ ...state, upvotes: e.target.value })}
          />
        </div>
      </Collapsable>
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
      >
        <div className="flex items-center gap-4 h-12 mt-2">
          <RSelect
            options={quantityOptions}
            className="w-56"
            onChange={(e) => setState({ ...state, readTimeOperator: e.value })}
          />
          <Input
            type="number"
            onInput={(e) => setState({ ...state, readTime: e.target.value })}
          />
        </div>
      </Collapsable>

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
      >
        <div className="flex items-center gap-4 h-12 mt-2">
          <Input
            type="text"
            placeholder="Comma separated..."
            onInput={(e) => setState({ ...state, keywords: e.target.value })}
          />
        </div>
      </Collapsable>

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
      >
        <div className="flex flex-col gap-2 pt-2">
          <Button variant="secondary">Series Only</Button>
          <Button variant="secondary">Exclude Series</Button>
        </div>
      </Collapsable>

      <Button className="mt-6" variant="secondary">
        Reset Filters
      </Button>

      <Button className="mt-2" onClick={executeSearch}>
        <FontAwesomeIcon icon={faCheck} className="mr-2" /> Apply Filters
      </Button>
    </section>
  );
};

export default SubredditFilters;
