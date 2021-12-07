import { useEffect, useReducer, useState } from "react";
import { websiteReducer } from "../reducers/websiteReducer";
import { isObjectDifferent } from "../utils/isObjectDifferent";

const initialState = {
  general: {
    domain: "",
    siteName: "",
    description: "",
    bannerUrl: "",
  },
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    podcast: "",
    patreon: "",
  },
  theme: {
    mode: "light",
    color: "",
  },
  submissionForm: {
    enabled: false,
    title: "",
    rules: "",
    subtitle: "",
    modules: [
      {
        type: "author",
        enabled: true,
        required: true,
      },
      {
        type: "title",
        enabled: true,
        required: true,
      },
      {
        type: "sentToOthers",
        enabled: true,
        required: true,
      },
      {
        type: "email",
        enabled: true,
        required: true,
      },
    ],
  },
  timelines: [
    {
      type: "twitter",
      enabled: false,
      username: "",
    },
    {
      type: "youtube",
      enabled: false,
      username: "",
    },
  ],
};

export const useWebsite = () => {
  const [state, dispatch] = useReducer(websiteReducer, initialState);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(isObjectDifferent(initialState, state));
  }, [state]);

  return {
    state,
    dispatch,
    isChanged,
  };
};
