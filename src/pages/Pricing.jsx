import React from "react";
import Wrapper from "../layouts/Wrapper/Wrapper";
import { H1 } from "../components/headings/h1";
import Subtitle from "../components/Subtitle/Subtitle";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import PricingCard from "../components/PricingCard/PricingCard";
import { termPricing } from "../constants/pricing";
import { useNavigate } from "react-location";

const StyledWrapper = styled.div`
  .term-wrapper {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  .term-button {
    color: ${(props) => props.theme.textLight};
  }

  .is-active {
    background-color: ${(props) => props.theme.accentPrimary};
    color: white;
  }
`;

const Pricing = () => {
  const [term, setTerm] = useState("monthly");
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);
  const navigate = useNavigate();
  const basicPlan = termPricing["basic"];
  const proPlan = termPricing["pro"];

  const termHandler = (term) => {
    setTerm(term);
  };

  return (
    <StyledWrapper theme={themeStyles}>
      <Wrapper>
        <main className="max-w-screen-xl ml-auto mr-auto mt-10 flex flex-col items-center">
          <H1 className="text-4xl">Pricing</H1>
          <Subtitle className="text-light mt-4">
            Choose a plan that works best for you and your channel
          </Subtitle>

          <div className=" term-wrapper p-2 flex gap-6 rounded-full mt-20">
            <button
              className={`term-button p-2 rounded-full px-4 ${
                term === "monthly" && "is-active"
              }`}
              onClick={() => termHandler("monthly")}
            >
              Monthly
            </button>
            <button
              className={`term-button p-2 rounded-full px-4 ${
                term === "yearly" && "is-active"
              }`}
              onClick={() => termHandler("yearly")}
            >
              Yearly
            </button>
          </div>

          <p className="mt-10  text-accent-primary text-2xl">
            All plans come with a <span className="font-bold">7 day free</span>{" "}
            trial!
          </p>

          <section className="grid grid-cols-2 max-w-3xl w-full mt-10 gap-6 mb-20">
            <PricingCard
              plan={basicPlan}
              label="Basic"
              term={termPricing["basic"][term]}
              clickHandler={() => navigate({ to: `/register?plan=basic` })}
            />

            <PricingCard
              plan={proPlan}
              label="Pro"
              term={termPricing["pro"][term]}
              recommended
              clickHandler={() => navigate({ to: `/register?plan=pro` })}
            />
          </section>
        </main>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Pricing;
