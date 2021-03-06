import React, { useEffect, useState } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faCircleInfo,
  faPaperPlaneTop,
  faTimes,
  faTrash,
} from "@fortawesome/pro-solid-svg-icons";

import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../headings/h2";
import Loader from "../Loader/Loader";
import Textarea from "../Textarea/Textarea";
import { composeUrl } from "../../constants";
import { faNotes } from "@fortawesome/pro-duotone-svg-icons";
import { formatSubject } from "../../utils/formatSubject";
import { getRedditAccessToken } from "../../api/getRedditAccessToken";
import { sendMessageToAuthor } from "../../api/sendMessageToAuthor";
import styled from "styled-components";
import { useContacted } from "../../hooks/useContacted";
import { useContacts } from "../../hooks/useContacts";
import { useStory } from "../../hooks/useStory";

const StyledWrapper = styled.div`
  .text-header {
    color: ${(props) => props.theme.text};
  }

  .text {
    color: ${(props) => props.theme.textLight};
  }

  .contact-info {
    background: ${(props) => props.theme.backgroundSecondary};
  }
`;

const PostQueueItem = ({
  post,
  ModalStore,
  next,
  previous,
  showNext,
  showPrevious,
  user,
  removeHandler,
}) => {
  if (!post) return null;

  const { contactQuery } = useContacts();
  const { contactedQuery, contactedMutation } = useContacted();
  const { storyMutation, addToUsed } = useStory();
  const [isSending, setIsSending] = useState(false);

  const contactExists =
    contactQuery.data &&
    contactQuery.data.filter((c) => c.name === post.author)[0];

  const hasBeenContacted =
    contactedQuery.data &&
    contactedQuery.data.filter((c) => c.name === post.author)[0];

  const isLoading = contactQuery.isLoading || contactedQuery.isLoading;

  const [showContactInfo, setShowContactInfo] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    if (hasBeenContacted) {
      setMessage(user.Profile.recurring || "");
    } else {
      setMessage(user.Profile.greeting || "");
    }
    return () => {
      setMessage(null);
    };
  }, [post, user.Profile.recurring, user.Profile.greeting, hasBeenContacted]);

  const submitHandler = async () => {
    const { access_token } = await getRedditAccessToken();
    setIsSending(true);
    const body = new FormData();
    body.set("to", post.author);
    body.set("subject", formatSubject(post.title));
    body.set("text", message);

    sendMessageToAuthor({
      link: composeUrl,
      access_token,
      body,
    })
      .then(() => {
        contactedMutation.mutate({
          name: post.author,
        });

        storyMutation.mutate(post);
        addToUsed.mutate({ post_id: post.post_id });
      })
      .catch((err) => {
        console.log(err);
      });
    removeHandler(post);

    setIsSending(false);
  };

  return (
    <StyledWrapper>
      <header className="flex justify-between w-full p-6">
        <H2 textSize="text-lg sm:text-xl">Request Permission</H2>

        <div className="flex items-center gap-8">
          {contactExists && (
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-blue-500"
              title={`${post.author} is a contact`}
              onClick={() => setShowContactInfo(!showContactInfo)}
            />
          )}

          {showPrevious ? (
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={previous}
              className="text-light"
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="opacity-40 text-light"
            />
          )}

          {showNext ? (
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={next}
              className="text-light"
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowRight}
              className="opacity-40 text-light"
            />
          )}

          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => ModalStore.closeModal()}
            className="text"
          />
        </div>
      </header>

      {isLoading && (
        <div className="flex justify-center mt-10">
          <Loader size="2x" />
        </div>
      )}

      {!isLoading && (
        <>
          {showContactInfo && (
            <section className="contact-info p-6">
              <p className="font-bold text-header">
                <FontAwesomeIcon
                  icon={faNotes}
                  className="text-accent-primary mr-4"
                />{" "}
                Contact Notes
              </p>
              <p className="text mt-4 ml-10">{contactExists.notes}</p>
            </section>
          )}
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
              <p className="font-bold text">Message</p>
              {user.Profile.greeting && (
                <Button
                  variant="third"
                  onClick={() => setMessage(user.Profile.greeting)}
                >
                  Greeting
                </Button>
              )}

              {user.Profile.recurring && (
                <Button
                  variant="third"
                  onClick={() => setMessage(user.Profile.recurring)}
                >
                  Recurring
                </Button>
              )}
            </div>

            <Textarea
              placeholder="What would you like to say?"
              className="w-full mt-4"
              value={message}
              onInput={(e) => setMessage(e.target.value)}
            />

            <div className="flex w-full items-center justify-between mt-4">
              <FontAwesomeIcon
                icon={faTrash}
                className="text-gray-500"
                onClick={() => removeHandler(post)}
              />
              <Button
                onClick={(e) => submitHandler(e)}
                loading={isSending}
                disabled={isSending}
              >
                <FontAwesomeIcon icon={faPaperPlaneTop} className="mr-2" /> Send
                Message
              </Button>
            </div>
          </section>
        </>
      )}
    </StyledWrapper>
  );
};

export default PostQueueItem;
