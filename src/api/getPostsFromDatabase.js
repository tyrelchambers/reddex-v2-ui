import { request } from "../config/axios";
import { formatQuery } from "../utils/formatQuery";
import isEmpty from "../utils/isEmpty";
export const getPostsFromDatabase = async ({ page, query }) => {
  return request.get("/posts/v1/", {
    params: {
      page,
      ...(!isEmpty(query) && { filters: formatQuery(query) }),
    },
  });
};
