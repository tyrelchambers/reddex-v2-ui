import React from "react";
import { useParams } from "react-router";
import { useRedditMessage } from "../../hooks/useRedditMessage";
import { useTokens } from "../../hooks/useTokens";
import Loader from "../Loader/Loader";
import styled from "styled-components";
import { format } from "date-fns";
import { H2 } from "../headings/h2";
import { useUser } from "../../hooks/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../Avatar/Avatar";

const StyledWrapper = styled.section`
  .text {
    color: ${(props) => props.theme.text};
  }
  .text-light {
    color: ${(props) => props.theme.textLight};
  }

  .text-super-light {
    color: ${(props) => props.theme.textSuperLight};
  }

  .chat {
    line-height: 1.8em;
  }
  .chat:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding: 2em 0;
  }

  .chat-avatar {
    min-width: 75px !important;
  }
`;

const InboxItem = () => {
  const { sub_page } = useParams();
  const { redditAccessToken } = useTokens();
  const { query } = useUser();
  const access_token = redditAccessToken.data?.access_token;
  const { redditMessage } = useRedditMessage({
    id: sub_page,
    access_token: access_token,
  });

  const user = query.data;

  if (!redditMessage.data) return null;

  const chatList = {
    replies: redditMessage.data.replies.data.children,
    firstMessage: { ...redditMessage.data },
  };

  return (
    <StyledWrapper>
      {redditMessage.isLoading && (
        <section className="w-full flex justify-center mt-10 ">
          <Loader size="2x" />
        </section>
      )}

      {redditMessage.data && (
        <main>
          <header>
            <p className="text-light">
              {format(
                new Date(redditMessage.data.created) * 1000,
                "MMMM do, yyy"
              )}
            </p>
            <H2 className="mt-6 text-3xl">{redditMessage.data.subject}</H2>
          </header>

          <hr className="mt-10 mb-10" />

          <section className="chat-list flex flex-col gap-6 max-w-3xl">
            <div className="chat flex">
              <div className="chat-avatar mr-4">
                <Avatar
                  size="medium"
                  url={user.Profile.reddit_profile.snoovatar_img}
                  className="mr-4 block"
                  hasBorder
                />
              </div>
              <div className="flex flex-col">
                <header className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text font-bold text-lg chat-body">
                      {chatList.firstMessage.author ===
                        user.Profile.reddit_profile.name && "You"}{" "}
                      ({user.Profile.reddit_profile.name})
                    </p>
                  </div>
                  <p className="text-super-light">
                    {format(
                      new Date(chatList.firstMessage.created) * 1000,
                      "MMM do, yyy"
                    )}
                  </p>
                </header>
                <p className="text-light mt-4 whitespace-pre-wrap">
                  {chatList.firstMessage.body}
                </p>
              </div>
            </div>
            {chatList.replies.map((reply) => (
              <div className="chat flex">
                <div className="chat-avatar mr-4">
                  {reply.data.author === user.Profile.reddit_profile.name ? (
                    <Avatar
                      size="medium"
                      url={user.Profile.reddit_profile.snoovatar_img}
                      className="mr-4 block"
                      hasBorder
                    />
                  ) : (
                    <Avatar size="medium" className="mr-4 block" hasBorder />
                  )}
                </div>
                <div className="flex flex-col">
                  <header className="flex items-center justify-between">
                    <p className="text font-bold text-lg">
                      <FontAwesomeIcon
                        icon={faReply}
                        className="text-accent-primary mr-4"
                      />{" "}
                      {reply.data.author}
                    </p>
                    <p className="text-super-light ">
                      {format(
                        new Date(reply.data.created) * 1000,
                        "MMM do, yyy"
                      )}
                    </p>
                  </header>
                  <p className="text-light mt-4 whitespace-pre-wrap">
                    {reply.data.body}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </main>
      )}
    </StyledWrapper>
  );
};

export default InboxItem;
