import { request } from "../config/axios";

export const getContacts = () => {
  return request.get("/contacts/v1/");
};
