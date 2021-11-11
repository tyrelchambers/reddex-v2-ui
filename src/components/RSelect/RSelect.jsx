import React from "react";
import Select from "react-select";

const RSelect = ({ options, onChange }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      styles={{
        menu: (provided) => ({
          ...provided,
          backgroundColor: "var(--off-white)",
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: "var(--off-white)",
        }),
      }}
    />
  );
};

export default RSelect;
