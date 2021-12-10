export const initialState = {
  enabled: false,
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
    color: "#000000",
  },
  submissionForm: {
    enabled: false,
    title: "",
    rules: "",
    subtitle: "",
    modules: [
      {
        type: "author",
        enabled: false,
        required: false,
      },
      {
        type: "title",
        enabled: false,
        required: false,
      },
      {
        type: "sentToOthers",
        enabled: false,
        required: false,
      },
      {
        type: "email",
        enabled: false,
        required: false,
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
