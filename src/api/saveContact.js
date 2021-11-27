import { request } from "../config/axios";

export const saveContact = (contact) => {
  return request.post("/contacts/v1/save", contact);
};
