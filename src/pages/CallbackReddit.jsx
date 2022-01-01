import React, { useEffect } from "react";
import { useNavigate, useSearch } from "react-location";
import { useQueryClient } from "react-query";
import { getRedditAccessToken } from "../api/getRedditAccessToken";
import { getRedditProfile } from "../api/getRedditProfile";
import { getRedditTokens } from "../api/getRedditTokens";

const CallbackReddit = () => {
  const navigate = useNavigate();
  const { code } = useSearch();
  const queryClient = useQueryClient();

  useEffect(() => {
    (async () => {
      if (code) {
        await getRedditTokens(code);
        const { access_token } = await getRedditAccessToken();
        await getRedditProfile(access_token);
        queryClient.invalidateQueries("currentUser");
        navigate({ to: "/dashboard/reading_list/approved" });
      }
    })();
  }, [navigate]);

  return (
    <div>
      <p>Authenticating...</p>
    </div>
  );
};

export default CallbackReddit;
