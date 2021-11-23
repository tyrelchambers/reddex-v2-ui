export const averageReadingTime = (text, wpm) => {
  const wordsPerMinute = wpm || 150; // Average case.
  let result;

  let textLength = text.split(" ").length; // Split by words
  if (textLength > 0) {
    let value = Math.ceil(textLength / wordsPerMinute);
    result = `~${value} `;
  }

  return result;
};
