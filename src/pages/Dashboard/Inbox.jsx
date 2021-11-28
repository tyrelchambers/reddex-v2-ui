import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import InboxListItem from "../../components/InboxListItem/InboxListItem";
import Input from "../../components/Input/Input";
import Subtitle from "../../components/Subtitle/Subtitle";
import { useRedditInbox } from "../../hooks/useRedditInbox";
import { useTokens } from "../../hooks/useTokens";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router";
import InboxItem from "../../components/InboxItem/InboxItem";
import { useUser } from "../../hooks/useUser";
import { useRedditInboxSearch } from "../../hooks/useRedditInboxSearch";
import RSelect from "../../components/RSelect/RSelect";
import { inboxSearchOptions } from "../../constants";

const StyledWrapper = styled.div`
  max-height: calc(100vh - 40px);
  overflow: auto;
`;

const Inbox = () => {
  const [search, setSearch] = useState({
    value: "",
    category: inboxSearchOptions[0].value,
  });
  const { redditAccessToken } = useTokens();
  const { inboxQuery } = useRedditInbox({
    access_token: redditAccessToken.data?.access_token,
  });
  const inboxSearch = useRedditInboxSearch({
    query: search,
    access_token: redditAccessToken.data?.access_token,
  });

  const { sub_page } = useParams();
  const { query } = useUser();

  return (
    <StyledWrapper>
      {sub_page && <InboxItem />}
      {!sub_page && (
        <>
          <div className="flex gap-4 h-12 w-full">
            <RSelect
              options={inboxSearchOptions}
              className="w-44 h-full"
              onChange={(e) => setSearch({ ...search, category: e.value })}
            />
            <Input
              placeholder={`Search by ${search.category}`}
              icon={faSearch}
              value={search.value}
              onInput={(e) => setSearch({ ...search, value: e.target.value })}
              className="h-full"
            />

            <Button onClick={() => inboxSearch.refetch()}>Search</Button>
          </div>
          <main className="mt-10">
            <H1>Inbox</H1>
            <Subtitle>
              Your Reddit-connected inbox. Showing your latest messages.
            </Subtitle>

            {(inboxQuery.isLoading || inboxSearch.isFetching) && (
              <section className="w-full flex justify-center mt-10 ">
                <Loader size="2x" />
              </section>
            )}

            {inboxSearch.data && (
              <div className="mt-10 grid grid-cols-2 gap-8 ">
                {inboxSearch.data.map((message, i) => (
                  <InboxListItem data={message} user={query.data} key={i} />
                ))}
              </div>
            )}

            {!inboxQuery.isLoading && !inboxSearch.data && (
              <div className="mt-10 grid grid-cols-2 gap-8 ">
                {inboxQuery.data &&
                  inboxQuery.data.data.data.children.map((message, i) => (
                    <InboxListItem data={message} user={query.data} key={i} />
                  ))}
              </div>
            )}
          </main>
        </>
      )}
    </StyledWrapper>
  );
};

export default Inbox;
