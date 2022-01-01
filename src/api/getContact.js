import { request } from "../config/axios";

export const getContact = (data) => {
  return request.get(`/contacts/v1/contact`, {
    params: {
      ...data,
    },
  });
};
