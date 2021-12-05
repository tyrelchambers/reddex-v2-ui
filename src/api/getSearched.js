import { request } from "../config/axios";

export const getSearched = () => {
  return request.get("/search/v1/");
};
