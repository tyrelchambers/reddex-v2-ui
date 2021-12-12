export const averageReadingTimeWithText = (text, wpm) => {
  const wordsPerMinute = wpm || 150; // Average case.
  let result;

  if (text.length > 0) {
    result = Math.ceil(text.length / wordsPerMinute);
  }

  return Number(result);
};
