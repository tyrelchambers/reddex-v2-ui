import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import { H1 } from "../../components/headings/h1";
import Grid from "../../layouts/Grid/Grid";

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

const Completed = () => {
  return (
    <section>
      <div className="flex justify-between">
        <H1>Completed</H1>
      </div>

      <Grid>
        {data.length > 0 &&
          data.map((item, index) => (
            <Card data={item} key={index} isCompletedItem />
          ))}
      </Grid>
    </section>
  );
};

export default Completed;
