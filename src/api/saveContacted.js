import { request } from "../config/axios";

export const saveContacted = (data) => {
  return request.post("/contacted/v1/save", data);
};
