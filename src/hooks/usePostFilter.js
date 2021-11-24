import React from "react";

export const usePostFilter = () => {
  const [filters, setFilters] = React.useState({});

  const addFilters = (f) => {
    setFilters({ ...filters, ...f });
  };

  const resetFilters = () => {
    setFilters({
      seriesOnly: false,
      upvotes: "",
      operator: "over",
      omitSeries: false,
      keywords: "",
      readTime: "",
      readTimeOperator: "over",
    });
  };

  return {
    filters,
    addFilters,
    resetFilters,
  };
};
