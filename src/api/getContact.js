import { request } from "../config/axios";

export const getContact = (uuid) => {
  return request.get(`/contacts/v1/${uuid}`);
};
