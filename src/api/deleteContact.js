import { request } from "../config/axios";

export const deleteContact = (uuid) => {
  return request.delete(`/contacts/v1/delete/${uuid}`);
};
