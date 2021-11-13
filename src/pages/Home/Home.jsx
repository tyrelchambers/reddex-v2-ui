import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import RecentlySearched from "../../components/RecentlySearched/RecentlySearched";
import SubredditFilters from "../../components/SubredditFilters/SubredditFilters";
import SubredditSearch from "../../components/SubredditSearch/SubredditSearch";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const StyledGrid = styled.section`
  grid-auto-rows: 400px;
`;

const data = [
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
  },
];

const Home = () => {
  return (
    <Wrapper>
      <main className="w-full max-w-screen-2xl ml-auto mr-auto p-4 flex gap-6">
        <div className="min-w-80 w-80 flex flex-col">
          <SubredditSearch />
          <hr className="mt-6 mb-6" />
          <SubredditFilters />
          <hr className="mt-6 mb-6" />
          <RecentlySearched />
        </div>
        <StyledGrid className="grid grid-cols-3 flex-1 gap-6 ">
          {data.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </StyledGrid>
      </main>
    </Wrapper>
  );
};

export default Home;
