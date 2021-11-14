import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import { H1 } from "../../components/headings/h1";
import RSelect from "../../components/RSelect/RSelect";
import { extractSubreddit } from "../../utils/extractSubreddit";

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

const StyledWrapper = styled.section`
  .active-filter {
    color: ${(props) => props.theme.text};
  }
`;

const Approved = () => {
  const [filters, setFilters] = useState(() =>
    extractSubreddit(data).map((sub) => ({
      value: sub,
      label: sub,
    }))
  );

  const [selected, setSelected] = useState("");

  return (
    <StyledWrapper>
      <div className="flex justify-between">
        <H1>Approved</H1>
        <div className="w-60">
          <RSelect
            placeholder="Add a filter"
            options={filters}
            onChange={(val) => setSelected(val.value)}
          />
        </div>
      </div>
      {selected && (
        <div className="flex mt-6 items-center active-filter">
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-4"
            onClick={() => setSelected("")}
          />
          <p className="text-accent-primary">{selected}</p>
        </div>
      )}
      <StyledGrid className="grid grid-cols-3 flex-1 gap-6  mt-8">
        {data.length > 0 &&
          data
            .filter((el) => {
              if (selected) {
                return el.subreddit === selected;
              }
              return true;
            })
            .map((item, index) => (
              <Card data={item} key={index} isReadingItem />
            ))}
      </StyledGrid>
    </StyledWrapper>
  );
};

export default Approved;
