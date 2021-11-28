export const formatSubject = (title) =>
  title.length > 80 ? title.slice(0, 77) + "..." : title;
