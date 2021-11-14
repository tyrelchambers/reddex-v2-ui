import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import { H1 } from "../../components/headings/h1";

const data = [
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "nosleep",
  },
  {
    upvotes: 2000,
    author: "JohnDoeJohnDoeJohnDoeJohnDoe",
    title:
      "Welcome to Blackwell National Park. Please be respectful of fellow hikers, don't litter the campgrounds and watch out for the Others. [Part 3]",
    readingTime: "5 min read",
    upvoteRatio: "50",
    flair: "Animal abuse",
    subreddit: "letsnotmeet",
  },
];

const StyledGrid = styled.section`
  grid-auto-rows: 350px;
`;

const Completed = () => {
  return (
    <section>
      <div className="flex justify-between">
        <H1>Completed</H1>
      </div>

      <StyledGrid className="grid grid-cols-3 flex-1 gap-6  mt-8">
        {data.length > 0 &&
          data.map((item, index) => (
            <Card data={item} key={index} isCompletedItem />
          ))}
      </StyledGrid>
    </section>
  );
};

export default Completed;
