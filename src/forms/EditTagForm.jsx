import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useTag } from "../hooks/useTag";
import Form from "./Form";
import Input from "../components/Input/Input";
import { useReadingList } from "../hooks/useReadingList";
import RSelect from "../components/RSelect/RSelect";
import Loader from "../components/Loader/Loader";
const EditNewTagForm = () => {
  const { third_page } = useParams();
  const [state, setState] = useState("");
  const { updateTagMutation, tagQuery } = useTag(third_page);
  const { approvedList } = useReadingList();
  const [attachedStories, setAttachedStories] = useState([]);

  useEffect(() => {
    if (tagQuery.data) {
      setState({ ...tagQuery.data });
      setAttachedStories(tagQuery.data.stories);
    }
  }, [third_page, tagQuery.data]);

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
    <Form>
      {tagQuery.isLoading && <Loader />}
      {tagQuery.data && (
        <>
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

export default EditNewTagForm;
