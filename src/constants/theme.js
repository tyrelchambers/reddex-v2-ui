const colours = {
  white: "#ffffff",
  "off-white": "#f5f5f5",
  "accent-primary": "#da4167ff",
  "accent-2": "#657153",
  "accent-primary-light": "#F1BBC9",
  gray: "#d6d6d6",
  "dark-blue": "#12162bff",
  black: "#0d0c1dff",
  "gray-100": "rgba(243, 244, 246)",
  "gray-200": "rgba(229, 231, 235)",
  "gray-300": "rgba(209, 213, 219)",
  "gray-400": "rgba(156, 163, 175)",
  "gray-600": "rgba(75, 85, 99)",
  "gray-700": "rgba(55, 65, 81)",
  "gray-800": "rgba(31, 41, 55)",
  "gray-900": "rgba(17, 24, 39)",
  "green-500": "rgba(16, 185, 129)",
  "red-500": "rgba(239, 68, 68)",
};

const light = {
  backgroundMain: colours.white,
  backgroundSecondary: colours["off-white"],
  accentPrimary: colours["accent-primary"],
  contrast: colours.black,
  accent2: colours["accent-2"],
  accentPrimaryLight: colours["accent-primary-light"],
  text: colours["gray-800"],
  textLight: colours["gray-600"],
  border: colours["gray-300"],
  input: colours["off-white"],
  green: colours["green-500"],
  textSuperLight: colours["gray-400"],
  danger: colours["red-500"],
};

const dark = {
  backgroundMain: colours["gray-900"],
  backgroundSecondary: colours["gray-800"],
  text: colours["gray-100"],
  contrast: colours.white,
  accentPrimary: colours["accent-primary"],
  accent2: colours["accent-2"],
  accentPrimaryLight: colours["accent-primary-light"],
  border: colours["gray-600"],
  textLight: colours["gray-300"],
  input: colours["gray-600"],
  green: colours["green-500"],
  textSuperLight: colours["gray-400"],
  danger: colours["red-500"],
};

const themes = {
  light,
  dark,
};
export const currentTheme = (theme) => themes[theme];
