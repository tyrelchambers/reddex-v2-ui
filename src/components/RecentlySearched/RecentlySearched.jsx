import React from "react";
import { Button } from "../Button/Button";
import { H3 } from "../headings/H3";

const RecentlySearched = ({ user, executeSearch, setSubreddit }) => {
  const handleClick = (val) => {
    setSubreddit(val.subreddit);
    executeSearch();
  };

  return (
    <div className="flex flex-col w-full">
      <H3>Recently Searched</H3>

      <div className="grid lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 mt-2  gap-4">
        {user?.Searcheds &&
          user.Searcheds.map((searched, index) => (
            <Button
              key={index}
              variant="secondary"
              onClick={() => handleClick(searched)}
            >
              {searched.subreddit}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default RecentlySearched;
