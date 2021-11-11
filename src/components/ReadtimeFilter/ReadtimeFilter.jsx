import React from "react";
import { quantityOptions } from "../../constants";
import Input from "../Input/Input";
import RSelect from "../RSelect/RSelect";

const ReadtimeFilter = () => {
  return (
    <div className="flex items-center gap-4 h-12 mt-2">
      <RSelect options={quantityOptions} className="w-56" />
      <Input type="number" />
    </div>
  );
};

export default ReadtimeFilter;
