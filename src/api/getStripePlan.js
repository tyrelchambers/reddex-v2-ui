import { request } from "../config/axios";

export const getStripePlan = () => {
  return request.get("/stripe/v1/plan");
};
