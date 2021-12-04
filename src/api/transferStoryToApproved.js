import { request } from "../config/axios";

export const transferStoryToApproved = (uuid) => {
  return request.put("/reading_list/v1/transfer/to_approved", {
    data: { uuid },
  });
};
