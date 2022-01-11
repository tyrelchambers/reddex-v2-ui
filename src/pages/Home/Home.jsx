import { data } from "autoprefixer";
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import { deleteExistingPosts } from "../../api/deleteExistingPosts";
import { savePostsToDatabase } from "../../api/savePostsToDatabase";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import MiscInfo from "../../components/MiscInfo/MiscInfo";
import OpenSearch from "../../components/OpenSearch/OpenSearch";
import QueueIndicator from "../../components/QueueIndicator/QueueIndicator";
import RecentlySearched from "../../components/RecentlySearched/RecentlySearched";
import RPagination from "../../components/RPagination/RPagination";
import SubredditFilters from "../../components/SubredditFilters/SubredditFilters";
import SubredditSearchForm from "../../forms/SubredditSearchForm";
import { useExpand } from "../../hooks/useExpand";
import { usePostFilter } from "../../hooks/usePostFilter";
import { usePosts } from "../../hooks/usePosts";
import { usePostToken } from "../../hooks/usePostToken";
import { useRedditPosts } from "../../hooks/useRedditPosts";
import { useSearched } from "../../hooks/useSearched";
import { useUser } from "../../hooks/useUser";
import Grid from "../../layouts/Grid/Grid";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import ModalStore from "../../stores/ModalStore";
import QueueStore from "../../stores/QueueStore";
import { formatRedditPosts } from "../../utils/formatRedditPosts";

const StyledSide = styled.section`
  width: 100%;
  @media screen and (min-width: 769px) {
    width: 100%;
    max-width: 350px;
  }
`;

const Home = () => {
  const queryClient = useQueryClient();
  const {
    query: { data: user },
  } = useUser();
  const { filters, dispatch } = usePostFilter();
  usePostToken();
  const [subreddit, setSubreddit] = useState("");
  const [page, setPage] = useState(1);
  const [categoryState, setCategoryState] = useState({
    category: "hot",
    timeframe: "day",
  });
  const { saveSearched } = useSearched();
  const { open, setOpen } = useExpand();

  const redditPostQuery = useRedditPosts({
    subreddit,
    category: categoryState,
  });

  const { posts, getPosts } = usePosts({
    page,
    filterQuery: filters,
    wpm: user?.Profile.words_per_minute,
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
    if (!subreddit) return;
    await deleteExistingPosts();

    const results = await redditPostQuery.refetch();
    const formattedPosts = await formatRedditPosts(results.data);
    await savePostsToDatabase({
      posts: formattedPosts,
      subreddit,
    });

    if (user) {
      saveSearched.mutate(subreddit);
    }
    queryClient.invalidateQueries("posts");
  };

  return (
    <Wrapper>
      <main className="w-full max-w-screen-3xl ml-auto mr-auto p-4 lg:flex gap-6 ">
        <OpenSearch open={open} setOpen={setOpen} />
        <StyledSide>
          <div className={`lg:flex lg:flex-col ${!open && "hidden"}`}>
            <SubredditSearchForm
              executeSearch={executeSearch}
              setSubreddit={setSubreddit}
              categoryHandler={categoryHandler}
              timeframeHandler={timeframeHandler}
              categoryState={categoryState}
              subreddit={subreddit}
              isLoading={isLoading}
              disabled={isLoading}
            />

            <hr className="mt-6 mb-6" />
            <SubredditFilters
              getPosts={getPosts}
              dispatch={dispatch}
              page={page}
              filters={filters}
            />
            <hr className="mt-6 mb-6" />
          </div>

          <RecentlySearched
            user={user}
            executeSearch={executeSearch}
            setSubreddit={setSubreddit}
          />
          <div className="md:flex hidden">
            <MiscInfo />
          </div>
        </StyledSide>

        <section className="w-full flex-col">
          <QueueIndicator ModalStore={ModalStore} QueueStore={QueueStore} />

          {isLoading && (
            <div className="mt-20 mb-20 flex justify-center">
              <Loader size="2x" />
            </div>
          )}

          {!isLoading && (
            <>
              {posts.posts.length > 0 && (
                <>
                  <Grid>
                    {posts.posts
                      .sort((a, b) => {
                        return b.createdAt - a.createdAt;
                      })
                      .map((item, index) => (
                        <Card
                          data={item}
                          key={index}
                          user={user}
                          QueueStore={QueueStore}
                        />
                      ))}
                  </Grid>
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
