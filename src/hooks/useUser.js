import { useQuery } from "react-query";
import { getUser } from "../api/getUser";

export const useUser = () => {
  const token = localStorage.getItem("token");
  const query = useQuery("currentUser", getUser, {
    enabled: !!token,
  });

  return [query];
};
