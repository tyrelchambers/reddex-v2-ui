import React from "react";
import Input from "../Input/Input";

const KeywordsFilter = () => {
  return (
    <div className="flex items-center gap-4 h-12 mt-2">
      <Input type="text" placeholder="Comma separated..." />
    </div>
  );
};

export default KeywordsFilter;
