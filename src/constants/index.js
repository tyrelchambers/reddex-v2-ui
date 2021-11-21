import config from "../config/config";

export const subredditCategories = [
  {
    label: "Hot",
    value: "hot",
  },
  {
    label: "New",
    value: "new",
  },
  {
    label: "Rising",
    value: "rising",
  },
  {
    label: "Controversial",
    value: "controversial",
  },
  {
    label: "Top",
    value: "top",
  },
];

export const quantityOptions = [
  {
    label: "Over",
    value: "over",
  },
  {
    label: "Under",
    value: "under",
  },
  {
    label: "Equal",
    value: "equal",
  },
];

export const redditUrl = `https://www.reddit.com/api/v1/authorize?client_id=${
  config[process.env.NODE_ENV].redditApp
}&response_type=code&state=storiesaftermidnightreddex&redirect_uri=${
  config[process.env.NODE_ENV].redditRedirect
}&duration=permanent&scope=privatemessages identity`;
