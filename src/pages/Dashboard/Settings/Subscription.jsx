import React from "react";
import styled from "styled-components";
import { H1 } from "../../../components/headings/h1";
import { H2 } from "../../../components/headings/h2";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { useStripe } from "../../../hooks/useStripe";
import { useSubscription } from "../../../hooks/useSubscription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faTriangleExclamation,
} from "@fortawesome/pro-duotone-svg-icons";
import { createNewStripePortal } from "../../../api/createNewStripePortal";
import { format, fromUnixTime } from "date-fns";
import Loader from "../../../components/Loader/Loader";

const StyledWrapper = styled.section`
  .plan-card {
    border: 1.5px solid ${(props) => props.theme.border};
  }

  .manage-subscription {
    color: ${(props) => props.theme.accentPrimary};
    text-decoration: none;
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;

const Subscription = () => {
  const { subscription } = useSubscription();
  const {
    stripePlan: { data, isLoading },
  } = useStripe();

  const openPortal = async () => {
    const link = await createNewStripePortal({
      customerId: subscription.data.subscription.customerId,
    });
    window.open(link, "_blank");
  };

  if (isLoading) return <Loader size="2x" />;

  return (
    <StyledWrapper>
      <H1>Subscription</H1>
      <Subtitle>Your plan is managed with Stripe.</Subtitle>

      <main className="mt-10 max-w-screen-sm">
        <H2>Your plan</H2>
        <p className="text-light mt-2">
          You can manage your subscription through Stripe. There you can update
          your billing information, cancel or update your plan, and add payment
          information.{" "}
        </p>

        {data && (
          <div className="w-full max-w-md plan-card p-4 rounded-lg mt-8">
            <header className="flex justify-between">
              <p className="text text-xl font-bold">{data.product.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-light">
                  <span
                    className={`text font-bold text-xl ${
                      (data.subscription.discount?.coupon.percent_off ||
                        data.subscription.trial_end >
                          Math.floor(Date.now() / 1000)) &&
                      "line-through"
                    }`}
                  >
                    ${(data.subscription.plan.amount / 100).toFixed(2)}
                  </span>
                  /{data.subscription.plan.interval}
                </p>
                {data.subscription.discount?.coupon.percent_off && (
                  <p className="bg-green-100 text-green-600 px-4 py-1 rounded-full">
                    {data.subscription.discount.coupon.percent_off}% off
                  </p>
                )}
              </div>
            </header>

            {data.subscription.trial_end &&
              data.subscription.trial_end > Math.floor(Date.now() / 1000) && (
                <p className="text-sm text-light">
                  Your trial ends{" "}
                  {format(
                    fromUnixTime(data.subscription.trial_end),
                    "MMMM d, yyyy"
                  )}{" "}
                  , then your plan will switch to{" "}
                  {subscription.data?.subscription.plan}; billed per{" "}
                  {subscription.data?.subscription.term}
                </p>
              )}

            {data.subscription.cancel_at && (
              <p className="text-yellow-500 mt-2">
                <FontAwesomeIcon icon={faTriangleExclamation} /> Your account
                will be deleted on{" "}
                {format(
                  fromUnixTime(data.subscription.cancel_at),
                  "MMMM d, yyyy"
                )}
              </p>
            )}

            <button
              className="underline text-accent-primary mt-4"
              onClick={openPortal}
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="mr-2 text-xs"
              />
              manage your subscription
            </button>
          </div>
        )}

        {data.subscription.trial_end < Date.now() && (
          <div className="flex flex-col mt-16">
            <H2>About your trial</H2>
            <p className="text-light mt-2">
              In order to continue using Reddex, please add a payment method via
              the{" "}
              <button
                className="underline text-accent-primary"
                onClick={openPortal}
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mr-2 text-xs"
                />
                subscription manager
              </button>{" "}
              otherwise your account will be inactive.
            </p>
          </div>
        )}
      </main>
    </StyledWrapper>
  );
};

export default Subscription;
