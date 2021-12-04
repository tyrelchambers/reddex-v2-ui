export const formatOptions = ({ options, key }) => {
  return options.map((opt) => ({
    label: opt[key],
    value: opt[key],
    ...opt,
  }));
};
