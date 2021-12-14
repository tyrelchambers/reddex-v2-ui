import React from "react";
import { Button } from "../../../components/Button/Button";
import { H1 } from "../../../components/headings/h1";
import { H2 } from "../../../components/headings/h2";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { useSubscription } from "../../../hooks/useSubscription";

const Subscription = () => {
  const { subscription } = useSubscription();
  console.log(subscription);
  return (
    <div>
      <H1>Subscription</H1>
      <Subtitle>Your plan is managed with Stripe.</Subtitle>

      <Button className="mt-10">Manage subscription</Button>
    </div>
  );
};

export default Subscription;
