import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useTag } from "../hooks/useTag";
import Form from "./Form";
import Input from "../components/Input/Input";
import { useReadingList } from "../hooks/useReadingList";
import RSelect from "../components/RSelect/RSelect";
import Loader from "../components/Loader/Loader";
import { useMatch } from "react-location";
import { H2 } from "../components/headings/h2";

const EditTagForm = () => {
  const {
    params: { tagId },
  } = useMatch();
  const [state, setState] = useState("");
  const { updateTagMutation, tagQuery } = useTag(tagId);
  const { approvedList } = useReadingList();
  const [attachedStories, setAttachedStories] = useState([]);

  useEffect(() => {
    if (tagQuery.data) {
      setState({ ...tagQuery.data });
      setAttachedStories(tagQuery.data.stories);
    }
  }, [tagId, tagQuery.data]);

  const submitHandler = () => {
    updateTagMutation.mutate({
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
      {tagQuery.isLoading && <Loader size="2x" />}
      {tagQuery.data && (
        <>
          <H2>
            Edit tag - <span className="text-accent-primary">{state.tag}</span>
          </H2>
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
              value={attachedStories.map((story) => ({
                ...story,
                value: story.title,
                label: story.title,
              }))}
            />
          </InputWrapper>

          <Button onClick={submitHandler}>Save tag</Button>
        </>
      )}
    </Form>
  );
};

export default EditTagForm;
