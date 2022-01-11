import { faInputText } from "@fortawesome/pro-regular-svg-icons";
import React from "react";
import { H2 } from "../components/headings/h2";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import RToggle from "../components/RToggle/RToggle";
import Textarea from "../components/Textarea/Textarea";
import Form from "./Form";

const SiteBuilderSubmissonForm = ({ state, dispatch }) => {
  return (
    <Form className="mt-6">
      <div className="flex">
        <RToggle
          name="submission_form"
          className="mr-4"
          value={state.submissionForm.enabled}
          onChange={(e) => {
            dispatch({
              type: "SET_SUBMISSION_FORM",
              field: "enabled",
              payload: e.target.checked,
            });
          }}
        />
        <div className="flex flex-col">
          <p className="font-bold headline">Activate Submission Form</p>
          <p className="subtitle">
            Activate this submission form to allow visitors to email you their
            own stories
          </p>
        </div>
      </div>

      <InputWrapper label="Page Title">
        <Input
          placeholder="Name of your submission page"
          icon={faInputText}
          value={state.submissionForm.title}
          onInput={(e) =>
            dispatch({
              type: "SET_SUBMISSION_FORM",
              field: "title",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Subtitle">
        <Input
          placeholder="Subtitle for your submission page"
          icon={faInputText}
          value={state.submissionForm.subTitle}
          onInput={(e) =>
            dispatch({
              type: "SET_SUBMISSION_FORM",
              field: "subTitle",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Rules for Submission">
        <Textarea
          placeholder="Add your rules for submission here"
          value={state.submissionForm.rules}
          onInput={(e) =>
            dispatch({
              type: "SET_SUBMISSION_FORM",
              field: "rules",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <H2>Customize Modules</H2>
      <div className="flex flex-col gap-4">
        {state.submissionForm.modules.map((module, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-4 module p-3 rounded-lg gap-4"
          >
            <p className="col-span-2 headline font-bold">{module.label}</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                name={`${module.type}_required`}
                checked={module.required}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SUBMISSION_FORM_MODULE",
                    field: module.type,
                    payload: e.target.checked,
                    subField: "required",
                  })
                }
              />
              <p className="subtitle">Required</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                name={`${module.type}_enabled`}
                checked={module.enabled}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SUBMISSION_FORM_MODULE",
                    field: module.type,
                    payload: e.target.checked,
                    subField: "enabled",
                  })
                }
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
