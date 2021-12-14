import { request } from "../config/axios";

export const createNewStripePortal = () => {
  return request.post();
};
