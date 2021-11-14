import React from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RSelect from "../components/RSelect/RSelect";
import { subredditCategories } from "../constants";
import Form from "./Form";
import { Button } from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SubredditSearchForm = () => {
  return (
    <Form>
      <InputWrapper label="Enter the subreddit">
        <Input
          customIcon={<p className="  font-black">R/</p>}
          placeholder="subreddit"
        />
      </InputWrapper>

      <RSelect options={subredditCategories} />

      <Button>
        <FontAwesomeIcon icon={faSearch} className="mr-4" />
        Search
      </Button>
    </Form>
  );
};

export default SubredditSearchForm;
