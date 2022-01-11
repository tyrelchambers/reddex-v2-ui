import {
  faBadgeCheck,
  faBolt,
  faCircleXmark,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { H2 } from "../headings/h2";
import { Button } from "../Button/Button";

const StyledWrapper = styled.div`
  width: 100%;

  h2 {
    color: ${(props) => props.theme.accentPrimary};
    font-size: 2rem;
  }

  ${(props) =>
    props.recommended &&
    `
      background-color: ${props.theme.accentPrimary};

      h2 {
        color: white;
      }

      .text-light {
        color: rgba(255, 255, 255, 0.8);
      }

      .text {
        color: white;
      }

      .feature svg {
        color: white;
      }

      .cta {
        background-color: white;
        color: ${props.theme.accentPrimary};
      }
  `}
`;

const PricingCard = ({ plan, label, recommended, term, clickHandler }) => {
  return (
    <StyledWrapper
      className={`pricing-card flex flex-col p-6 rounded-lg ${
        recommended ? "recommended" : ""
      }`}
      recommended={recommended}
    >
      <H2 className="flex items-center">
        {label}
        {recommended && (
          <p className="text-xs ml-6 bg-white text-accent-primary py-1 px-3 rounded-full">
            Recommended
          </p>
        )}
      </H2>

      <div className="flex flex-col mt-6 h-16">
        <p className="text-light mt-1 text-sm">{plan.bestFor}</p>
      </div>

      <p className="text font-semibold mt-8">What you'll get</p>
      <ul className="mt-4 flex flex-col gap-2 flex-1">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center feature">
            <FontAwesomeIcon
              icon={faBadgeCheck}
              className="text-green-500 mr-4"
            />
            <p className="text-light text-sm">{feature}</p>
          </li>
        ))}
        {plan.excluded &&
          plan.excluded.map((excluded, index) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-gray-400 mr-4"
              />
              <p className="text-light text-sm">{excluded}</p>
            </li>
          ))}
      </ul>
      <footer className="mt-10 flex flex-col  text-light">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text ">${term.price}</span>/
          {term.term}
        </div>

        {term.term === "year" && (
          <div className="flex items-baseline">
            <p className="text-sm mt-2">
              ${Number(term.price) + Number(plan["month"].price)}
              /year if paid monthly
            </p>
          </div>
        )}
        {term.benefit && (
          <p className="bg-green-50 text-green-700 p-2 rounded-lg px-4 mt-4 font-medium">
            <FontAwesomeIcon icon={faBolt} className="mr-2 " /> {term.benefit}
          </p>
        )}
        <Button
          className="cta mt-8"
          variant="outline-primary"
          onClick={clickHandler}
        >
          Go {label}
        </Button>
      </footer>
    </StyledWrapper>
  );
};

export default PricingCard;
