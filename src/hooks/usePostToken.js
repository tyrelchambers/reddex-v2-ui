import { useState } from "react";
import { useQuery } from "react-query";
import { getPostToken } from "../api/getPostToken";

export const usePostToken = () => {
  const [postToken, setPostToken] = useState(localStorage.getItem("postToken"));

  useQuery("postToken", getPostToken, {
    enabled: !postToken,
    onSuccess: (res) => {
      if (res.postToken) {
        setPostToken(res.postToken);
        localStorage.setItem("postToken", res.postToken);
      }
    },
    retry: 1,
  });

  return [postToken];
};
