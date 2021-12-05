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
import IsInReadingList from "../IsInReadingList/IsInReadingList";
import { useReadingList } from "../../hooks/useReadingList";
import { Button } from "../Button/Button";
import {
  faBookCircleArrowRight,
  faCircleUser,
} from "@fortawesome/pro-duotone-svg-icons";
import { isInReadingList } from "../../utils/isInReadingList";
import Chat from "../Chat/Chat";
import { useInbox } from "../../hooks/useInbox";

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
  const { approvedList, saveToApproved } = useReadingList();
  const { messageQuery } = useInbox({
    author: redditMessage.data?.dest,
    subject: redditMessage.data?.subject,
  });

  const user = query.data;

  if (!redditMessage.data) return null;

  const chatList = {
    ...(redditMessage.data.replies && {
      replies: redditMessage.data.replies.data.children,
    }),
    firstMessage: { ...redditMessage.data },
  };

  return (
    <StyledWrapper>
      {redditMessage.isLoading && <Loader size="2x" />}

      {redditMessage.data && (
        <main>
          <header>
            <div className="flex items-center justify-between">
              <p className="text-light">
                {format(
                  new Date(redditMessage.data.created) * 1000,
                  "MMMM do, yyy"
                )}
              </p>
              {messageQuery.data && (
                <>
                  {!isInReadingList(approvedList, redditMessage.data) && (
                    <Button
                      onClick={() => saveToApproved.mutate(redditMessage.data)}
                      className="text-sm"
                    >
                      <FontAwesomeIcon
                        icon={faBookCircleArrowRight}
                        className="mr-2 "
                      />
                      Add to reading list
                    </Button>
                  )}
                </>
              )}
            </div>
            <H2 className="mt-6 text-3xl">{redditMessage.data.subject}</H2>
            <p className="mt-2 text-light">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-accent-primary mr-4"
              />
              {redditMessage.data.dest}
            </p>
            <div className="flex items-center">
              <IsInReadingList
                approvedList={approvedList}
                message={redditMessage.data}
              />
            </div>
          </header>

          <hr className="mt-10 mb-10" />

          <section className="chat-list flex flex-col gap-6 max-w-3xl">
            <Chat message={chatList.firstMessage} user={user} isFirstMessage />

            {chatList.replies &&
              chatList.replies.map((reply, id) => (
                <Chat message={reply.data} user={user} key={id} />
              ))}
          </section>
        </main>
      )}
    </StyledWrapper>
  );
};

export default InboxItem;
