import React, { useState } from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RSelect from "../components/RSelect/RSelect";
import { subredditCategories, timeframeOptions } from "../constants";
import Form from "./Form";
import { Button } from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import FormError from "../components/FormError/FormError";

const SubredditSearchForm = ({
  executeSearch,
  subreddit,
  setSubreddit,
  categoryHandler,
  categoryState,
  timeframeHandler,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  return (
    <Form onSubmit={handleSubmit(executeSearch)}>
      <InputWrapper label="Enter the subreddit">
        <Input
          customIcon={<p className="  font-black">R/</p>}
          placeholder="subreddit"
          value={subreddit}
          onInput={(e) =>
            setSubreddit(e.target.value.replace(/\s/g, "").trim().toLowerCase())
          }
          {...register("subreddit", {
            required: {
              value: true,
              message: "Please enter a subreddit",
            },
          })}
        />
        {errors.subreddit && <FormError message={errors.subreddit.message} />}
      </InputWrapper>

      <RSelect
        options={subredditCategories}
        onChange={(v) => categoryHandler(v)}
      />

      {(categoryState.category === "top" ||
        categoryState.category === "controversial") && (
        <RSelect
          options={timeframeOptions}
          onChange={(v) => timeframeHandler(v)}
        />
      )}

      <Button className="w-full" type="submit">
        <FontAwesomeIcon icon={faSearch} className="mr-4" />
        Search
      </Button>
    </Form>
  );
};

export default SubredditSearchForm;
