import React, { useEffect } from "react";
import { useNavigate, useSearch } from "react-location";
import { getRedditAccessToken } from "../api/getRedditAccessToken";
import { getRedditProfile } from "../api/getRedditProfile";
import { getRedditTokens } from "../api/getRedditTokens";

const CallbackReddit = () => {
  const navigate = useNavigate();
  const { code } = useSearch();

  useEffect(() => {
    (async () => {
      if (code) {
        await getRedditTokens(code);
        const { access_token } = await getRedditAccessToken();
        getRedditProfile(access_token);
        navigate({ to: "/dashboard" });
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
