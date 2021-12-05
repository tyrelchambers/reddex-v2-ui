import { request } from "../config/axios";

export const deleteSearched = (data) => {
  return request.delete("/search/v1/", {
    params: data,
  });
};
