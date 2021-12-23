import React from "react";
import { useMatch } from "react-location";
import styled from "styled-components";
import { H1 } from "../components/headings/h1";
import Loader from "../components/Loader/Loader";
import { useSubmittedStory } from "../hooks/useSubmittedStory";

const StyledDiv = styled.div`
  .body {
    line-height: 1.8em;
  }
`;

const Story = () => {
  const {
    params: { id },
  } = useMatch();

  const { submittedStory } = useSubmittedStory(id);

  return (
    <StyledDiv className="max-w-screen-sm py-3">
      {submittedStory.isLoading && <Loader />}
      {submittedStory.data && (
        <>
          <H1>{submittedStory.data.story_title}</H1>
          <main
            dangerouslySetInnerHTML={{ __html: submittedStory.data.body }}
            className="text-light body mt-6"
          ></main>
        </>
      )}
    </StyledDiv>
  );
};

export default Story;
