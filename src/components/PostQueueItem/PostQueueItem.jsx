import {
  faArrowLeft,
  faArrowRight,
  faCircleInfo,
  faPaperPlaneTop,
  faTimes,
  faTrash,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { H2 } from "../headings/h2";
import Textarea from "../Textarea/Textarea";

const StyledWrapper = styled.div`
  .text-header {
    color: ${(props) => props.theme.text};
  }

  .text {
    color: ${(props) => props.theme.textLight};
  }
`;

const PostQueueItem = ({
  post,
  ModalStore,
  next,
  previous,
  showNext,
  showPrevious,
}) => {
  return (
    <StyledWrapper>
      <header className="flex justify-between w-full p-6">
        <H2>Request Permission</H2>

        <div className="flex items-center gap-8">
          <FontAwesomeIcon icon={faCircleInfo} className="text-blue-500" />
          {showPrevious ? (
            <FontAwesomeIcon icon={faArrowLeft} onClick={previous} />
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} className="opacity-40" />
          )}
          {showNext ? (
            <FontAwesomeIcon icon={faArrowRight} onClick={next} />
          ) : (
            <FontAwesomeIcon icon={faArrowRight} className="opacity-40" />
          )}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => ModalStore.closeModal()}
          />
        </div>
      </header>
      <hr className=" mb-6" />

      <section className="px-6">
        <p className="font-bold text-header mb-2">Author</p>
        <p className=" text ">{post.author}</p>
        <p className="font-bold text-header mb-2 mt-10">Subject</p>
        <p className=" text ">{post.title}</p>
      </section>

      <hr className="mt-6 mb-6" />

      <section className="px-6 message-wrapper">
        <div className="flex items-center gap-6">
          <p className="font-bold">Message</p>
          <Button variant="third">Greeting</Button>
          <Button variant="third">Recurring</Button>
        </div>

        <Textarea
          placeholder="What would you like to say?"
          className="w-full mt-4"
        />

        <div className="flex w-full items-center justify-between mt-4">
          <FontAwesomeIcon icon={faTrash} className="text-gray-500" />
          <Button>
            <FontAwesomeIcon icon={faPaperPlaneTop} className="mr-2" /> Send
            Message
          </Button>
        </div>
      </section>
    </StyledWrapper>
  );
};

export default PostQueueItem;
