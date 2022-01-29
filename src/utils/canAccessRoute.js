import { acceptedRoutes } from "../constants";
import errors from "../constants/subscriptionErrors";

export const canAccessRoute = (subscription) => {
  const isAcceptedRoute = acceptedRoutes.includes(window.location.pathname);
  if (
    subscription.status === "active" ||
    subscription.status === "trialing" ||
    isAcceptedRoute
  ) {
    return {
      status: true,
    };
  }

  return {
    status: false,
    error: errors[subscription?.status],
  };
};
