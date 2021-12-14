import { useQuery } from "react-query";
import { getUserSubscription } from "../api/getUserSubscription";

export const useSubscription = () => {
  const subscription = useQuery("subscription", getUserSubscription());

  return {
    subscription,
  };
};
