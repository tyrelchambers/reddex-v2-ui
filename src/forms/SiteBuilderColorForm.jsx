import React from "react";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RSelect from "../components/RSelect/RSelect";
import Form from "./Form";

const SiteBuilderColorForm = () => {
  return (
    <Form className="flex flex-col">
      <InputWrapper label="Accent colour (click to change)">
        <input type="color" name="color" className="h-10 w-10" />
      </InputWrapper>

      <InputWrapper label="Theme Mode">
        <RSelect
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
          className="max-w-xs"
        />
      </InputWrapper>
    </Form>
  );
};

export default SiteBuilderColorForm;
