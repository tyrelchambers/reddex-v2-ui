import React, { useState } from "react";
import Form from "./Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Input from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { useTag } from "../hooks/useTag";
import RSelect from "../components/RSelect/RSelect";
import { useReadingList } from "../hooks/useReadingList";
import { H2 } from "../components/headings/h2";

const NewTagForm = () => {
  const { saveTagMutation } = useTag();
  const [state, setState] = useState({
    tag: "",
  });
  const [attachedStories, setAttachedStories] = useState([]);

  const { approvedList } = useReadingList();

  const submitHandler = () => {
    saveTagMutation.mutate({
      tag: state,
      stories: attachedStories.map((story) => story.uuid),
    });
  };

  const formattedStoryOptions =
    approvedList.data &&
    approvedList.data.map((story) => ({
      ...story,
      value: story.post_id,
      label: story.title,
    }));

  return (
    <Form className="max-w-md mt-10">
      <H2>Create a new tag</H2>
      <InputWrapper label="Name" htmlFor="name">
        <Input
          placeholder="A name for your tag"
          value={state.tag}
          onInput={(e) => setState({ ...state, tag: e.target.value })}
        />
      </InputWrapper>

      <InputWrapper
        label="Add to a story"
        subLabel="Add this to a post that you have permission to read."
      >
        <RSelect
          options={formattedStoryOptions || []}
          isMulti
          onChange={(val) => setAttachedStories(val)}
        />
      </InputWrapper>

      <Button onClick={submitHandler}>Save tag</Button>
    </Form>
  );
};

export default NewTagForm;
