import React from "react";
import { Button } from "../Button/Button";
import { H3 } from "../headings/H3";

const RecentlySearched = () => {
  return (
    <div className="flex flex-col">
      <H3>Recently Searched</H3>

      <div className="grid grid-cols-2 mt-2  gap-4">
        <Button variant="secondary">Nosleep</Button>
        <Button variant="secondary">Nosleep</Button>
        <Button variant="secondary">Nosleep</Button>
        <Button variant="secondary">Nosleep</Button>
      </div>
    </div>
  );
};

export default RecentlySearched;
