import { request } from "../config/axios";

export const getApprovedList = () => {
  return request.get("/reading_list/v1/approved");
};
