import { faInputText } from "@fortawesome/pro-regular-svg-icons";
import React from "react";
import { H2 } from "../components/headings/h2";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RToggle from "../components/RToggle/RToggle";
import Textarea from "../components/Textarea/Textarea";
import Form from "./Form";
import modules from "../constants/modules";

const SiteBuilderSubmissonForm = () => {
  return (
    <Form className="mt-6">
      <div className="flex">
        <RToggle name="submission_form" className="mr-4" />
        <div className="flex flex-col">
          <p className="font-bold headline">Activate Submission Form</p>
          <p className="subtitle">
            Activate this submission form to allow visitors to email you their
            own stories
          </p>
        </div>
      </div>

      <InputWrapper label="Page Title">
        <Input placeholder="Name of your submission page" icon={faInputText} />
      </InputWrapper>

      <InputWrapper label="Subtitle">
        <Input
          placeholder="Subtitle for your submission page"
          icon={faInputText}
        />
      </InputWrapper>

      <InputWrapper label="Rules for Submission">
        <Textarea placeholder="Add your rules for submission here" />
      </InputWrapper>

      <H2>Customize Modules</H2>
      <div className="flex flex-col gap-4">
        {modules.map((module, index) => (
          <div key={index} className="grid grid-cols-4 module p-3 rounded-lg">
            <p className="col-span-2 headline font-bold">{module.label}</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                name={`${module.value}_required`}
              />
              <p className="subtitle">Required</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                name={`${module.value}_enabled`}
              />
              <p className="subtitle">Enabled</p>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default SiteBuilderSubmissonForm;
