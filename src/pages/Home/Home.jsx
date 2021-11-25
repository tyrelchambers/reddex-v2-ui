import React, { useState } from "react";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import { deleteExistingPosts } from "../../api/deleteExistingPosts";
import { getPostsFromReddit } from "../../api/getPostsFromReddit";
import { savePostsToDatabase } from "../../api/savePostsToDatabase";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import QueueIndicator from "../../components/QueueIndicator/QueueIndicator";
import RecentlySearched from "../../components/RecentlySearched/RecentlySearched";
import RPagination from "../../components/RPagination/RPagination";
import SubredditFilters from "../../components/SubredditFilters/SubredditFilters";
import SubredditSearchForm from "../../forms/SubredditSearchForm";
import { usePostFilter } from "../../hooks/usePostFilter";
import { usePosts } from "../../hooks/usePosts";
import { usePostToken } from "../../hooks/usePostToken";
import { useRedditPosts } from "../../hooks/useRedditPosts";
import { useUser } from "../../hooks/useUser";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import QueueStore from "../../stores/QueueStore";
import { formatRedditPosts } from "../../utils/formatRedditPosts";

const StyledGrid = styled.section`
  grid-auto-rows: 350px;
`;

const StyledSide = styled.section`
  width: 400px;
`;

const Home = () => {
  const queryClient = useQueryClient();
  const { query } = useUser();
  const { filters, dispatch } = usePostFilter();
  usePostToken();
  const [subreddit, setSubreddit] = useState("");
  const [page, setPage] = useState(1);
  const [categoryState, setCategoryState] = useState({
    category: "hot",
    timeframe: "day",
  });

  const redditPostQuery = useRedditPosts({
    subreddit,
    category: categoryState,
  });
  const { posts, getPosts } = usePosts({
    page,
    filterQuery: filters,
  });

  const isLoading = getPosts.isLoading || redditPostQuery.isFetching;

  const categoryHandler = (data) => {
    setCategoryState({
      ...categoryState,
      category: data.value,
    });
  };

  const timeframeHandler = (data) => {
    setCategoryState({
      ...categoryState,
      timeframe: data.value,
    });
  };

  const executeSearch = async () => {
    await deleteExistingPosts();

    const results = await redditPostQuery.refetch();
    const formattedPosts = await formatRedditPosts(results.data);
    await savePostsToDatabase({
      posts: formattedPosts,
      subreddit,
    });
    queryClient.invalidateQueries("posts");
  };

  return (
    <Wrapper>
      <main className="w-full max-w-screen-3xl ml-auto mr-auto p-4 flex gap-6">
        <StyledSide>
          <SubredditSearchForm
            executeSearch={executeSearch}
            setSubreddit={setSubreddit}
            categoryHandler={categoryHandler}
            timeframeHandler={timeframeHandler}
            categoryState={categoryState}
            subreddit={subreddit}
          />

          <hr className="mt-6 mb-6" />
          <SubredditFilters
            getPosts={getPosts}
            dispatch={dispatch}
            page={page}
            filters={filters}
          />
          <hr className="mt-6 mb-6" />
          <RecentlySearched />
        </StyledSide>

        <section className="w-full flex-col">
          <QueueIndicator QueueStore={QueueStore} />

          {isLoading && (
            <div className="mt-20 mb-20 flex justify-center">
              <Loader size="2x" />
            </div>
          )}

          {!isLoading && (
            <>
              {posts.posts.length > 0 && (
                <>
                  <StyledGrid className="grid grid-cols-3 flex-1 gap-6 ">
                    {posts.posts
                      .sort((a, b) => {
                        return b.created - a.created;
                      })
                      .map((item, index) => (
                        <Card
                          data={item}
                          key={index}
                          user={query.data}
                          QueueStore={QueueStore}
                        />
                      ))}
                  </StyledGrid>
                  <RPagination
                    count={posts.maxPages}
                    shape="rounded"
                    onChange={(_, page) => {
                      setPage(page);
                    }}
                  />
                </>
              )}
            </>
          )}
        </section>
      </main>
    </Wrapper>
  );
};

export default Home;
