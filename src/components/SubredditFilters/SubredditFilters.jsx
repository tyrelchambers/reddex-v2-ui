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
import { Button } from "../Button/Button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import RSelect from "../RSelect/RSelect";
import { quantityOptions } from "../../constants";
import Input from "../../components/Input/Input";

const SubredditFilters = ({ filters, dispatch, getPosts }) => {
  const executeSearch = () => {
    getPosts.refetch();
  };

  return (
    <section className="flex flex-col w-full">
      <H3>Filters</H3>
      <Collapsable
        className="mt-6"
        onClick={() =>
          dispatch({
            type: "set_filter",
            filter: "upvotes",
            defaults: {
              value: 0,
              operator: quantityOptions[0].value,
            },
          })
        }
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
            defaultValue={quantityOptions[0]}
            className="w-56"
            onChange={(e) =>
              dispatch({
                type: "set_filter_value",
                filter: "upvotes",
                operator: e.value,
              })
            }
          />
          <Input
            type="number"
            defaultValue={0}
            onInput={(e) =>
              dispatch({
                type: "set_filter_value",
                filter: "upvotes",
                value: e.target.value,
              })
            }
          />
        </div>
      </Collapsable>
      <Collapsable
        className="mt-6"
        onClick={() =>
          dispatch({
            type: "set_filter",
            filter: "readTime",
            defaults: {
              value: 0,
              operator: quantityOptions[0].value,
            },
          })
        }
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
            defaultValue={quantityOptions[0]}
            onChange={(e) =>
              dispatch({
                type: "set_filter_value",
                filter: "readTime",
                operator: e.value,
              })
            }
          />
          <Input
            type="number"
            defaultValue={0}
            onInput={(e) =>
              dispatch({
                type: "set_filter_value",
                filter: "readTime",
                value: e.target.value,
              })
            }
          />
        </div>
      </Collapsable>
      <Collapsable
        className="mt-6"
        onClick={() =>
          dispatch({
            type: "set_filter",
            filter: "keywords",
            defaults: {
              value: "",
              operator: null,
            },
          })
        }
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
            onInput={(e) =>
              dispatch({
                type: "set_filter_value",
                filter: "keywords",
                value: e.target.value,
              })
            }
          />
        </div>
      </Collapsable>
      <hr className="mt-4" />
      <div className="flex flex-col gap-2 mt-4">
        <Button
          variant="secondary"
          isSelected={filters.misc && filters.misc.value === "seriesOnly"}
          onClick={() =>
            dispatch({
              type: "set_misc_value",
              filter: "misc",
              value: "seriesOnly",
            })
          }
        >
          Series Only
        </Button>
        <Button
          variant="secondary"
          isSelected={filters.misc && filters.misc.value === "excludeSeries"}
          onClick={() =>
            dispatch({
              type: "set_misc_value",
              filter: "misc",
              value: "excludeSeries",
            })
          }
        >
          Exclude Series
        </Button>
      </div>
      <Button className="mt-4" onClick={executeSearch}>
        <FontAwesomeIcon icon={faCheck} className="mr-2" /> Apply Filters
      </Button>
    </section>
  );
};

export default SubredditFilters;
