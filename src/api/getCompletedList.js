import { request } from "../config/axios";

export const getCompletedList = () => {
  return request.get("/reading_list/v1/completed");
};
