import { observer } from "mobx-react";
import React from "react";
import { Button } from "../Button/Button";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};

  p {
    color: ${(props) => props.theme.textLight};
  }
`;

const QueueIndicator = observer(({ QueueStore }) => {
  if (QueueStore.queue.length === 0) return null;

  return (
    <StyledWrapper className="w-full flex items-center justify-between rounded-lg mb-6 p-3">
      <p>
        You've selected{" "}
        <span className="text-accent-primary font-bold">
          {QueueStore.queue.length}
        </span>{" "}
        author(s) to message
      </p>

      <div className="flex items-center gap-8">
        <Button variant="third" onClick={() => QueueStore.clearQueue()}>
          Deselect all
        </Button>
        <Button>Open Queue</Button>
      </div>
    </StyledWrapper>
  );
});

export default QueueIndicator;
