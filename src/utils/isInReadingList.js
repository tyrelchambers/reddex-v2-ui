export const isInReadingList = (list, message) => {
  return (
    list.data.filter((item) =>
      item.title.replace("...", "").includes(message.subject.replace("...", ""))
    ).length > 0
  );
};
