import React, { useContext, useEffect, useState } from "react";
import { H1 } from "../../../components/headings/h1";
import RToggle from "../../../components/RToggle/RToggle";
import Subtitle from "../../../components/Subtitle/Subtitle";
import WebsiteSaveBanner from "../../../components/WebsiteSaveBanner/WebsiteSaveBanner";
import { useWebsite } from "../../../hooks/useWebsite";
import { Outlet, useNavigate } from "react-location";
import { WebsiteContext } from "../../../contexts/websiteContext";
import { initialState } from "../../../constants/website";
import _ from "lodash";
import { toast } from "react-toastify";
import { useSubscription } from "../../../hooks/useSubscription";

const SiteBuilder = () => {
  const { websiteQuery, updateWebsiteMutation } = useWebsite();
  const [state, dispatch] = useContext(WebsiteContext);
  const [isChanged, setIsChanged] = useState(false);

  const navigate = useNavigate();
  const {
    subscription: { data },
  } = useSubscription();

  useEffect(() => {
    if (data?.subscription.plan === "basic") {
      toast.warn(
        "You are using the basic plan. Please upgrade to the pro plan to unlock all features."
      );
      return navigate({ to: "/dashboard/settings/subscription" });
    }
  }, [data]);

  useEffect(() => {
    if (websiteQuery.data?.config) {
      const clone = JSON.parse(JSON.stringify(websiteQuery.data.config));
      dispatch({
        type: "INIT_WEBSITE",
        payload: {
          ...initialState,
          ...clone,
        },
      });
    }
  }, [websiteQuery.data]);

  useEffect(() => {
    if (websiteQuery.data?.config) {
      setIsChanged(!_.isEqual(websiteQuery.data.config, state));
    }
  }, [state, websiteQuery.data]);

  const reset = () => {
    dispatch({ type: "RESET", payload: websiteQuery.data.config });
  };

  const saveHandler = () => {
    updateWebsiteMutation.mutate(state);
  };

  return (
    <section className="max-w-2xl">
      {isChanged && <WebsiteSaveBanner reset={reset} save={saveHandler} />}
      <div className="flex justify-between mt-10">
        <div className="flex flex-col">
          <H1>Site Builder</H1>
          <Subtitle className="mt-2">
            Build your website and advertise what you do.
          </Subtitle>
        </div>
        <a
          href={`${window.location.protocol}//${state.general.domain}.${window.location.host}`}
          className="text-accent-primary underline"
        >
          View your site
        </a>
      </div>

      <hr className="mt-10 mb-10" />
      <div className="flex mb-2">
        <RToggle
          name="enabled"
          className="mr-4 flex items-center"
          checked={state.enabled}
          onChange={(e) =>
            dispatch({
              type: "SET_WEBSITE",
              payload: e.target.checked,
            })
          }
        />
        <div className="flex flex-col">
          <p className="font-bold text">Activate Website</p>
          <p className="text-light">
            Enable your website to be seen by the public.
          </p>
        </div>
      </div>
      <hr className="mt-10 mb-10" />

      <main className="mt-10 max-w-xl">
        <Outlet />
      </main>
    </section>
  );
};

export default SiteBuilder;
