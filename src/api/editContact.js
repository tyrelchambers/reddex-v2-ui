import { request } from "../config/axios";

export const editContact = (data) => {
  return request.put(`/contacts/v1/${data.uuid}/edit`, data);
};
