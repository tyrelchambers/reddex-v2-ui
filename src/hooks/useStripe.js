import { useQuery } from "react-query";
import { getStripePlan } from "../api/getStripePlan";

export const useStripe = () => {
  const stripePlan = useQuery("striplePlan", getStripePlan);

  return {
    stripePlan,
  };
};
