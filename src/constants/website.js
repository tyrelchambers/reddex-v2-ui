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
  },
  submissionForm: {
    enabled: false,
    title: "",
    rules: "",
    subtitle: "",
    modules: [
      {
        type: "author",
        label: "Author",
        enabled: false,
        required: false,
      },
      {
        type: "title",
        label: "Title",
        enabled: false,
        required: false,
      },

      {
        type: "email",
        label: "Email",
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
