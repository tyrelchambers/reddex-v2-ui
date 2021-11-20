import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import RecentlySearched from "../../components/RecentlySearched/RecentlySearched";
import SubredditFilters from "../../components/SubredditFilters/SubredditFilters";
import SubredditSearchForm from "../../forms/SubredditSearchForm";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const StyledGrid = styled.section`
  grid-auto-rows: 350px;
`;

const data = [];
const Home = () => {
  return (
    <Wrapper>
      <main className="w-full max-w-screen-3xl ml-auto mr-auto p-4 flex gap-6">
        <div className="min-w-80 w-80 ">
          <SubredditSearchForm />

          <hr className="mt-6 mb-6" />
          <SubredditFilters />
          <hr className="mt-6 mb-6" />
          <RecentlySearched />
        </div>
        <StyledGrid className="grid grid-cols-3 flex-1 gap-6 ">
          {data.length > 0 &&
            data.map((item, index) => <Card data={item} key={index} />)}
        </StyledGrid>
      </main>
    </Wrapper>
  );
};

export default Home;
