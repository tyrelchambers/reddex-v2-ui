import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getRedditAccessToken } from "../api/getRedditAccessToken";
import { getRedditProfile } from "../api/getRedditProfile";
import { getRedditTokens } from "../api/getRedditTokens";
import { DASHBOARD } from "../routes/index.routes";

const CallbackReddit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);

    const code = param.get("code");
    (async () => {
      if (code) {
        await getRedditTokens(code);
        const { access_token } = await getRedditAccessToken();
        getRedditProfile(access_token);
        navigate(DASHBOARD);
      }
    })();
  }, []);

  return (
    <div>
      <p>Authenticating...</p>
    </div>
  );
};

export default CallbackReddit;
