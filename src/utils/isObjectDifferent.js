export const isObjectDifferent = (a, b) => {
  return JSON.stringify(a) !== JSON.stringify(b);
};
