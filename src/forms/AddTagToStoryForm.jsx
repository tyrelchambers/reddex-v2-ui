import React, { useState } from "react";
import Form from "./Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RSelect from "../components/RSelect/RSelect";
import { useTags } from "../hooks/useTags";
import Loader from "../components/Loader/Loader";
import { formatOptions } from "../utils/formatOptions";
import { Button } from "../components/Button/Button";
import { useStory } from "../hooks/useStory";

const AddTagToStoryForm = ({ close, postId }) => {
  const { tagsQuery } = useTags();
  const { addTagToStory } = useStory();
  const [state, setState] = useState([]);

  const submitHandler = () => {
    addTagToStory.mutate({ tags: state, storyId: postId });
    close();
  };

  return (
    <Form className="p-3">
      {tagsQuery.isLoading && <Loader />}

      {tagsQuery.data && (
        <>
          <InputWrapper label="Add a tag">
            <RSelect
              options={formatOptions({ options: tagsQuery.data, key: "tag" })}
              setDefault={false}
              onChange={(val) => setState(val)}
              isMulti
            />
          </InputWrapper>

          <div className="flex w-full justify-between">
            <Button variant="third" onClick={close}>
              Cancel
            </Button>
            <Button onClick={submitHandler}>Add tag</Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default AddTagToStoryForm;
