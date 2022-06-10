import React, { useState } from "react";

import { Button } from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { faArrowDownFromDottedLine } from "@fortawesome/pro-duotone-svg-icons";
import { faLinkHorizontal } from "@fortawesome/pro-regular-svg-icons";
import { formatRedditPost } from "../utils/formatRedditPost";
import { getStoryFromReddit } from "../api/getStoryFromReddit";
import { toast } from "react-toastify";
import { useReadingList } from "../hooks/useReadingList";
import { useStory } from "../hooks/useStory";

const ImportUrlForm = () => {
  const [state, setState] = useState("");
  const { storyMutation } = useStory();
  const { approvedList } = useReadingList();

  const submitHandler = async () => {
    if (!state) return toast.warn("Please enter a URL");

    const url = `${state.match(/[\s\S]+\//gi)}.json`;

    const story = await getStoryFromReddit(url);
    const formattedStory = formatRedditPost(story);
    storyMutation.mutate(
      {
        ...formattedStory,
        permission: true,
      },
      {
        onSuccess: () => {
          toast.success("Story imported successfully");
          approvedList.refetch();
          setState("");
        },
        onError: () => {
          toast.error("Error importing story");
        },
      }
    );
  };

  return (
    <Form>
      <InputWrapper
        label="Story URL"
        subLabel="This imports a story without asking for permission. In case you are given permission outside Reddex, for example."
        htmlFor="storyUrl"
      >
        <Input
          name="storyUrl"
          placeholder="Your url"
          icon={faLinkHorizontal}
          value={state}
          onInput={(e) => setState(e.target.value)}
        />
      </InputWrapper>
      <div className="flex justify-end">
        <Button className="sm:w-52 w-full" onClick={submitHandler}>
          <FontAwesomeIcon icon={faArrowDownFromDottedLine} className="mr-4 " />
          Import
        </Button>
      </div>
    </Form>
  );
};

export default ImportUrlForm;
