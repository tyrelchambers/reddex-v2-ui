import React from "react";
import styled from "styled-components";
import SubredditFilters from "../../components/SubredditFilters/SubredditFilters";
import SubredditSearch from "../../components/SubredditSearch/SubredditSearch";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const StyledGrid = styled.section``;

const Home = () => {
  return (
    <Wrapper>
      <main className="w-full max-w-screen-xl p-4">
        <div className="w-80">
          <SubredditSearch />
          <hr className="mt-6 mb-6" />
          <SubredditFilters />
        </div>
        <StyledGrid></StyledGrid>
      </main>
    </Wrapper>
  );
};

export default Home;
