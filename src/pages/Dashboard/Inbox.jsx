import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import InboxItem from "../../components/InboxItem/InboxItem";
import Input from "../../components/Input/Input";
import Subtitle from "../../components/Subtitle/Subtitle";
import { useRedditInbox } from "../../hooks/useRedditInbox";
import { useTokens } from "../../hooks/useTokens";
import { useUser } from "../../hooks/useUser";
import Loader from "../../components/Loader/Loader";

const StyledWrapper = styled.div`
  max-height: calc(100vh - 40px);
  overflow: auto;
`;

const Inbox = () => {
  const { userQuery } = useUser();
  const { redditAccessToken } = useTokens();
  const { inboxQuery } = useRedditInbox({
    access_token: redditAccessToken.data?.access_token,
  });

  return (
    <StyledWrapper>
      <div className="flex gap-4  w-full">
        <Input placeholder="Search by keywords..." icon={faSearch} />
        <Button>Search</Button>
      </div>

      <main className="mt-10">
        <H1>Inbox</H1>
        <Subtitle>
          Your Reddit-connected inbox. Showing your latest messages.
        </Subtitle>

        {inboxQuery.isLoading && (
          <section className="w-full flex justify-center mt-10 ">
            <Loader size="2x" />
          </section>
        )}

        {!inboxQuery.isLoading && (
          <div className="mt-10 grid grid-cols-2 gap-8 ">
            {inboxQuery.data &&
              inboxQuery.data.data.data.children.map((message) => (
                <InboxItem data={message} />
              ))}
          </div>
        )}
      </main>
    </StyledWrapper>
  );
};

export default Inbox;
