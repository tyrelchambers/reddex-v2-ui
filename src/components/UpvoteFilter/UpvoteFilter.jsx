import React from "react";
import { upvoteOptions } from "../../constants";
import Input from "../Input/Input";
import RSelect from "../RSelect/RSelect";

const UpvoteFilter = () => {
  return (
    <div className="flex items-center gap-4 h-12 mt-2">
      <RSelect options={upvoteOptions} className="w-56" />
      <Input type="number" />
    </div>
  );
};

export default UpvoteFilter;
