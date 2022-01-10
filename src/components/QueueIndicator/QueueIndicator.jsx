import { observer } from "mobx-react";
import React from "react";
import { Button } from "../Button/Button";
import styled from "styled-components";
import PostQueue from "../../layouts/PostQueue/PostQueue";

const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};

  p {
    color: ${(props) => props.theme.textLight};
  }

  @media screen and (max-width: 510px) {
    flex-direction: column;
    margin-top: 2em;
    > p {
      margin-bottom: 1rem;
    }
  }
`;

const QueueIndicator = observer(({ QueueStore, ModalStore }) => {
  if (QueueStore.queue.length === 0) return null;

  const openModal = () => {
    ModalStore.openModal();
    ModalStore.setModalContent(
      <PostQueue ModalStore={ModalStore} QueueStore={QueueStore} />
    );
  };

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
        <Button onClick={openModal}>Open Queue</Button>
      </div>
    </StyledWrapper>
  );
});

export default QueueIndicator;
