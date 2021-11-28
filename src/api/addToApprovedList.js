import { request } from "../config/axios";

export const addToApprovedList = (message) => {
  return request.post("/reading_list/v1/approved/save", message);
};
