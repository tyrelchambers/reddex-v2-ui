import React from "react";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RSelect from "../components/RSelect/RSelect";
import Form from "./Form";

const SiteBuilderColorForm = ({ state, dispatch }) => {
  return (
    <Form className="flex flex-col">
      <InputWrapper label="Accent colour (click to change)">
        <input
          type="color"
          name="color"
          className="h-10 w-10"
          value={state.theme.color}
          onChange={(e) =>
            dispatch({
              type: "SET_COLOR",
              field: "color",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Theme Mode">
        <RSelect
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
          className="max-w-xs"
          defaultValue={state.theme.mode}
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
