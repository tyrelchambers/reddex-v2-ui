import React from "react";
import Select from "react-select";
import { withTheme } from "styled-components";

const RSelect = ({ options, onChange, className = "", theme }) => {
  console.log("Current theme: ", theme);

  return (
    <Select
      options={options}
      onChange={onChange}
      defaultValue={options[0]}
      className={className}
      styles={{
        menu: (provided) => ({
          ...provided,
          backgroundColor: theme.backgroundSecondary,
          color: theme.text,
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: theme.backgroundSecondary,
          height: "100%",
          color: theme.text,
        }),
        container: (provided) => ({
          ...provided,
          height: "100%",
          backgroundColor: theme.backgroundSecondary,
          color: theme.text,
        }),
        singleValue: (provided) => ({
          ...provided,
          color: theme.text,
        }),
      }}
    />
  );
};

export default withTheme(RSelect);
