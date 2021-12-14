import { request } from "../config/axios";

export const getUserSubscription = () => {
  return request.get("/subscriptions/v1/me");
};
