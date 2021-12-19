import { request } from "../config/axios";

export const createNewStripePortal = (data) => {
  console.log(data);
  return request.post("/stripe/v1/create-portal", data);
};
