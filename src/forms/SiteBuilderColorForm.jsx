import React from "react";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RSelect from "../components/RSelect/RSelect";
import Form from "./Form";

const SiteBuilderColorForm = ({ state, dispatch }) => {
  return (
    <Form className="flex flex-col">
      <InputWrapper label="Theme Mode">
        <RSelect
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
          className="max-w-xs"
          defaultValue={{
            value: state.theme.mode,
            label:
              state.theme.mode.charAt(0).toUpperCase() +
              state.theme.mode.substr(1).toLowerCase(),
          }}
          onChange={(e) =>
            dispatch({
              type: "SET_COLOR",
              field: "mode",
              payload: e.value,
            })
          }
        />
      </InputWrapper>
    </Form>
  );
};

export default SiteBuilderColorForm;
