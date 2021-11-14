const colours = {
  white: "#ffffff",
  "off-white": "#f5f5f5",
  "accent-primary": "#da4167ff",
  "accent-2": "#657153",
  gray: "#d6d6d6",
  "dark-blue": "#12162bff",
  black: "#0d0c1dff",
  "gray-100": "rgba(243, 244, 246)",
  "gray-800": "rgba(31, 41, 55)",
  "gray-900": "rgba(17, 24, 39)",
};

const light = {
  backgroundMain: colours.white,
  backgroundSecondary: colours["off-white"],
  accentPrimary: colours["accent-primary"],
  contrast: colours.black,
  accent2: colours["accent-2"],
};

const dark = {
  backgroundMain: colours["gray-900"],
  backgroundSecondary: colours["gray-800"],
  text: colours["gray-100"],
  contrast: colours.white,
  accentPrimary: colours["accent-primary"],
  accent2: colours["accent-2"],
};

const themes = {
  light,
  dark,
};
export const currentTheme = (theme) => themes[theme];
