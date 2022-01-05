import config from "../config/config";
import tweet1 from "../assets/images/Tweet by AsTheJeffreyDreams🎙️🌌.png";

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

export const timeframeOptions = [
  {
    label: "Past Hour",
    value: "hour",
  },
  {
    label: "Past 24 Hours",
    value: "day",
  },
  {
    label: "Past Week",
    value: "week",
  },
  {
    label: "Past Month",
    value: "month",
  },
  {
    label: "Past Year",
    value: "year",
  },
  {
    label: "Of All Time",
    value: "all",
  },
];

export const redditUrl = `https://www.reddit.com/api/v1/authorize?client_id=${
  config[process.env.NODE_ENV].redditApp
}&response_type=code&state=storiesaftermidnightreddex&redirect_uri=${
  config[process.env.NODE_ENV].redditRedirect
}&duration=permanent&scope=privatemessages identity`;

export const composeUrl = `https://oauth.reddit.com/api/compose`;

export const inboxSearchOptions = [
  { label: "Subject", value: "subject" },
  { label: "Author", value: "dest" },
];

export const trustedBy = [
  "Mr.CreepyPasta",
  "AsTheRavenDreams",
  "TheDarkNarrator",
  "To_42",
  "TheOminousDarkness",
  "Margbot",
  "GothicRose",
  "OriginalGensen",
  "Dead Leaf Clover",
];

export const twitterTestimonies = [tweet1];
export const acceptedRoutes = ["/dashboard/settings/subscription"];
