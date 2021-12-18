import { request } from "../config/axios";

export const createStripeCustomer = (data) => {
  return request.post("/subscription/v1/customer/new", data);
};
