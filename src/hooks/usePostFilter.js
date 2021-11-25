import { useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

export const usePostFilter = () => {
  const [filters, dispatch] = useReducer(filterReducer, {});

  return {
    filters,
    dispatch,
  };
};
