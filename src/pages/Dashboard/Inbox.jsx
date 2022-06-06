import React, { useState } from "react";

import { Button } from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import InboxListItem from "../../components/InboxListItem/InboxListItem";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import { Outlet } from "react-location";
import RSelect from "../../components/RSelect/RSelect";
import Subtitle from "../../components/Subtitle/Subtitle";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { inboxSearchOptions } from "../../constants";
import styled from "styled-components";
import { useQueryClient } from "react-query";
import { useRedditInbox } from "../../hooks/useRedditInbox";
import { useRedditInboxSearch } from "../../hooks/useRedditInboxSearch";
import { useTokens } from "../../hooks/useTokens";
import { useUser } from "../../hooks/useUser";

const StyledWrapper = styled.div`
  overflow: auto;
  height: 100%;
  min-height: 100vh;
`;

const Inbox = () => {
  const queryClient = useQueryClient();
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

  const { query } = useUser();

  const resetSearch = () => {
    setSearch({
      value: "",
      category: inboxSearchOptions[0].value,
    });

    queryClient.removeQueries("inboxSearch");
  };

  return (
    <StyledWrapper>
      <header className="flex flex-col-reverse sm:flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:h-12 h-auto w-full">
          <RSelect
            options={inboxSearchOptions}
            setDefault
            className="w-full sm:w-44 h-full"
            onChange={(e) => setSearch({ ...search, category: e.value })}
          />
          <Input
            placeholder={`Search...`}
            icon={faSearch}
            value={search.value}
            onInput={(e) => setSearch({ ...search, value: e.target.value })}
            className="h-full"
          />

          {search.value && (
            <Button variant="secondary" onClick={resetSearch}>
              Reset
            </Button>
          )}

          <Button onClick={() => inboxSearch.refetch()}>Search</Button>
        </div>
        <div>
          <H1>Inbox</H1>
          <Subtitle>
            Your Reddit-connected inbox. Showing your latest messages.
          </Subtitle>
        </div>
      </header>
      <main className="mt-10 inbox-main">
        {(inboxQuery.isLoading || inboxSearch.isFetching) && (
          <section className="w-full flex justify-center mt-10 ">
            <Loader size="2x" />
          </section>
        )}

        {!inboxSearch.data?.length && inboxSearch.isFetched && (
          <p className="text">No results found!</p>
        )}

        <section>
          {inboxSearch.data && (
            <div className="mt-10 grid grid-cols-1 gap-8 ">
              {inboxSearch.data.map((message, i) => (
                <InboxListItem data={message} user={query.data} key={i} />
              ))}
            </div>
          )}

          {!inboxQuery.isLoading &&
            !inboxSearch.isFetching &&
            !inboxSearch.data && (
              <div className="mt-10 grid grid-cols-1 gap-8 ">
                {inboxQuery.data &&
                  inboxQuery.data.data.data.children.map((message, i) => (
                    <InboxListItem data={message} user={query.data} key={i} />
                  ))}
              </div>
            )}
        </section>
      </main>
      <Outlet />
    </StyledWrapper>
  );
};

export default Inbox;
