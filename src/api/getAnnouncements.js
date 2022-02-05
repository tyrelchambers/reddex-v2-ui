import { request } from "../config/axios";

export const getAnnouncements = () => {
  return request.get("/announcements/v1/all");
};
