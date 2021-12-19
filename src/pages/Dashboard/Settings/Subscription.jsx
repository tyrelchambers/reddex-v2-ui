import React from "react";
import styled from "styled-components";
import { H1 } from "../../../components/headings/h1";
import { H2 } from "../../../components/headings/h2";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { useStripe } from "../../../hooks/useStripe";
import { useSubscription } from "../../../hooks/useSubscription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/pro-duotone-svg-icons";
import { Button } from "../../../components/Button/Button";
import { createNewStripePortal } from "../../../api/createNewStripePortal";

const StyledWrapper = styled.section`
  .plan-card {
    border: 1.5px solid ${(props) => props.theme.border};
  }

  .manage-subscription {
    color: ${(props) => props.theme.accentPrimary};
    text-decoration: none;
    background-color: ${(props) => props.theme.backgroundSecondary};
    width: fit-content;
  }
`;

const Subscription = () => {
  const { subscription } = useSubscription();
  const {
    stripePlan: { data },
  } = useStripe();

  const openPortal = async () => {
    const link = await createNewStripePortal({
      customerId: subscription.data.subscription.customerId,
    });
    window.open(link, "_blank");
  };

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
          <div className="w-full max-w-md plan-card p-4 rounded-lg mt-6">
            <header className="flex justify-between">
              <p className="text text-xl font-bold">{data.product.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-light">
                  <span className="text font-bold text-xl line-through">
                    ${(data.subscription.plan.amount / 100).toFixed(2)}
                  </span>
                  /mon
                </p>
                <p className="bg-green-100 text-green-600 px-4 py-1 rounded-full">
                  {data.subscription.discount.coupon.percent_off}% off
                </p>
              </div>
            </header>

            <Button
              onClick={openPortal}
              className="manage-subscription mt-4 flex items-center p-3 rounded-lg"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="mr-2"
              />
              Manage subscription
            </Button>
          </div>
        )}
      </main>
      {/* <Button className="mt-10">Manage subscription</Button> */}
    </StyledWrapper>
  );
};

export default Subscription;
