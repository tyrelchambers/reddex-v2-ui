import { request } from "../config/axios";

export const getPostsFromDatabase = async ({ page, query }) => {
  return request.get("/posts/v1/", {
    params: {
      page,
      ...query,
    },
  });
};
