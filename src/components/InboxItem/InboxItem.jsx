import {
  faAddressBook,
  faBookCircleArrowRight,
  faCircleUser,
  faLinkHorizontal,
} from "@fortawesome/pro-duotone-svg-icons";

import { Button } from "../Button/Button";
import Chat from "../Chat/Chat";
import ChatReply from "../ChatReply/ChatReply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "../headings/h2";
import IsInReadingList from "../IsInReadingList/IsInReadingList";
import Loader from "../Loader/Loader";
import React from "react";
import { format } from "date-fns";
import { isInReadingList } from "../../utils/isInReadingList";
import styled from "styled-components";
import { useContact } from "../../hooks/useContact";
import { useContacts } from "../../hooks/useContacts";
import { useInbox } from "../../hooks/useInbox";
import { useMatch } from "react-location";
import { useReadingList } from "../../hooks/useReadingList";
import { useRedditMessage } from "../../hooks/useRedditMessage";
import { useTokens } from "../../hooks/useTokens";
import { useUser } from "../../hooks/useUser";

const StyledWrapper = styled.section`
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
  const {
    params: { messageId },
  } = useMatch();
  const { redditAccessToken } = useTokens();
  const { query } = useUser();
  const access_token = redditAccessToken.data?.access_token;
  const { redditMessage } = useRedditMessage({
    id: messageId,
    access_token: access_token,
  });
  const { approvedList, saveToApproved } = useReadingList();
  const { messageQuery } = useInbox({
    author: redditMessage.data?.dest,
    subject: redditMessage.data?.subject,
  });
  const { contactMutation } = useContacts();
  const { contact } = useContact({
    username: redditMessage.data?.dest,
  });

  const user = query.data;

  if (!redditMessage.data) return null;

  const chatList = {
    ...(redditMessage.data.replies && {
      replies: redditMessage.data.replies.data.children,
    }),
    firstMessage: { ...redditMessage.data },
  };

  const addContact = ({ name }) => {
    contactMutation.mutate({
      name,
    });
  };

  return (
    <StyledWrapper>
      {redditMessage.isLoading && <Loader size="2x" />}

      {redditMessage.data && (
        <main>
          <header className="flex justify-between items-start gap-4 flex-col md:flex-row">
            <div className="flex flex-col">
              <p className="text-light">
                {format(
                  new Date(redditMessage.data.created) * 1000,
                  "MMMM do, yyy"
                )}
              </p>
              <H2 className="mt-4 mb-4 text-xl sm:text-3xl">
                {redditMessage.data.subject}
              </H2>

              <div className="flex flex-col sm:flex-row sm:items-center mt-2 gap-6">
                <a
                  href={`https://reddit.com/u/${redditMessage.data.dest}`}
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="text-accent-primary mr-4"
                  />
                  {redditMessage.data.dest}
                </a>
                <div className="w-10 h-[2px] bg-slate-400"></div>
                {messageQuery.data && (
                  <a
                    href={messageQuery.data?.url}
                    className="text-sm text"
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkHorizontal} className="mr-2" />
                    View on Reddit
                  </a>
                )}
                <IsInReadingList
                  approvedList={approvedList}
                  message={redditMessage.data}
                />
                {contact.data && (
                  <p className="text-sm text">
                    <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                    {redditMessage.data.dest} is a contact
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {!contact.data && (
                <Button
                  variant="secondary"
                  onClick={() => addContact({ name: redditMessage.data.dest })}
                >
                  <FontAwesomeIcon
                    icon={faBookCircleArrowRight}
                    className="mr-2 "
                  />
                  Add to contacts
                </Button>
              )}

              {messageQuery.data &&
                !isInReadingList(approvedList, redditMessage.data) && (
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
            </div>
          </header>

          <hr className="mt-10 mb-10" />

          <section className="chat-list flex flex-col gap-6 max-w-3xl">
            <Chat message={chatList.firstMessage} user={user} isFirstMessage />

            {chatList.replies &&
              chatList.replies.map((reply, id) => (
                <Chat message={reply.data} user={user} key={id} />
              ))}
            <ChatReply
              userToSendMessageTo={redditMessage.data?.name}
              refetch={redditMessage.refetch}
            />
          </section>
        </main>
      )}
    </StyledWrapper>
  );
};

export default InboxItem;
