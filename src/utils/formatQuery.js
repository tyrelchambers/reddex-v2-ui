export const formatQuery = (query) => {
  const formattedQuery = {};

  for (const key in query) {
    if (query.hasOwnProperty.call(query, key)) {
      formattedQuery[key] = {
        value: query[key].value,
        operator: query[key].operator,
      };
    }
  }

  return formattedQuery;
};
