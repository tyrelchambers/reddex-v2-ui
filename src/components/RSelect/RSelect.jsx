import React from "react";
import Select from "react-select";
import { withTheme } from "styled-components";

const RSelect = ({
  options,
  onChange,
  className = "",
  theme,
  setDefault,
  defaultValue,
  ...rest
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      className={className}
      defaultValue={setDefault ? (options[0] ? options[0] : []) : defaultValue}
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
          borderColor: theme.border,
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
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? theme.accentPrimary : "",
          color: state.isFocused ? "var(--white)" : theme.text,
        }),
      }}
      {...rest}
    />
  );
};

export default withTheme(RSelect);
