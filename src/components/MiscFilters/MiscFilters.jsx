import React from "react";
import { Button } from "../Button/Button";

const MiscFilters = () => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <Button variant="secondary">Series Only</Button>
      <Button variant="secondary">Exclude Series</Button>
      <Button variant="secondary">Reset Filters</Button>
    </div>
  );
};

export default MiscFilters;
