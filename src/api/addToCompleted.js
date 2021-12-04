import { request } from "../config/axios";

export const addToCompleted = (uuid) => {
  return request.put("/reading_list/v1/transfer/to_completed", {
    data: { uuid },
  });
};
