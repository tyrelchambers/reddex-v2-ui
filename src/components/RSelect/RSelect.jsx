import React from "react";
import Select from "react-select";

const RSelect = ({ options, onChange, className = "" }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      defaultValue={options[0]}
      className={className}
      styles={{
        menu: (provided) => ({
          ...provided,
          backgroundColor: "var(--off-white)",
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: "var(--off-white)",
          height: "100%",
        }),
        container: (provided) => ({
          ...provided,
          height: "100%",
        }),
      }}
    />
  );
};

export default RSelect;
