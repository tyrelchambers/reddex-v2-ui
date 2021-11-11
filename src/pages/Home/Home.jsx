import React from "react";
import styled from "styled-components";
import SubredditSearch from "../../components/SubredditSearch/SubredditSearch";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const StyledGrid = styled.section``;

const Home = () => {
  return (
    <Wrapper>
      <main className="w-full max-w-screen-xl p-4">
        <div className="w-72">
          <SubredditSearch />
        </div>
        <StyledGrid></StyledGrid>
      </main>
    </Wrapper>
  );
};

export default Home;
