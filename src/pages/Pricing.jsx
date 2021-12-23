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

  .title {
    background: #fa4166; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #fa4166,
      #f1bbc9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #fa4166,
      #f1bbc9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    padding-bottom: 5px;
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
          <div className="max-w-5xl">
            <H1 className="text-6xl text-center title">
              Stop wasting time finding stories and asking for permission
            </H1>
            <Subtitle className="text-light mt-4 max-w-2xl text-center ml-auto mr-auto">
              Choose a plan below to take back your time and become a more
              efficient narrator. You can cancel anytime. No credit card
              required until the trial is over.{" "}
              <span className="font-bold">No commitments</span>.{" "}
              <span className="font-bold">No hidden fees</span>.
            </Subtitle>
          </div>

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
            All plans come with a{" "}
            <span className="font-bold">7 day free Pro</span> trial! Get 1 month
            free with a yearly plan.
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
